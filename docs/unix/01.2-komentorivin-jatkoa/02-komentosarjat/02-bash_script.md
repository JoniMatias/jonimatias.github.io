# Bash-komentosarjat

Komentosarjoja kutsutaan yleisemmin nimellä **bash-skripti**. Komentosarjat yleensä kirjoitetaan tiedostoon, joka määrittelee mitkä komennot ajetaan ja missä järjesteyksessä. Yleensä komentosarjoja käytetään hiukan monimutkaisempiin komentoihin, joita pitää ajaa usein, tai muuhun automaatioon.

Koska komentosarjojen kanssa käytetään komentorivin monimutkaisempia hallintarakenteita, käydään ne läpi ensin. Näitä hallintarakenteita voi käyttää myös suoraan komentorivillä, ilman komentosarjatiedostoa.


## Tiedon käsittely

Automaatiota varten bashin pitää pystyä käsittelemään, säilyttämään ja siirtämään tietoa eri muodoissa. Tätä varten komentorivillä on käytössä useampia erilaisia työkaluja, joista osa on yhteisiä ohjelmointikielten kanssa. 


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

Jos muuttujia haluaa käsitellä numeroina, ja käyttää niitä osana matemaattisia lausekkeita, lausekkeet pitää kääriä kaksien sulkeiden sisään. Näiden sulkeiden sisällä muuttujalle voi tehdä tavallisten sijoitus- ja laskuoperaatioiden lisäksi vertailuoperaatioita. Kaksoissulkeita käyttäessä dollarimerkki (```$```) ei ole tarpeellinen muuttujan arvoon viitatessa. Ainakin seuraavan operaatiot ovat mahdollisia:

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

