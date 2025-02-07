

document$.subscribe(function() {
    document.getElementById("submit_button").onclick = test
})


function test() {
    var vastaustiedosto = document.getElementById("vastaus_tiedosto").innerHTML
    var tehtavatiedosto = document.getElementById("tehtava_tiedosto").innerHTML
    var syote = document.getElementById("tulos").value

    tarkista(syote, vastaustiedosto, tehtavatiedosto)
    .then(virheet => {
        document.getElementById("virhelista").innerHTML = "<b>Seuraavat syötteet menivät väärin</b>: <br>"
        for (let i=0; i<virheet.length; ++i) {
            document.getElementById("virhelista").innerHTML += virheet[i] + "<br>"
        }
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
                if (syotteet.length <= i) {
                    break
                }
    
                if (oikeat_vastaukset[i] !== syotteet[i]) {
                    virheet.push("" + tehtavat[i] + " - " + syotteet[i])
                }
            }
            return virheet
        })
    })
}