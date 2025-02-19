# Aakkostus
<div markdown class="info-card">
Vaikeusaste: ★★☆☆☆

**Ääkkösiä**
</div>

Koska outojen sanojen käyttäminen on kivaa, niin suosittelen kaikkia puhumaan huomenna vain sanoilla, joiden kirjaimet ovat valmiiksi aakkosjärjestyksessä. Jotta tämä olisi mahdollista, pitää ensin löytää kaikki sopivat sanat. Onneksi on olemassa Suomen kielitoimisto, jolta löytyy lista kaikista suomen sanoista.

Tehtävänäsi on käydä syöteaineistosta kaikki sanat läpi, ja merkitä sieltä sanat, joissa kaikki kirjaimet ovat jo aakkosjärjestyksessä. Aakkosjärjestykseen kelpaa myös saman kirjaimen toistaminen. Eli sanat `aho`, `aamuyö` ja `hiiltyä` ovat aakkosjärjestyksessä. Sellaiset sanat, kuin `koira`, `aasi` ja `alava` eivät ole.

Vastaus pitää olla lista sanoista `true` tai `false`, riippuen syötteenä annetun sanan kirjainten aakkosjärjestyksestä. Vastauslistan pitää olla samassa järjestyksessä kuin syötelistan.

Eli syöte:

```
aamuyö
aasi
aho
alava
hiiltyä
koira
```

tuottaa tuloksen:

```
true
false
true
false
true
false
```

Syötteessä on ääkkösiä, jotka saattavat tuottaa ongelmia. Ääkköset pitää käsitellä suomen aakkosjärjestyksen mukaan. Syötetiedosto on UTF-8 -koodattu.



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Vastauskenttään pitää antaa jokaista syötetiedoston riviä vastaava tulosrivi.

Aineisto on rakennettu Suomen kielitoimiston nykysuomen sanalistan pohjalta. https://kotus.fi/sanakirjat/kielitoimiston-sanakirja/nykysuomen-sana-aineistot/nykysuomen-sanalista/

[Lataa syötetiedosto](../syotteet/aakkostus_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/aakkostus_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/aakkostus_input.txt</div>
<div style="text_color: red" id="virhelista"></div>