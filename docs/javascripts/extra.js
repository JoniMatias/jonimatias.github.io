

document$.subscribe(function() {
    document.getElementById("submit_button").onclick = testi_yksi
    document.getElementById("submit_button_2").onclick = testi_kaksi
    document.getElementById("submit_button_3").onclick = testi_kolme
})

function tulosta_virheet(virheet, elementtiin) {
    document.getElementById(elementtiin).innerHTML = "<b>Seuraavat syötteet menivät väärin</b>: <br>"
    for (let i=0; i<virheet.length; ++i) {
        document.getElementById(elementtiin).innerHTML += virheet[i] + "<br>"
    }
}

function testi_yksi() {
    var vastaustiedosto = document.getElementById("vastaustiedosto").innerHTML
    var tehtavatiedosto = document.getElementById("tehtavatiedosto").innerHTML
    var syote = document.getElementById("tulos").value

    var virhe_elementti = "virhelista"

    tarkista(syote, vastaustiedosto, tehtavatiedosto)
    .then(virheet => {
        tulosta_virheet(virheet, virhe_elementti)
    })
}

function testi_kaksi() {
    var vastaustiedosto = document.getElementById("vastaustiedosto_2").innerHTML
    var tehtavatiedosto = document.getElementById("tehtavatiedosto_2").innerHTML
    var syote = document.getElementById("tulos").value

    var virhe_elementti = "virhelista_2"

    tarkista(syote, vastaustiedosto, tehtavatiedosto)
    .then(virheet => {
        tulosta_virheet(virheet, virhe_elementti)
    })
}

function testi_kolme() {
    var vastaustiedosto = document.getElementById("vastaustiedosto_3").innerHTML
    var tehtavatiedosto = document.getElementById("tehtavatiedosto_3").innerHTML
    var syote = document.getElementById("tulos").value

    var virhe_elementti = "virhelista_3"

    tarkista(syote, vastaustiedosto, tehtavatiedosto)
    .then(virheet => {
        tulosta_virheet(virheet, virhe_elementti)
    })
}



function tarkista(syote, vastaustiedosto_url, tehtavatiedosto_url) {
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
                    virheet.push("" + tehtavat[i] + " - " + syotteet[i])
                }
            }
            return virheet
        })
    })
}