# Bashin ohjausrakenteet

Automaatiota varten bashin pitää pystyä käsittelemään, säilyttämään ja siirtämään tietoa eri muodoissa. Tätä varten komentorivillä on käytössä useampia erilaisia työkaluja, joista osa on yhteisiä ohjelmointikielten kanssa. 


## Tiedonkäsittely

Ohjausrakenteet tarvitsevat toimiakseen tiedonmurusia, joiden perusteella ohjausrakenteet ohjaavat komentojen suoritusta. Tähän käytetään muuttujia, jotka tallentavat tietoa tilapäisesti, ja jokerimerkkejä, joilla etsitään joukosta sopivia osumia.

### Muuttujat

Bashissa voi tallentaa mitä tahansa tietoa tilapäisesti muuttujiin, jotta sitä voi käyttää jossain myöhemmässä komennossa. Muuttujiin tallennetaan arvo kirjoittamalla komento muodossa ```muuttujan_nimi=asetettava_arvo```, eli esimerkiksi ```kerros=4```. Muuttujan nimi voi olla mikä tahansa käyttäjän valitsema nimi, kunhan se on vain yksi sana ilman välilyöntejä. Välilyöntejä ei myöskään saa olla yhtä suuri kuin -merkin (```=```) merkin kummallakaan puolella.

Muuttujiin tallennettua arvoa voi käsitellä sitten missä tahansa myöhemmässä komennossa kirjoittamalla muuttujan nimen, jonka edessä on dollarimerkki (```$```). Eli seuraavat komentorivikomennot ovat täysin mahdollisia:

!!! shell "bash: echo muuttuja"
    **C54W4KDHGK**:~ jonrajal$ teksti=pilipom
    **C54W4KDHGK**:~ jonrajal$ echo $teksti
    pilipom


