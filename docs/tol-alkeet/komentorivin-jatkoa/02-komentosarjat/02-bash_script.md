# Bash-komentosarjat

Komentosarjoja kutsutaan yleisemmin nimellä **bash-skripti**. Komentosarjat yleensä kirjoitetaan tiedostoon, joka määrittelee mitkä komennot ajetaan ja missä järjesteyksessä. Yleensä komentosarjoja käytetään hiukan monimutkaisempiin komentoihin, joita pitää ajaa usein, tai muuhun automaatioon.

## Komentosarjatiedostot

Skriptitiedosto on vain tavallinen tekstitiedosto, johon on kirjoitettu ajettavat komennot erillisille riveille siinä järjestyksessä kun ne halutaan ajaa. Komentosarjatiedostolle perinteisesti on annettu [tiedostopäätteeksi](../../00-intro/01-tiedostot.md#tiedostopäätteet) ```.sh```, mutta mikä tahansa pääse – tai ei päätettä ollenkaan – kelpaa myös.

Yksinkertaisimmillaan tiedostossa voi olla vain muutama komento ilman minkäänlaisia kontrollirakenteita. Esimerkiksi tätä nettisivua varten on tehty yksinkertainen komentosarja, jolla sivua voi testata paikallisesti omalla koneella.

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


### Kommentit

Joskus komentosarjat ovat niin monimutkaisia, että niihin kannattaa kirjoittaa selkokielinen kuvaus komentosarjan tarkoituksesta. Tällaiset selitykset pitää merkitä kommenteiksi, ettei komentotulkki luule niitä suoritettaviksi komennoiksi.

Kommentti aloitetaan risuaidalla (```#```), ja kaikki merkin jälkeen samalle riville kirjoitettu teksti tulkitaan kommentiksi. Komentotulkki ei siis yritä tehdä niille mitään, vaan lopettaa tulkkaamisen merkkiin.

```
#! /bin/bash

# Nämä rivit on kommentoitu, eikä niitä suoriteta.
# Tämä komentosarja lisää kaikkien aktiivisessa kansiossa olevien 
# jpg-kuvatiedostojen nimen eteen argumenttina annetun tekstin.

for tiedosto in *.jpg
    do mv "$tiedosto" "$@$tiedosto" # Kommentin voi laittaa myös rivin loppuun.
done
```

Kaikki risuaidan jälkeiset merkit [shebangia ```#!```](#-shebang) lukuun ottamatta tulkitaan kommenteiksi ja jätetään suorittamatta. Shebang on erikoisotsakerivi, joka tulkitaan aina otsakerivin säännöillä.

Bash-tulkki tukee komentosarjatiedostoissa vain rivikommentteja, eli vain yhden rivin mittaisia kommentteja. Tämän vuoksi useamman rivin mittainen kommentti tarvitsee risuaidan jokaisen rivin alkuun.

## Komentosarjojen ajaminen

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

Tätä kautta komentosarjan ajaminen luo uuden suoritusympäristön tulkin sisälle. Kaikki komentosarjan tekemät muutokset tulkin asetuksiin tai [ympäristömuuttujiin](../03-environment.md#ympäristömuuttujat) jäävät vain komentosarjan sisäiseksi.

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

Kuten ```sh```-komennon kanssa, tätä kautta ajetut komentosarjat luovat uuden suoritusympäristön tulkin sisälle. Kaikki komentosarjan tekemät muutokset tulkkiin tai [ympäristömuuttujiin](../03-environment.md#ympäristömuuttujat) jäävät vain komentosarjan sisäiseksi.

#### Graafisen käyttöliittymän kautta

Monet käyttöjärjestelmät tukevat komentosarjojen suorittamista myös graafisen käyttöliittymän puolella. 

=== ":os-mac: MacOS"
    MacOS tukee komentosarjojen suorittamista graafisen käyttöliittymän puolella erillisen tiedostopäätteen avulla. Jos vaihdat komentosarjatiedoston tiedostopäätteeksi ```.command```, niin komentosarjan saa suoritettua graafisen käyttöliittymän puolella kaksoisklikkaamalla tiedostoa Finderissa.
=== ":os-linux: Ubuntu"
    Ubuntu tukee komentosarjatiedostoja luontaisesti. Kunhan komentosarjatiedoston pääte on ```.sh```, Ubuntu osaa suorittaa komentosarjan kaksoisklikkaamalla tiedostoa graafisen käyttöliittymän puolella.


Kannattaa kuitenkin huomioida se, että graafisen käyttöliittymän puolelta suoritetut komentosarjat ajavat päätteen ja tulkin kevyemmässä (epäinteraktiivisessa) muodossa. Tämä tarkoittaa sitä, ettei kaikkia tulkin [käynnistyskomentosarjoja](../03-environment.md#päätteen-käynnistystiedostot) ajeta, eikä niissä tehdyt muutokset siis ole voimassa. Tämä on tietysti merkityksellistä vain, jos olet itse määrittänyt alustustoimintoja ```.bash-profile```, ```.bash-login```, ```.profile``` tai ```.bashrc``` -tiedostoihin. Tämän voi korjata aloittamalla komentosarja alla esitellyllä [```source```-komennolla](#source-komento).


#### source-komento

Komentosarjoja voi ajaa myös komennolla ```source```. Toisin kuin [```sh```](#sh-komento) tai tiedoston suora suorittaminen, ```source``` ei luo uutta suoritusympäristöä komentosarjalle. Tämä mahdollistaa sen, että komentosarjan tekemät muutokset tulkkiin tai [ympäristömuuttujiin](../03-environment.md#ympäristömuuttujat) jäävät voimaan myös komennon suorittajan kontekstissa.

Yleisin käyttötarkoitus tälle komennolle on muiden komentosarjojen alussa, jossa halutaan varmistaa [päätteen käynnistystiedostojen](../03-environment.md#päätteen-käynnistystiedostot) ajaminen myös silloin, kun komentosarja suoritetaan ilman interaktiivista tulkkia. Toisin sanoen tämän komennon pääasiallinen tarkoitus on ajaa komentosarjoja toisten komentosarjojen sisällä.

Yleisin paikka ```source```-kutsulle on siis seuraavanlainen (tai vastaava) rivi jonkin komentosarjan alussa:

```
#! /bin/bash

source ~/.bash_profile

... tämän jälkeen tulee muita komentoja
```

??? info "sh vs source"
    Jos jotenkin jäi epäselväksi mikä ero on komennoilla ```sh``` ja ```source```, niin toivottavasti tämä esimerkki valaisee vähän.

    Oletetaan, että meillä on komentosarjatiedosto nimeltä ```komento.sh```, jossa on seuraava sisältö:

    ```
    #! /bin/bash

    muuttuja=55
    echo $muuttuja
    ```

    Jos tätä tiedostoa kutsutaan käyttäen ```sh``` tai ```source``` komentoa, niin komentosarjan suorituksessa ei ole mitään eroa. Mutta jos sen jälkeen kirjoitetaan suoraan komentoriville komento ```echo $muuttuja```, niin eron huomaa.

    === "sh"
        !!! shell "bash: sh"
            **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh</pop>
            55
            **C54W4KDHGK**:tol-alkeet jonrajal$ echo $muuttuja

            **C54W4KDHGK**:tol-alkeet jonrajal$
    === "source"
        !!! shell "bash: source"
            **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>source komento.sh</pop>
            55
            **C54W4KDHGK**:tol-alkeet jonrajal$ echo $muuttuja
            55
            **C54W4KDHGK**:tol-alkeet jonrajal$
    
    Kuten esimerkeistä näkee, tulkki muistaa komentosarjan tekemät muutokset muuttujiin ```source```-komennon kanssa, mutta ei muista niitä ```sh```-komennon kanssa.



## Komentosarjan argumentit

Koska komentosarjoja suoritetaan samalla tavalla kuin muitakin komentoja, komentosarjoille voi antaa [argumentteja ja valintoja](../../01-komentorivi/02-bash-muoto.md#argumentit-lisävalinnat-ja-liput) kuten tavallisesti. Annettujen lisävalintojen käyttö standardien mukaisesti on hiukan vaikeaa, mutta jos haluaa lukea kaiken pelkkinä argumentteina, niin elämä on suhteellisen helppoa. 

Komentosarjat saavat jokaisen sille annetun argumentin erikoismuuttujina. Näiden erikoismuuttujien arvot saa luettua tekstimuotoisina numeroiduista muuttujista ```$0```, ```$1```, ```$2```, ```$3``` jne. Muuttujan numero kertoo, kuinka mones argumentti oli.

```$0``` on viittaus komentosarjaan itseensä. Sen jälkeen ```$1``` ensimmäiseen argumenttiin ja ```$2```toiseen ja niin edespäin. Annetut argumentit erotetaan toisistaan välilyönnillä, kuten tavallisestikin. Lainausmerkkien (```"```) välissä oleva teksti lasketaan 

Näiden lisäksi on käytössä muutamia muita erikoismuuttujia, kuten ```$@``` ja ```$#```, joista voi lukea kaikki argumentit kerralla ja argumenttien määrän. 

Alla on muutama yksinkertainen esimerkki argumentti käytöstä komentosarjojen kanssa. Esimerkeissä komentosarjatiedoston sisältö muuttuu, mutta sitä aina kutsutaan samoilla argumenteilla. Suoritettava komento on aina ```sh komento.sh argumentti toinen```.

=== "$0"
    **```$0``` sisältää komentosarjatiedoston nimen tai polun siinä muodossa kuin sitä kutsuttiin.**
    
    Jos ```komento.sh``` tiedoston sisältö on:
    ```
    #! /bin/bash

    echo $0
    ```

    niin tulkki tuottaisi seuraavalla kutsulla tällaisen tuloksen:

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        komento.sh
    

    Myös seuraava on mahdollinen:

    !!! shell "bash: komentosarjan suoritus eri kansiossa"
        **C54W4KDHGK**:tol-alkeet jonrajal$ cd ..
        **C54W4KDHGK**:opetus jonrajal$ <pop>sh tol-alkeet/komento.sh argumentti toinen</pop>
        tol-alkeet/komento.sh

=== "$1"
    **```$1``` sisältää ensimmäisenä annetun argumentin arvon.**
    
    Jos ```komento.sh``` tiedoston sisältö on:
    ```
    #! /bin/bash

    echo $1
    ```

    niin tulkki tuottaisi seuraavalla kutsulla tällaisen tuloksen:

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        argumentti

    Erikoismuuttuja ```$1``` 

    
=== "$2"
    **```$2``` sisältää toisena annetun argumentin arvon.**
    
    Jos ```komento.sh``` tiedoston sisältö on:
    ```
    #! /bin/bash

    echo $2
    ```

    niin tulkki tuottaisi seuraavalla kutsulla tällaisen tuloksen:

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        toinen

    
=== "$@"
    **```$@``` sisältää kaikki annetut argumentit yhdessä.**
    
    Jos ```komento.sh``` tiedoston sisältö on:
    ```
    #! /bin/bash

    echo $@
    ```

    niin tulkki tuottaisi seuraavalla kutsulla tällaisen tuloksen:

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        argumentti toinen

    
=== "$#"
    **```$#``` sisältää annettujen argumenttien määrän.**
    
    Jos ```komento.sh``` tiedoston sisältö on:
    ```
    #! /bin/bash

    echo $#
    ```

    niin tulkki tuottaisi seuraavalla kutsulla tällaisen tuloksen:

    !!! shell "bash: komentosarjan suoritus"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>sh komento.sh argumentti toinen</pop>
        2


## Monimutkaisemmat komentosarjat

Moniin komentosarjojen käyttötarkoituksiin riittää vain suoritettava lista komennoista.  Yllä annettiin esimerkki verkkosivun testaamiseen käytettävästä komentosarjasta, mutta myös muita käyttötapauksia on.

Alla muutama esimerkki yksinkertaisista komentosarjoista.

??? 


Joskus komentosarjat tarvitsevat monimutkaisempia rakenteita, jossa tarkkaillaan toimintaympäristön tilaa, tai työskennellään useampien tiedostojen kanssa. Sellaiseen käyttötarkoitukseen on hyvä tuntea myös komentorivin [muuttujat ja ohjausrakenteet](../02.2-ohjausrakenteet/02-2-bash-rakenteet.md#bashin-ohjausrakenteet), jotka käsitellään seuraavassa osiossa.
