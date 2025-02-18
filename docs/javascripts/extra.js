

document$.subscribe(function() {
    if (document.getElementById("submit_button")) {
        document.getElementById("submit_button").onclick = testi_nappi
    }
    if (document.getElementById("submit_button_list")) {
        document.getElementById("submit_button_list").onclick = testi_nappi_lista
    }
})

function tulosta_virherivit(virheet, elementtiin) {
    if (virheet.length > 0) {
        var osio = document.getElementById(elementtiin)
        osio.innerHTML = "<b>Seuraavat syötteet menivät väärin</b>: <br>"
        
        var taulu = document.createElement('table')
        var taulurunko = document.createElement('tbody')
        var otsakerivi = taulu.insertRow();
        var syote_otsake = otsakerivi.insertCell();
        syote_otsake.append(document.createTextNode("Syöte"))
        var annettu_otsake = otsakerivi.insertCell();
        annettu_otsake.append(document.createTextNode("Vastauksesi"))
        var odotettu_otsake = otsakerivi.insertCell();
        odotettu_otsake.append(document.createTextNode("Oikea"))

        otsakerivi.appendChild(syote_otsake)
        otsakerivi.appendChild(annettu_otsake)
        otsakerivi.appendChild(odotettu_otsake)
        
        for (let i=0; i<virheet.length; ++i) {
            var rivi = taulu.insertRow()
            rivi.insertCell().append(document.createTextNode(virheet[i][0]))
            rivi.insertCell().append(document.createTextNode(virheet[i][1]))
            rivi.insertCell().append(document.createTextNode(virheet[i][2]))
        }

        osio.appendChild(taulu)
    } else {
        document.getElementById(elementtiin).innerHTML = "<b>Kaikki syötteet olivat oikein.</b> <br>"
    }
}

function tulosta_virhelista(tulos, elementtiin) {
    var osio = document.getElementById(elementtiin)
    if (tulos.oikein == true) {
        osio.innerHTML = "<b>Kaikki syötteet olivat oikein.</b> <br>"
    } else {
        osio.innerHTML = ""
        if (tulos.virheet.length > 0) {
            osio.innerHTML += "<b>Seuraavat antamasi rivit olivat ylimääräisiä:</b> <br>"
            for (let i=0; i<tulos.virheet.length; i++) {
                osio.innerHTML += tulos.virheet[i] + "<br>"
            }
        }
        if (tulos.puuttuvat.length > 0) {
            osio.innerHTML += "<b>Seuraavat rivit puuttuivat vastauksestasi:</b> <br>"
            for (let i=0; i<tulos.puuttuvat.length; i++) {
                osio.innerHTML += tulos.puuttuvat[i] + "<br>"
            }
        }
    }
}



function testi_nappi() {
    var vastaustiedosto = document.getElementById("vastaustiedosto").innerHTML
    var tehtavatiedosto = document.getElementById("tehtavatiedosto").innerHTML
    var syote = document.getElementById("tulos").value

    var virhe_elementti = "virhelista"

    if (syote.length == 0) {
        document.getElementById(virhe_elementti).innerHTML = "<b>Vastauskenttä on tyhjä.</b>"
        return
    }

    tarkista_rivit(syote, vastaustiedosto, tehtavatiedosto)
    .then(virheet => {
        tulosta_virherivit(virheet, virhe_elementti)
    })
}

function testi_nappi_lista() {
    var vastaustiedosto = document.getElementById("vastaustiedosto").innerHTML
    var tehtavatiedosto = document.getElementById("tehtavatiedosto").innerHTML
    var syote = document.getElementById("tulos").value

    var virhe_elementti = "virhelista"

    if (syote.length == 0) {
        document.getElementById(virhe_elementti).innerHTML = "<b>Vastauskenttä on tyhjä.</b>"
        return
    }

    tarkista_lista(syote, vastaustiedosto, tehtavatiedosto)
    .then(tulos => {
        tulosta_virhelista(tulos, virhe_elementti)
    })
}


function tarkista_rivit(syote, vastaustiedosto_url, tehtavatiedosto_url) {
    return fetch(vastaustiedosto_url)
    .then(verkko_vastaus => {
        return verkko_vastaus.text()
    })
    .then(oikea_vastaus => {
        return fetch(tehtavatiedosto_url)
        .then(verkko_tehtava => verkko_tehtava.text())
        .then(tehtava_teksti => {
            var tehtavat = tehtava_teksti.split(/\r?\n|\r|\n/g)
            var oikeat_vastaukset = oikea_vastaus.split(/\r?\n|\r|\n/g)
            var syotteet = syote.split(/\r?\n|\r|\n/g)
    
            var virheet = []
    
            for (let i=0; i< oikeat_vastaukset.length; i++) {
                if (oikeat_vastaukset[i] !== syotteet[i]) {
                    virheet.push([tehtavat[i], syotteet[i], oikeat_vastaukset[i]])
                }
            }
            return virheet
        })
    })
}

function tarkista_lista(syote, vastaustiedosto_url, tehtavatiedosto_url) {
    return fetch(vastaustiedosto_url)
    .then(verkko_vastaus => {
        return verkko_vastaus.text()
    })
    .then(oikea_vastaus => {
        return fetch(tehtavatiedosto_url)
        .then(verkko_tehtava => verkko_tehtava.text())
        .then(tehtava_teksti => {
            var tehtavat = tehtava_teksti.split(/\r?\n|\r|\n/g)
            var oikeat_vastaukset = oikea_vastaus.split(/\r?\n|\r|\n/g)
            var syotteet = syote.split(/\r?\n|\r|\n/g)
            
            var virheet = syotteet.filter(e => {
                return oikeat_vastaukset.includes(e) == false
            })
            var puuttuvat = oikeat_vastaukset.filter(e => {
                return syotteet.includes(e) == false
            })
            
            console.log(virheet.length + " -- " + puuttuvat.length)

            return {"virheet": virheet, "puuttuvat": puuttuvat, "oikein": (virheet.length == 0 && puuttuvat.length == 0)}
        })
    })
}