Komentorivi käsittelee aina pelkästään tekstiä, joten muuttujatkin ovat aina tekstiä. Tekstissä voi joskus olla myös sanavälejä, eli välilyöntejä. *Bash* ei kuitenkaan pidä ylimääräisistä välilyönneistä, sillä se tulkitsee välilyönnit [argumenttien ja valintojen](../../01-komentorivi/02-bash-muoto.md#argumentit) jakajiksi. Jotta tulkki ymmärtäisi monisanaisen argumentin yhdeksi, se täytyy kirjoittaa lainausmerkkien väliin.

!!! shell "bash: echo muuttuja"
    **C54W4KDHGK**:~ jonrajal$ teksti="pili pom"
    **C54W4KDHGK**:~ jonrajal$ echo $teksti
    pili pom

Komentorivi muistaa kaikki sille asetetut muuttujat niin kauan kun pääte on päällä, tai kunnes muuttujan päälle kirjoitetaan uusi arvo. Muuttujat eivät ole siis hyviä tiedon pitkäaikaiseen säilytykseen, mutta toimivat tiedon laittamiseen pikaiseen muistiin.

Kaikki käyttöjärjestelmät ja tulkit tukevat myös yleisiä oletusmuuttujia, joihin on asetettu arvo jo heti käyttöjärjestelmän tai tulkin käynnistyessä. Näitä kutsutaan [ympäristömuuttujiksi](../03-environment.md). Nämä muuttujat on kertovat käyttöjärjestelmän tilasta ja sen asetuksista. Yksi yleisimmistä näistä on [```PATH```](../03-environment.md#path), joka listaa kaikki kansiot, joista komentorivitulkki etsii suoritettavia komentoja ja ohjelmia.

Jos muuttujia haluaa käsitellä numeroina, ja käyttää niitä osana matemaattisia lausekkeita, lausekkeet pitää kääriä kaksien sulkeiden (```((``` ja ```))```) sisään. Näiden sulkeiden sisällä muuttujalle voi tehdä tavallisten sijoitus- ja laskuoperaatioiden lisäksi vertailuoperaatioita. Kaksoissulkeita käyttäessä dollarimerkki (```$```) ei ole tarpeellinen muuttujan arvoon viitatessa. Ainakin seuraavan operaatiot ovat mahdollisia:

| Operaattori    |  Toiminto                       | Esimerkki           |
|----------------|---------------------------------|---------------------|
| =              | Sijoitus                        | ((i=10))            |
| -              | Miinuslasku                     | ((i=i-2))           |
| +              | Pluslasku                       | ((i=i+4))           |
| *              | Kertolasku                      | ((i=i*2))           |
| /              | Jakolasku                       | ((i=i/2))           |
| %              | Modulo, tai jakojäännös         | ((i=i%10))          |
| ==             | On yhtä suuri kuin              | ((i==12))           |
| !=             | On eri suuri kuin               | ((i!=42))           |
| <              | On pienempi kuin                | ((i<20))            |
| >              | On suurempi kuin                | ((i>0))             |
| >=             | On suurempi tai yhtä suuri kuin | ((i>=11))           |
| <=             | On pienempi tai yhtä pieni kuin | ((i<=15))           |
| &&             | Looginen **ja**                 | ((i>0 && i<100))    |
| \|\|           | Looginen **tai**                | ((i<10 \|\| i>200)) |

Kaikki kaksoissulkeiden sisällä olevat matemaattiset operaattorit toimivat samalla tavalla kuin ohjelmointikielissä. Näiden käyttöä käsitellään enemmän Ohjelmointi 1 -kurssilla.

Jos muuttujan arvo on tekstiä, sen arvona käytetään 0 laskutoimituksissa kaksoissulkeiden sisällä. Jos muuttujan arvo on tekstiä, joka alkaa numerolla, *bash* keskeyttää komennon, ja antaa virheilmoituksen. Vertailuoperaattoreiden kanssa voidaan käyttää myös tekstiä.

### Jokerimerkit (wildcard)

Jokerimerkit ovat erikoismerkkejä, joita voidaan käyttää tekstin etsimiseen. Komentosarjojen tapauksessa niiden pääasiallinen käyttötarkoitus on etsiä useita tiedostoja, joiden nimet ovat lähellä toisiaan tai joilla on sama tiedostopääte. Esimerkiksi komento ```echo *.txt``` tulostaa kaikki aktiivisessa kansiossa olevat ```.txt```-päätteiset tiedostot.

*Bash* tukee kolmea erilaista jokerimerkkiä. Nämä merkit ovat ```*```, ```?``` ja ```[]```.

Näistä yksinkertaisin on ```?```, joka voidaan korvata millä tahansa yhdellä merkillä. Täten siis merkkijono ```kuva-?.jpg``` löytää minkä tahansa seuraavista: ```kuva-2.jpg```, ```kuva-5.jpg``` ja ```kuva-9.jpg```, mutta ei löydä ```kuva-.jpg``` tai ```kuva-25.jpg```

Yleisin jokerimerkki on ```*```. Tämä korvataan millä tahansa määrällä mitä tahansa merkkejä. *-merkki voidaan jättää myös kokonaan korvaamatta. Eli merkkijono ```kuva-*.jpg``` löytää tiedostot ```kuva-2.jpg```, ```kuva-76.jpg```, ```kuva-asd.jpg``` ja ```kuva-.jpg```, mutta ei löydä merkkijonona ```asd-2.jpg``` tai ```kuva-54.png```.

Tarkimman kontrollin jokerimerkeistä saa joukon määrittävällä jokerimerkillä. Vaihteluvälin voi määritellä kirjoittamalla kaikki hyväksytyt merkit hakasulkeiden (```[``` ja ```]```) väliin. Hakasulkeisiin voidaan kirjoittaa jokainen etsitty merkki erikseen (```[a6gnfy]```) tai määritellä ne liukuvälinä: ```[0-9]``` löytää minkä tahansa numeron ja ```[a-z]``` minkä tahansa pienen kirjaimen. Hakasulkeiden sisään voi myös laittaa useamman liukuvälin, jolloin ```[A-Za-z]``` löytää minkä tahansa kirjaimen. Joukon määrittelevä jokerimerkki toimii kuten ```?```, eli se etsii vain yhtä merkkiä annetusta paikasta. 

Jokerimerkkejä voi olla useampi samassa haussa. Esimerkiksi haku ```*.*``` löytää kaikki kansiossa olevat tiedostot, joilla on tiedostopääte (tai piste muuten nimessä).


Esimerkkien mukaiset tulokset on toistamiseen nähtävissä alla olevassa taulukossa.


| Tiedosto     | kuva-?.jpg   | kuva-*.jpg   | kuva-\[0-9\]\[0-9\].jpg             |
|--------------|--------------|--------------|---------------------------------|
| kuva-2.jpg   | X            | X            |                       |
| kuva-5.jpg   | X            | X            |                       |
| kuva-08.jpg  |              | X            | X                     |
| kuva-54.jpg  |              | X            | X                     |
| kuva-f.jpg   | X            | X            |                       |
| kuva-.jpg    |              | X            |                       |
| kuva-asd.jpg |              | X            |                       |
| asd-5.jpg    |              |              |                       |

??? info "bash komennot jokerimerkeillä"
    Seuraavat esimerkit käyttävät silmukoita ja muuttujia. Niiden käyttö selitetään alempana.
    === "kuva-?.jpg"
        !!! shell "bash: ?"
            **C54W4KDHGK**:kuvia jonrajal$ for tiedosto in <pop>kuva-?.jpg</pop>; do echo $tiedosto; done
            kuva-1.jpg
            kuva-2.jpg
            kuva-3.jpg
            kuva-5.jpg
            kuva-6.jpg
            kuva-7.jpg
            kuva-9.jpg

    === "kuva-*.jpg"
        !!! shell "bash: *"
            **C54W4KDHGK**:kuvia jonrajal$ for tiedosto in <pop>kuva-*.jpg</pop>; do echo $tiedosto; done
            kuva-.jpg
            kuva-08.jpg
            kuva-1.jpg
            kuva-10.jpg
            kuva-2.jpg
            kuva-3.jpg
            kuva-5.jpg
            kuva-54.jpg
            kuva-6.jpg
            kuva-7.jpg
            kuva-9.jpg

    === "kuva-[0-9][0-9].jpg"
        !!! shell "bash: []"
            **C54W4KDHGK**:kuvia jonrajal$ for tiedosto in <pop>kuva-[0-9][0-9].jpg</pop>; do echo $tiedosto; done
            kuva-08.jpg
            kuva-10.jpg
            kuva-54.jpg




Näiden *bashin* sisäänrakennettujen perusjokerimerkkien lisäksi joillain ohjelmilla ja komennoilla voi olla omia jokerimerkkejään. Monet ohjelman tukevat mm. [säännöllisiä lausekkeita](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet), jotka tunnetaan myös paremmin englannista tulevalla **regex**-lyhenteellä. Tämä on yksi syy lisää tutustua jokaisen käyttämääsi ohjelmaan ```man```-komennolla.





## Ohjausrakenteet

Usein yksinkertaiset listamuotoiset komentosarjat eivät riitä, vaan komentojen pitää myös pystyä tekemään päätöksiä, reagoimaan löydettyihin tuloksiin ja toistamaan toiminta useammalle tiedostolle kerralla. Tätä varten tulkit tukevat samanlaisia ohjausrakenteita kuin tavalliset ohjelmointikielet, eli silmukoita ja ehtolauseita.

### Silmukat 

Silmukat ovat näppäriä rakenteita, jos haluaa toteuttaa saman komennon useammalle asialle yhtä aikaa. Yleisin komentorivisilmukan käyttötapaus on toistaa komento jokaiselle kansion tiedostolle.

Silmukoita on kahdenlaisia *bashissa*. Niiden rakenteet ovat seuraavanlaisia:

=== "for-silmukka"
    ```
    for <muuttuja> in <hakukomento_joka_tuottaa_paljon_tuloksia>
        do <suoritettava_komento>
    done
    ```

    Yleisempi silmukkarakenne on ```for```-silmukka. Se ottaa vastaan joukon arvoja -- yleensä tiedostoja -- ja kutsuu sarjan komentoja jokaiselle joukon arvolle. Silmukka vaatii yhden muuttujan määrittelyn, joka edustaa vuorollaan jokaista silmukan joukon arvoa. Silmukan sisällä olevat komennot kutsutaan niin monta kertaa, kun käsiteltävässä joukossa on arvoja, ja joka kerta silmukan muuttujan arvo vaihtuu joukon seuraavaksi arvoksi.

    Silmukassa on neljä eri avainsanaa, jotka kaikki on oltava, jotta silmukka toimii: ```for```, ```in```, ```do``` ja ```done```, joilla on seuraavat merkitykset:

    - ```for``` esittelee muuttujan, johon vuorollaan tallennetaan kaikki läpikäytävät arvot.
    - ```in``` määrittelee hakukomennon, eli silmukan läpikäyvän alueen.
    -  ```do``` rajaa silmukan esittelyn ja silmukan sisällä suoritettavat komennot toisistaan. ```do```n jälkeen kirjoitetaan komennot, jotka halutaan suorittaa kaikille hakukomennon tuloksille.
    - ```done``` merkkaa silmukan loppua. Jos läpikäytävässä joukossa on vielä arvoja, niin silmukka aloitetaan alusta, ja muuttujan arvo vaihtuu seuraavaksi.
     
    Komennon voi kirjoittaa esitetyllä tavalla käyttäen rivinvaihtoja, tai jokaisen rivinvaihdon voi korvata puolipisteellä ```;```, jolloin silmukan voi kirjoittaa yhdelle riville.

    Silmukassa käytetty ```for``` ja ```in``` avainsanojen välissä oleva muuttuja toimii kuin tavallinen [komentorivin muuttuja](#muuttujat). Jos sen sisällä olevaa arvoa halutaan käyttää silmukan sisällä, niin arvo pitää hakea laittamalla muuttujan nimen eteen dollarimerkki ```$```. Silmukka automaattisesti päivittää muuttujan arvoa jokaisella silmukan kierroksella siten, että kaikki *hakukomennon* tulokset on käyty läpi.

    Esimerkkinä ```for```-silmukan käytöstä voisi olla seuraavanlainen tiedostojen tulostuskomento.

    !!! shell "bask: for - Näytä kaikki tiedostot."
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>for tiedosto in \*.\*; do echo $tiedosto; cat $tiedosto; echo ; done</pop>
        README.txt
        \# jonimatias.github.io repo 

        jonimatias.github.io on epämääräinen kokoelma tietojenkäsittelytieteen opintoihin liittyviä asioita. Tässä repossa on verkkosivujen uusin versio, ja tänne tehtävät muutokset ladataan verkkosivuille GitHub Actionsien avulla.

        Ainoastaan verkkosivulla olevat kuvat kulkevat muuta kautta, mutta niidenkin lataamisen helpottamiseksi voi käyttää repossa olevaa upload_images.command -bash-skriptiä. 

        Sivusto on kirjoitettu markdownilla, joka käännetään verkkosivustoksi MkDocsilla. 


        selitys.txt
        Tämä on tekstitiedoston sisältö. Tätä käytetään tol-alkeet-materiaalin esimerkkitiedostona.

        Tekstitiedosto sisältää tekstiä, kuten kirjaimia, numeroita ja muita erikoismerkkejä.
        toinen.txt
        Tästä alkaa toinen tekstitiedosto. Tämänkin tiedoston sisältö on tekstiä.

    Yllä oleva komento käy kaikki kansion tiedostot (```*.*```) läpi, ja tulostaa jokaisen tiedoston nimen (```echo $tiedosto```), sisällön (```cat $tiedosto```) ja jokaisen tiedoston lopuksi tyhjän rivin (```echo ```). Jokainen erillinen komento erotetaan tässä tapauksessa puolipisteellä, mutta myös rivinvaihdot, eli enter-näppäimen painallukset, ovat sallittuja puolipisteiden sijasta.

    Huomaa, että [tol-alkeet kansiorakenteessa](../../00-intro/01-tiedostot.md#hakemistorakenne) ei ole tiedostoja, joiden nimessä on välilyönti. Yllä oleva komento toimii sen takia täysin oikein. Välilyönnillisten tiedostonimien kanssa täytyy kuitenkin käyttää lainausmerkkejä (```"``` ) muuttujan nimen ympärille (```"$tiedosto"```), jottei kääntäjä mene sekaisin. Ilman lainausmerkkejä komennot etsisivät vain tiedostoa, joka vastaa tiedonstonnimen ensimmäiseen sanaan, ja sellaista tiedostoa tuskin kansiosta löytyy. Asiasta löytyy lisää [*bash*-peruskomentoja käsittelevästä osiosta](../../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tiedostonimet-ja-välilyönnit).



=== "while-silmukka"
    ```
    while <ehto>
        do <suoritettava_komento>
    done
    ```

    Yksinkertaisempi silmukka on ```while```-silmukka. Se toistaa määriteltyä komentoa niin kauan, kun sille annettu ehtolause antaa sille luvan. Jos ehtolauseen tulos on ```0```, tyhjä tai ```epätosi```, niin silmukka lopettaa. 

    Silmukassa on kolme eri avainsanaa, jotka kaikki on oltava silmukassa:

    - ```while``` esittelee silmukan ja ehtolauseen.
    - ```do``` rajaa silmukan esittelyn ja silmukassa suoritettavat komennot toisistaan. Tämän jälkeen kirjoitetaan kaikki komennot, joita suoritetaan siihen asti, kunnes ehtolause ei enää täyty.
    - ```done``` merkkaa silmukan loppua. Tämän jälkeen tarkistetaan ehtolause. Jos sen ehto edelleen täyttyy, niin ```do```n komennot suoritetaan uudestaan.

    Koska silmukkaa toistetaan niin kauan, kun ehtolause täyttyy, niin silmukan täytyy varmistaa jokin tapa, jolla ehtolauseen lopputulos voi vaihtua jokaisella komentorivin suorituksella. Tämän voi tehdä muutamalla eri tavalla:

    - Käyttämällä ehtolauseessa komentoa, jonka tulos vaihtelee itsekseen. Tällaisia ovat mm. ```RANDOM```-muuttuja, joka tuottaa satunnaisluvun tai ```read```-komento, joka lukee annettua tiedostoa rivi kerrallaan.
    - Luomalla muuttujan, jonka arvo muuttuu silmukan sisällä.
    - Luomalla tietoisesti ikuisen silmukan, joka toistaa komentoa kunnes käyttäjä keskeyttää komentosarjan painamalla <nowrap><kbd>:key-ctrl: Control</kbd>+<kbd>C</kbd></nowrap>.

    !!! shell "bash: while - numeroita"
        **C54W4KDHGK**:tol-alkeet jonrajal$ i=0
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>while ((i<5)); do echo $i; ((i=i+1)); done</pop>
        0
        1
        2
        3
        4
        5
    
    Yksi yleinen ```while```-silmukan käyttötapaus on tiedostojen sisällön läpikäynti. Siihen tarvitaan ```read```-komentoa ja syötteenohjaumerkkiä ```<```. Syötteenohjausmerkki toimii pitkälti samalla tavalla kuin [tulosteenohjausmerkit](../../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tuloste-tiedostoon), mutta ne muokkaavat syötettä tulosteen sijasta. Syötteenohjausta tarvitaan komennoissa, jotka odottavat käyttäjältä syötettä komennon ajamisen jälkeen. 

    !!! shell "bash: while - lue rivi kerrallaan"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>while read -r rivi; do echo "Rivi: $rivi"; done < README.txt</pop>
        Rivi: # jonimatias.github.io repo
        Rivi: 
        Rivi: jonimatias.github.io on epämääräinen kokoelma tietojenkäsittelytieteen opintoihin liittyviä asioita. Tässä repossa on verkkosivujen uusin versio, ja tänne tehtävät muutokset ladataan verkkosivuille GitHub Actionsien avulla.
        Rivi: 
        Rivi: Ainoastaan verkkosivulla olevat kuvat kulkevat muuta kautta, mutta niidenkin lataamisen helpottamiseksi voi käyttää repossa olevaa upload_images.command -bash-skriptiä.
        Rivi: 
        Rivi: Sivusto on kirjoitettu markdownilla, joka käännetään verkkosivustoksi MkDocsilla.
    
    Yllä oleva komento lukee syötettä rivi kerrallaan ja asettaa jokaisen rivin sisällön muuttujaan ```rivi``` (```read -r rivi```). Syötteeksi on määritelty tol-alkeet -kansiossa oleva README.txt-tiedosto (```< README.txt```). Silmukassa jokainen tiedoston rivi tulostetaan niin, että alkuun lisätään teksti "Rivi: " (```echo "Rivi: $rivi"```).




### Ehtolauseet

Ehtolauseitä käytetään luomaan haaraumakohtia komentosarjan toimintalogiikkaan. Niiden tarkoitus on muokata toiminta yhdessä tilanteessa yhdeksi, ja toisessa tilanteessa toiseksi. 

Yksittäisen haarauman muoto on seuraavanlainen

=== "Yksittäinen ehto (if)"

    ```
    if <ehto>
        then <suoritettavat_komennot>
    fi
    ```

=== "Jos ei niin sitten (else)"

    ```
    if <ehto>
        then <suoritettavat_komennot>
    else 
        <suoritettavat_komennot_jos_ehto_ei_täyty>
    fi
    ```

=== "Useampi haara (else if)"

    ```
    if <ehto>
        then <suoritettavat_komennot>
    elif <ehto>
        then <suoritettavat_komennot_jos_ensimmäinen_ehto_ei_täyty_mutta_toinen_täyttyy>
    elif <ehto>
        then <suoritettavat_komennot_jos_ensimmäiset_ehdot_eivät_täyty_mutta_kolmas_täyttyy>
    fi
    ```

Kuten esimerkeistä näkee, haaraumat aloitetaan aina komennolla ```if```, jonka perään kirjoitetaan jokin ehtolause. Ehtolause erotetaan ehtoja seuraavista komennoista komentosanalla ```then```. Haarasta palataan takaisin normaalisuoritukseen komentosanalla ```fi```, eli if väärin päin. Komentosanat ```else``` ja ```elif``` on varattu yhden haaraumakohdan vaihtoehtoisiin haaroihin.

Haaraumia voi myös kirjoittaa sisäkkäin, aivan kuten ohjelmointikielissä. Haarauman sisällä oleviin suoritettaviin komentoihin voi laittaa uuden ```if```-komennon, jolloin se suoritetaan niissä tilanteissa, jossa sekä uloin että sisempi ehtolause täyttyy.

```
if <ulompi_ehto>
    then 
    <suoritettavat_komennot_jos_ulompi_ehto_täyttyy>
    if <sisempi_ehto>
        then <suoritettavat_komennot_jos_molemmat_ehdot_täyttyy>
    fi
fi
```

Kuten silmukoiden kanssa, ehtohaarat voi kirjoittaa esimerkin mukaisesti jokaisen omalle rivilleen, tai rivinvaihdot voi korvata puolipisteillä (```;```). Alla olevat esimerkit käyttävät tätä tiiviimpää yksirivistä mallia.



#### Ehtolauseen muoto - kaksoissulkeet

Haarojen tarvitseman ehtolauseen voi kirjoittaa muutamalla eri tavalla. Aikaisemmin jo esiteltiin muuttujien käyttämä ilmaisutapa kaksoissuluilla. Se toimii erinomaisesti, jos muuttujina on numeroita.

!!! shell "bash: if - kaksoissulkeet"
    **C54W4KDHGK**:tol-alkeet jonrajal$ i=20
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>if ((i<20)); then echo pieni; else echo suuri; fi</pop>
    suuri

Kaksoissulkeita voi käyttää myös yksinkertaisiin erisuuruus- ja yhtäsuuruusvertailuihin tekstiä vertaillessa.

!!! shell "bash: if - kaksoissulkeet tekstin kanssa"
    **C54W4KDHGK**:tol-alkeet jonrajal$ i=tiedostonnimi.txt
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>if ((i==tiedostonnimi.txt)); then echo on; else echo ei; fi</pop>
    on


#### Ehtolauseen muoto - hakasulkeet

Toinen ehtolauseiden käyttämä ilmaisutapa on POSIX-test -standardin mukainen muoto. Tämä on hiukan tehokkaampi ja monipuolisempi kuin kaksoissulkeita käyttävä, mutta samalla monin verroin monimutkaisempi. POSIX-test ilmaistaan kirjoittamalla ehtolause hakasulkeiden (```[``` ja ```]```) sisään.

Kaikkien POSIX-test -ehtolauseiden muoto on seuraavanlainen: 
```
[ <toinen_arvo> <operaattori> <pääasiallinen_arvo> ]
```

Toisin kuin kaksoissulkeiden kanssa, Posix-testit vaativat dollarimerkin (```$```) käyttöä muuttujien arvoihin viitattaessa.

Posix-test käyttää seuraavia operaattoreita:

| Operaattori        | Tarkoitus                                            | Esimerkki                          |
|--------------------|------------------------------------------------------|------------------------------------|
| =                  | Molemmissa arvoissa on sama teksti                   | [ $x = README.txt ]                |
| !=                 | Molemmissa arvoissa on eri teksti                    | [ $x != README.txt ]               |
| -z                 | Arvon kirjainten määrä on 0                          | [ -z $x ]                          |
| -n                 | Arvon kirjainten määrä on suurempi kuin 0            | [ -n $x ]                          |
| (ei mitään)        | Arvo on määritelty                                   | [ $x ]                             |
| -d                 | Arvo on polku, ja polku osoittaa hakemistoon         | [ -d $x ]                          |
| -e                 | Arvo on polku, ja polku osoittaa tiedostoon          | [ -e $x ]                          |
| -eq                | Arvo on numero, ja se on yhtä suuri kuin toinen arvo | [ $x -eq 10 ]                      |
| -ne                | Arvo on numero, ja se on eri suuri kuin toinen arvo  | [ $x -ne 10 ]                      |
| -gt                | Arvo on numero, ja se on suurempi kuin toinen arvo   | [ $x -gt 10 ]                      |
| -ge                | Arvo on numero, ja se on suurempi tai yhtä suuri kuin| [ $x -ge 10 ]                      |
| -lt                | Arvo on numero, ja se on pienempi kuin toinen arvo   | [ $x -lt 10 ]                      |
| -le                | Arvo on numero, ja se on pienempi tai yhtä suuri kuin| [ $x -le 10 ]                      |

Hakasulkeilla olevaa ehtolausetta voi käyttää vaikka sen tarkistamiseen, onko tiedostoa olemassa. Joskus tämä kannattaa tehdä ennen kuin alkaa suorittamaan toimintoa, joka käyttää sitä tiedostoa.

!!! shell "bash: POSIX test"
    **C54W4KDHGK**:tol-alkeet jonrajal$ i=./README.txt
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>if [ -e $i ]; then cat $i; else echo "Ei ole tiedosto."; fi</pop>
    \# jonimatias.github.io repo

    jonimatias.github.io on epämääräinen kokoelma tietojenkäsittelytieteen opintoihin liittyviä asioita. Tässä repossa on verkkosivujen uusin versio, ja tänne tehtävät muutokset ladataan verkkosivuille GitHub Actionsien avulla.

    Ainoastaan verkkosivulla olevat kuvat kulkevat muuta kautta, mutta niidenkin lataamisen helpottamiseksi voi käyttää repossa olevaa upload_images.command -bash-skriptiä.

    Sivusto on kirjoitettu markdownilla, joka käännetään verkkosivustoksi MkDocsilla.

Yllä oleva komento asettaa muuttujan ```i``` arvoksi ```./README.txt```, joka on tässä tapauksessa polku README.txt tiedostoon, joka sijaitsee aktiivisessa kansiossa (```i=./README.txt```). Sitten ohjelma vertailee POSIX testillä, onko koneella tiedostoa muuttujaan asetetussa polussa ```[ -e $i ]```. Jos näin on, niin tiedoston sisältö tulostetaan ```then cat $i```, jos ei, niin tulostetaan *Ei ole tiedosto.* ```else echo "Ei ole tiedosto."```. 