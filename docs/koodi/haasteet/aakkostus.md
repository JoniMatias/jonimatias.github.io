# Aakkostus

Koska outojen sanojen käyttäminen on kivaa, niin ajattelin huomenna puhua vain sanoilla, joiden kirjaimet ovat valmiiksi aakkosjärjestyksessä. Tätä varten pitäisi kuitenkin löytää kaikki tarkoitukseen sopivat sanat. Onneksi on olemassa Suomen kielitoimisto, jolta löytyy lista kaikista suomen sanoista.

Tehtävänäsi on käydä syöteaineistosta kaikki sanat läpi, ja merkitä sieltä kaikki sanat, joissa kaikki kirjaimet ovat jo aakkosjärjestyksessä. Aakkosjärjestykseen kelpaa myös saman kirjaimen toistaminen. Eli sanat `aho`, `aamuyö` ja `hiiltyä` ovat aakkosjärjestyksessä. Sellaiset sanat, kuin `koira`, `aasi` ja `alava` eivät ole.

Vastauksessa odotetaan joko sanoja `true` tai `false` riippuen siitä, onko syöterivin arvo aakkosjärjestyksessä vai ei.



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

Aineisto on rakennettu Suomen kielitoimiston nykysuomen sanalistan pohjalta. https://kotus.fi/sanakirjat/kielitoimiston-sanakirja/nykysuomen-sana-aineistot/nykysuomen-sanalista/

[Lataa syötetiedosto](../syotteet/aakkostus_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/aakkostus_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/aakkostus_input.txt</div>
<div style="text_color: red" id="virhelista"></div>