Kaikki kaksoissulkeiden sisällä olevat matemaattiset operaattorit toimivat samalla tavalla kuin ohjelmointikielissä. Näiden käyttöä käsitellään enemmän  Ohjelmointi 1 -kurssilla.

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

    Huomaa, että [tol-alkeet kansiorakenteessa](../../00-intro/01-tiedostot.md#hakemistorakenne) ei ole tiedostoja, joiden nimessä on välilyönti. Yllä oleva komento toimii sen takia täysin oikein. Välilyönnillisten tiedostonimien kanssa täytyy kuitenkin käyttää lainausmerkkejä (```"``` ) muuttujan nimen ympärille (```"$tiedosto"```), jottei kääntäjä mene sekaisin. Ilman lainausmerkkejä komennot etsisivät vain tiedostoa, joka vastaa tiedonstonnimen ensimmäiseen sanaan, ja sellaista tiedostoa tuskin kansiosta löytyy. Asiasta löytyy lisää [*bash*-peruskomentoja käsittelevästä osiosta](../../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tiedostonimet-ja-valilyonnit).



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
    - Luomalla tietoisesti ikuisen silmukan, joka toistaa komentoa kunnes käyttäjä keskeyttää komentosarjan painamalla <nowrap><kbd>^ Control</kbd>+<kbd>C</kbd></nowrap>.

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
    fi
    ```

Kuten silmukoiden kanssa, ehtohaarat voi kirjoittaa esimerkin mukaisesti jokaisen omalle rivilleen, tai rivit voi korvata puolipisteillä (```;```).

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



## Komentosarjatiedostot

Skriptitiedosto on vain tavallinen tekstitiedosto, johon on kirjoitettu ajettavat komennot erillisille riveille siinä järjestyksessä kun ne halutaan ajaa. Yksinkertaisimmillaan tiedostossa voi olla vain muutama komento ilman minkäänlaisia kontrollirakenteita. Esimerkiksi tätä nettisivua varten on tehty yksinkertainen komentosarja, jolla sivua voi testata paikallisesti omalla koneella.

??? abstract "Komentosarja verkkosivun testaamiseen"
    ```
    #!/bin/bash

    cd "$(dirname "$0")"
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    mkdocs build
    open http://127.0.0.1:8000/
    mkdocs serve
    ```

Kyseinen ohjelma käynnistää pythonin virtuaalikoneen, tarkistaa ja asentaa kaikki vaaditut ohjelmat ja kääntää verkkosivun testaamista varten. Viimeiseksi se käynnistää palvelimen käyttäjän koneelle, ja avaa selaimen uuteen välilehteen palvelimella sijaitsevan verkkosivun.

Koska komentosarjat ovat vain järjesteyksessä suoritettavia tavallisia komentoja, kaikki tällä sivulla esitelty toimii myös ilman komentosarjatiedostoa. Ohjausrakenteita ja muuttujia voi käyttää yksittäisessä komennossa siinä missä kaikkia muitakin komennon argumentteja ja valintoja.

### #! (shebang)

Komentosarjatiedostoon saa kirjoittaa vapaasti komentoja miten tahtoo, paitsi ensimmäiselle riville. Ensimmäinen rivi, ts. otsakerivi, on tarkoitettu tulkin (eng. *shell*) määrittelemiseksi.

Tulkin määritteleminen tiedostossa mahdollistaa komentosarjatiedostojen siirtämisen tietokoneelta toiselle, vaikka eri koneen käyttäjillä olisikin käytössään eri oletustulkki. Jokainen käyttäjä voi kirjoittaa skriptinsä haluamalleen tulkille, ja näin kirjoitettu komentosarja voidaan ajaa koneella kuin koneella.

Otsakerivin kaksi ensimmäistä merkkiä pitää olla ```#!```, eli risuaita ja huutomerkki. Näiden perään samalle riville kuuluu määritellä mikä komentorivitulkki tulkitsee tiedoston komennot. Tulkki pitää määritellä antamalla oman koneesi tiedostopolku tulkin ohjelmaan. Nämä tiedostopolut on kuitenkin yleensä hyvin standardoituja, ja tulkit asentuvat jokaiselle tietokoneelle yleensä samaan paikkaan. 

Jos komentosarjan haluaa tulkita *bash*-tulkilla, niin tiedoston ensimmäinen rivi on muotoa ```#! /bin/bash```. *zsh*-tulkille se on taas muotoa ```#! /bin/zsh```. 



### Komentosarjojen ajaminen

Kun komentosarjatiedosto on kirjoitettu ja tallennettu tietokoneelle, sitä voi alkaa käyttämään. Komentosarjojen ajamiseen on muutama erilainen tapa.


??? abstract "komento.sh tiedoston sisältö"
    Näissä esimerkeissä oletetaan, että tol-alkeet-kansiossa on tiedosto nimeltä ```komento.sh```, jossa on seuraava sisältö:
    ```
    #! /bin/bash

    echo "Komentosarja suoritettu"
    ```

#### sh-komento

Yksinkertaisin tapa suorittaa komentosarja on käyttää ```sh```-komentoa. Komento ottaa argumentiksi yhden tiedoston, ja yrittää suorittaa sen sisältöä komentosarjana. 

!!! shell "bash: sh"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh</pop>
    Komentosarja suoritettu

Tämä onnistuu käytännössä aina ilman ongelmia, mutta joskus voi tuntua turhalta kirjoittaa ylimääräinen komento vain komentojen suorittamista varten.

#### Suoritettavana tiedostona

Komentosarjatiedoston oikeuksia voi myös korottaa suoritettavaksi tiedostoksi. Jos käyttäjällä on lupa suorittaa tiedosto, sen voi suorittaa kuten ohjelman, ilman ```sh```-komentoa. 

Tiedoston oikeuksien muokkaamiseen käytetään komentoa ```chmod```. Komennolla voi rajata tai lisätä tiedoston luku-, kirjoitus- ja suoritusoikeuksia eri käyttäjäryhmille. Kirjoittamalla komennon muodossa ```chmod u+x <tiedosto>``` nykyinen käyttäjä saa pysyvät suoritusoikeudet komento.sh-tiedostolle.

!!! shell "bash: chmod u+x"
    **C54W4KDHGK**:tol-alkeet jonrajal$ chmod u+x komento.sh

??? info "chmod palasina"
    Komento ```chmod u+x komento.sh``` voi näyttää oudolta. Se kuitenkin koostuu yksinkertaista palasista. Alla avataan palasten merkitykset:

    - ```chmod``` komennon nimi. Aivan tavallista.
    - ```u+x``` koostuu kolmesta tärkeästä avaimesta: ```u```, ```+``` ja ```x```.
        - ```u``` tarkoittaa nykyistä käyttäjää. Muut vaihtoehdot olisivat ```g``` ryhmälle ja ```o``` muille käyttäjille.
        - ```+``` tarkoittaa oikeuksien lisäämistä. Muut vaihtoehdot olisivat ```-``` vähentämiselle ja ```=``` asettamiseksi juuri tällaisiksi.
        - ```x``` tarkoittaa suoritusoikeuksia. Muut vaihtoehdot olisivat ```w``` kirjoitus- ja ```r``` lukuoikeuksille.
    - ```komento.sh``` on muokattavan tiedoston nimi. Vain tämän tiedoston oikeuksia muokataan.

Kun komentosarjatiedostolle on annettu suoritusoikeudet, sitä voi käyttää kuin mitä tahansa muuta ohjelmatiedostoa.

!!! shell "bash: komentosarja ohjelmana"
    **C54W4KDHGK**:tol-alkeet jonrajal$ ./komento.sh
    Komentosarja suoritettu


#### Graafisen käyttöliittymän kautta

Monet käyttöjärjestelmät tukevat komentosarjojen suorittamista myös graafisen käyttöliittymän puolella. 

=== ":os-mac: MacOS"
    MacOS tukee komentosarjojen suorittamista graafisen käyttöliittymän puolella erillisen tiedostopäätteen avulla. Jos vaihdat komentosarjatiedoston tiedostopäätteeksi ```.command```, niin komentosarjan saa suoritettua graafisen käyttöliittymän puolella kaksoisklikkaamalla tiedostoa Finderissa.
=== ":os-linux: Ubuntu"
    Ubuntu tukee komentosarjatiedostoja luontaisesti. Kunhan komentosarjatiedoston pääte on ```.sh```, Ubuntu osaa suorittaa komentosarjan kaksoisklikkaamalla tiedostoa graafisen käyttöliittymän puolella.


Kannattaa kuitenkin huomioida se, että graafisen käyttöliittymän puolelta suoritetut komentosarjat ajavat päätteen ja tulkin kevyemmässä muodossa. Tämä tarkoittaa sitä, ettei kaikkia tulkin [alustusscriptejä](../03-environment.md#bash_profile) ajeta. Tämä on tietysti merkityksellistä vain, jos olet itse määrittänyt alustustoimintoja ```.bash-profile```, ```.bash-login```, ```.profile``` tai ```.bashrc``` -tiedostoihin. Näissä tiedostoissa usein lisätään [```PATH```](../03-environment.md#path)-ympäristömuuttujaan lisäpolkuja, jolloin nämä muutokset eivät ole graafisen käyttöliittymän käytössä.


### Komentosarjan argumentit

Koska komentosarjoja suoritetaan samalla tavalla kuin muitakin komentoja, komentosarjoille voi antaa [argumentteja ja valintoja](../../01-komentorivi/02-bash-muoto.md#argumentit-lisavalinnat-ja-liput) kuten tavallisesti. Annettujen lisävalintojen käyttö standardien mukaisesti on hiukan vaikeaa, mutta jos haluaa lukea kaiken pelkkinä argumentteina, niin elämä on suhteellisen helppoa. 

Komentosarjat saavat jokaisen sille annetun argumentin erikoismuuttujina. Näiden erikoismuuttujien arvot saa luettua tekstimuotoisina numeroiduista muuttujista ```$0```, ```$1```, ```$2```, ```$3``` jne. Muuttujan numero kertoo, kuinka mones argumentti oli.

```$0``` on viittaus komentosarjaan itseensä. Sen jälkeen ```$1``` ensimmäiseen argumenttiin ja ```$2```toiseen ja niin edespäin. Annetut argumentit erotetaan toisistaan välilyönnillä, kuten tavallisestikin.

Näiden lisäksi on käytössä muutamia muita erikoismuuttujia, kuten ```$@``` ja ```$#```. Alla on muutama yksinkertainen esimerkki niiden käytöstä.

=== "$0"
    komento.sh tiedoston sisältö:
    ```
    #! /bin/bash

    echo $0
    ```

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        komento.sh
    
    $0 sisältää komentosarjatiedoston nimen tai polun siinä muodossa kuin sitä kutsuttiin.

    Eli myös seuraava on mahdollinen:

    !!! shell "bash: komentosarjan suoritus eri kansiossa"
        **C54W4KDHGK**:tol-alkeet jonrajal$ cd ..
        **C54W4KDHGK**:opetus jonrajal$ <pop>sh tol-alkeet/komento.sh argumentti toinen</pop>
        tol-alkeet/komento.sh

=== "$1"
    komento.sh tiedoston sisältö:
    ```
    #! /bin/bash

    echo $1
    ```

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        argumentti

    ```$1``` sisältää ensimmäisen argumentin arvon.
    
=== "$2"
    komento.sh tiedoston sisältö:
    ```
    #! /bin/bash

    echo $2
    ```

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        toinen

    ```$2``` sisältää toisen annetun argumentin arvon. 
    
=== "$@"
    komento.sh tiedoston sisältö:
    ```
    #! /bin/bash

    echo $@
    ```

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        argumentti toinen

    ```$@``` sisältää kaikki annetut argumentit yhdessä.
    
=== "$#"
    komento.sh tiedoston sisältö:
    ```
    #! /bin/bash

    echo $#
    ```

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        2

    ```$#``` sisältää annettujen argumenttien määrän.


