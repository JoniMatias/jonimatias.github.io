# Duplikaatit
<div markdown class="info-card">
Vaikeusaste: ★★★☆☆
</div>

Jokaisella syöterivillä on yksi **UUID**-tunniste, joiden kaikkien olisi tarkoitus olla nimensä mukaisesti uniikkeja (*Universally Unique Identifier*). Kuitenkin jokin on niiden luomisessa mennyt pieleen, ja syötteessä olevassa miljoonassa UUID:ssä on muutamia kaksoiskappaleita. Tehtävänäsi on etsiä annetusta syötetiedostosta kaikki siinä kaksi tai useamman kerran esiintyvät rivit.

!!! info inline end "Mikä UUID?"
    [UUID:t](https://en.wikipedia.org/wiki/Universally_unique_identifier), toiselta nimeltään GUID (*Globally Unique Indentifier*), ovat yleisesti ohjelmoinnissa käytettyjä tunnuksia. Niitä käyttäessä ohjelmoija voi olla suhteellisen luottavainen siihen, ettei kahdella eri oliolla ole samaa tunnusta. UUID:llä on eri versioita, jotka luovat tunnuksen eri tavoilla. Yleisin on todennäköisesti UUIDv4, joka on käytännössä vain 122-bittinen oudosti muotoiltu satunnaisluku. 122-bittiä riittää siihen, ettei käytännössä ole sellaista käyttötapausta, jossa sama luku luotaisiin kahdesti.

Koska tässä tehtävän syöte on jokseenkin suuri - miljoona riviä - kannattaa miettiä tehtävän suoritusnopeutta. Alkeellinen toteutus, jossa jokaista syöteriviä verrataan jokaiseen syöteriviin kahdella sisäkkäisellä silmukalla tarkoittaisi sitä, että ohjelma tekisi 1.000.000.000.000 vertailua tuloksen saamiseksi. Niin monen vertailun tekemiseen kuluu tavalliselta kotikoneelta nykyäänkin todennäköisesti toista tuntia. Suhteellisen nopeasti sekin siis tulee käsin tehtyyn verrattuna, mutta algoritmi on optimoitavissa. Kaksoiskappaleiden löytämiseen annetusta syötteestä ei pitäisi mennä muutamaa sekuntia enempää millään koneella.

Tämä tehtävä on yksinkertaisin mahdollinen esimerkki [O(n<sup>2</sup>)](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/) algoritmin yksinkertaistamisesta.

Syötetiedostossa on miljoona riviä UUID-tunnisteita satunnaisessa järjestyksessä. Jokainen UUID on omalla rivillään:

```
78FC9D42-F012-4014-B80C-3406E44740C2
09D59D5F-782B-4372-BEAB-E1504B60F93E
78FC9D42-F012-4014-B80C-3406E44740C2
1FFB86B3-C324-4828-BFBE-BCBB85E15BD8
B48B7988-CBA7-477C-9E91-16B7F4C6C562
F43CB411-9C10-4514-B646-5B439A31A7EB
1FFB86B3-C324-4828-BFBE-BCBB85E15BD8
1FFB86B3-C324-4828-BFBE-BCBB85E15BD8
402FEF12-87CF-4F8A-BE8F-A14F7B0BC8C8
```

Tehtävän haluaa vastaukseksi listan kaikista UUID:istä, joita syötteessä on useampi kappale. Jokainen UUID pitää olla omalla rivillään, ja vain yksi kutakin UUID:tä. Vastauksen rivien järjestyksellä ei ole merkitystä.

```
1FFB86B3-C324-4828-BFBE-BCBB85E15BD8
78FC9D42-F012-4014-B80C-3406E44740C2
```



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan vain ne syötetiedoston rivit, jotka toistuvat syötteessä. Vastauksessa ei ole tarpeen toistaa samaa syötettä kahdesti.

[Lataa syötetiedosto](../syotteet/duplikaatti_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button_list">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/duplikaatti_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/duplikaatti_input.txt</div>
<div style="text_color: red" id="virhelista"></div>


