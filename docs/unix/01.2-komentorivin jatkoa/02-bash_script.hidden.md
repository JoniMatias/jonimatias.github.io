# Bash-komentosarjat

Näitä tiedostoja kutsutaan yleisemmin nimellä **bash-skripti**.

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

Kyseinen ohjelma käynnistää pythonin virtuaalikoneen, tarkistaa ja asentaa kaikki vaaditut ohjelmat ja kääntää verkkosivun testaamista varten. Viimeiseksi se avaa selaimen uuteen välilehteen paikallisella palvelimella sijaitsevan verkkosivun.

## #! (shebang)

Komentosarjatiedostoon saa kirjoittaa vapaasti komentoja miten tahtoo, paitsi ensimmäiselle riville. Ensimmäinen rivi, ts. otsakerivi, on tarkoitettu tulkin (**shell**) määrittelemiseksi.

Tulkin määritteleminen tiedostossa mahdollistaa komentosarjatiedostojen siirtämisen tietokoneelta toiselle, vaikka eri koneen käyttäjillä olisikin käytössään eri oletustulkki. Jokainen käyttäjä voi kirjoittaa skriptinsä haluamalleen tulkille, ja näin kirjoitettu komentosarja voidaan ajaa koneella kuin koneella.

Otsakerivin kaksi ensimmäistä merkkiä pitää olla ```#!```, eli risuaita ja huutomerkki. Näiden perään samalle riville kuuluu määritellä mikä komentorivitulkki tulkitsee tiedoston komennot. Tulkki pitää määritellä antamalla oman koneesi tiedostopolku tulkin ohjelmaan. Nämä tiedostopolut on kuitenkin yleensä hyvin standardoituja, ja tulkit asentuvat jokaiselle tietokoneelle yleensä samaan paikkaan. 

Jos komentosarjan haluaa tulkita *bash*-tulkilla, niin tiedoston ensimmäinen rivi on muotoa ```#! /bin/bash```. *zsh*-tulkille se on taas muotoa ```#! /bin/zsh```. 


## Ohjausrakenteet

Usein yksinkertaiset listamuotoiset komentosarjat eivät riitä, vaan komentojen pitää myös pystyä tekemään päätöksiä, ja reagoimaan löydettyihin tuloksiin. Tätä varten tulkit tukevat samanlaisia ohjausrakenteita kuin tavalliset ohjelmointikielet.

### Jokerimerkit (wildcard)

Jokerimerkit ovat erikoismerkkejä, joita voidaan käyttää teksin etsimiseen. Komentosarjojen tapauksessa niiden pääasiallinen käyttötarkoitus on etsiä useita tiedostoja, joiden nimet ovat lähellä toisiaan tai joilla on sama tiedostopääte. Esimerkiksi komento ```echo *.txt``` tulostaa kaikki aktiivisessa kansiossa olevat .txt-tiedostot.

*Bash* tukee kolmea erilaista jokerimerkkiä. Nämä merkit ovat ```*```, ```?``` ja ```[]```.

Näistä yksinkertaisin on ```?```, joka voidaan korvata millä tahansa yhdellä merkillä. Täten siis merkkijono ```kuva-?.jpg``` löytää minkä tahansa seuraavista: ```kuva-2.jpg```, ```kuva-5.jpg``` ja ```kuva-9.jpg```, mutta ei löydä ```kuva-.jpg``` tai ```kuva-25.jpg```

Yleisin jokerimerkki on ```*```. Tämä korvataan millä tahansa määrällä mitä tahansa merkkejä. *-merkki voidaan jättää myös kokonaan korvaamatta. Eli merkkijono ```kuva-*.jpg``` löytää tiedostot ```kuva-2.jpg```, ```kuva-76.jpg```, ```kuva-asd.jpg``` ja ```kuva-.jpg```, mutta ei löydä merkkijonona ```asd-2.jpg``` tai ```kuva-54.png```.

Tarkimman kontrollin jokerimerkeistä saa joukon määrittävällä jokerimerkillä. Vaihteluvälin voi määritellä kirjoittamalla kaikki hyväksytyt merkit hakasulkeiden (```[``` ja ```]```) väliin. Hakasulkeisiin voidaan kirjoittaa jokainen etsitty merkki erikseen (```[a6gnfy]```) tai määritellä ne liukuvälinä: ```[0-9]``` löytää minkä tahansa numeron ja ```[a-z]``` minkä tahansa pienen kirjaimen. Hakasulkeiden sisään voi myös laittaa useamman liukuvälin, jolloin ´´´[A-Za-z]´´´ löytää minkä tahansa kirjaimen. Joukon määrittelevä jokerimerkki toimii kuten ```?```, eli se etsii vain yhtä merkkiä annetusta paikasta. 

Jokerimerkkejä voi olla useampi samassa haussa. Esimerkiksi haku ```*.*``` löytää kaikki kansiossa olevat tiedostot, joilla on tiedostopääte (tai piste muuten nimessä).


Esimerkkien mukaiset tulokset on toistamiseen nähtävissä alla olevassa taulukossa.


| Tiedosto     | kuva-?.jpg   | kuva-*.jpg   | kuva-.jpg             |
|--------------|--------------|--------------|-----------------------|
| kuva-2.jpg   | X            | X            |                       |
| kuva-5.jpg   | X            | X            |                       |
| kuva-08.jpg  |              | X            | X                     |
| kuva-54.jpg  |              | X            | X                     |
| kuva-f.jpg   | X            | X            |                       |
| kuva-.jpg    |              | X            |                       |
| kuva-asd.jpg |              | X            |                       |
| asd-5.jpg    |              |              |                       |


Näiden *bashin* sisäänrakennettujen perusjokerimerkkien lisäksi joillain ohjelmilla ja komennoilla voi olla omia jokerimerkkejään. Monet ohjelman tukevat mm. [säännöllisiä lausekkeita](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet), jotka tunnetaan myös paremmin englannista tulevalla **regex**-lyhenteellä. Tämä on yksi syy lisää tutustua jokaisen käyttämääsi ohjelmaan ```man```-komennolla.


### Silmukat 

!!! abstract "Yhdistä tekstitiedostot yhteen tiedostoon."
    ```
    for tiedosto in *.txt
        do cat $tiedosto >> tulos.txt
    done
    ```

### Ehtolauseet



## Komentosarjojen ajaminen

**TODO:** sh-komennon kautta.

**TODO:** chmod

**TODO:** Macos .command & Ubuntun tuplaklikkaus


## Bash-skriptit ja $PATH (ja muut ympäristömuuttujat)



## cron-job

