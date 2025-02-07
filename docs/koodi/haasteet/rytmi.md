# Rytmi

Bändin rumpalina on kiva olla, mutta joskus vain ottaa päähän hakata samaa humpappaa-rytmiä päivästä toiseen. Eikö tätä voisi jotenkin automatisoita, että keikoilla voisi vain fiilistellä ilman käsien ylimääräistä heiluttelua?

Luo algoritmi, joka ottaa vastaan musiikin tahdin iskuina minuutissa (bpm), ja laskee iskujen väliset ajat millisekunteina. Ensimmäinen isku alkaa  ajanhetkellä `0`. Annetussa syötteessä on myös annettu rytmikuvio, joka noudattaa seuraavaa muotoilua:

!!! info "Rytmikuviomerkit"
    - X - Tämä hetkellä lyödään.
    - _ _ Tällä hetkellä ei lyödä.

Syöte alkaa bpm-arvolla, jonka jälkeen tulee puolipiste, ja sen jälkeen tarvittavat iskut. Syötetiedostossa rivit voivat siis olla vaikka seuraavanlaisia: `113;X__XX_X`.



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

[Lataa syötetiedosto](../syotteet/rytmi_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/rytmi_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/rytmi_input.txt</div>
<div style="text_color: red" id="virhelista"></div>
