# Aakkostus
<!-- 
Ohjelmointi 1
Merkkijono
-->

Koska outojen sanojen käyttäminen on kivaa, niin ajattelin huomenna puhua vain sanoilla, joiden kirjaimet ovat valmiiksi aakkosjärjestyksessä. Tätä varten pitäisi kuitenkin löytää kaikki tarkoitukseen sopivat sanat. Onneksi on olemassa Suomen kielitoimisto, jolta löytyy lista kaikista suomen sanoista.

Tehtävänäsi on käydä syöteaineistosta kaikki sanat läpi, ja merkitä sieltä sanat, joissa kaikki kirjaimet ovat jo aakkosjärjestyksessä. Aakkosjärjestykseen kelpaa myös saman kirjaimen toistaminen. Eli sanat `aho`, `aamuyö` ja `hiiltyä` ovat aakkosjärjestyksessä. Sellaiset sanat, kuin `koira`, `aasi` ja `alava` eivät ole.

Vastaus odottaa listaa sanoista `true` tai `false`, riippuen siitä, onko syötteen sana aakkosjärjestyksessä vai ei. Vastauslistan pitäisi olla samassa järjestyksessä kuin syötelistakin.

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

Huomaa, että ääkköset saattavat tuottaa ongelmia. Ääkköset pitää käsitellä suomen aakkosjärjestyksen mukaan. Syötetiedosto on UTF-8-koodattu.



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä.

Aineisto on rakennettu Suomen kielitoimiston nykysuomen sanalistan pohjalta. https://kotus.fi/sanakirjat/kielitoimiston-sanakirja/nykysuomen-sana-aineistot/nykysuomen-sanalista/

[Lataa syötetiedosto](../syotteet/aakkostus_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/aakkostus_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/aakkostus_input.txt</div>
<div style="text_color: red" id="virhelista"></div>