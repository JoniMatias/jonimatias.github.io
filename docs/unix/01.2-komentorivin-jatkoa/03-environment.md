# Komentorivin ympäristö

Komentojen ja automaatioiden lisäksi komentorivillä voi hallita tietokoneen asetuksia. Näiden asetuksien muokkaaminen muuttaa komentorivin, muiden ohjelmien tai koko käyttöjärjestelmän toimintaa.



## Ympäristömuuttujat

Jokaisella tietokoneella on ympäristömuuttujia. Nämä ovat tietokoneen talteen tallentamia arvoja, joita monet ohjelmat käyttävät saadakseen tietoa tietokoneen ja käyttäjätilin tilasta. Ympäristömuuttujien muokkaaminen on tehokas tapa saada muutettua tietokoneen toimintaa, mutta samalla kannattaa olla tarkkana, ettei sotke tietokonetta, jos niitä lähtee muuttamaan.

Osaa ympäristömuuttujista ei välttämättä kannata tai voi muokata, sillä käyttöjärjestelmä muokkaa niiden sisältöä automaattisesti ja itsekseen. Tällaisia ovat mm. <nowrap>:os-mac::os-linux: *bashin*</nowrap> muuttujat ```PWD``` ja ```OLDPWD```, joihin on tallennettu päätteen tämänhetkinen aktiivinen kansio ja edellinen aktiivinen kansio.

Ympäristömuuttujia käytetään aivan kuten tavallisia [muuttujia](02-komentosarjat/02-bash_script.md#muuttujat). Toiminnan kannalta ne itseasiassa ovat samoja asioita; ne tallennetaan samaan paikkaan ja niitä luetaan samalla tavalla. Ympäristömuuttujissa on vain se jippo, että monet muutkin ohjelmat, jopa ne jotka ovat ennakkoasennettu koneelle, käyttävät ympäristömuuttujia omaan toimintaansa. Itse nimettyjen muuttujien kanssa voi luottaa siihen, etteivät ne sekoita muiden ohjelmien toimintaan merkittävästi.

Alla on lista muutamasta yleisimmästä ympäristömuuttujasta:

| :os-win: Nimi Windowsissa | :os-mac::os-linux: Nimi bashissa | Kuvaus                                |
|---------------------------|----------------------------------|---------------------------------------|
| %HOMEDIR%                 | $HOME                            | Polku kotihakemistoon                 |
| %PATH%                    | $PATH                            | Polku komentoriviohjelmien oletushakemistoon |
| **(Ei ole)**              | $SHELL                           | Polku oletustulkkiin, joka käynnistetään päätteen mukana. |
| %USER%                    | $USER                            | Kirjautuneen käyttäjän käyttäjätunnus. |
| **(Ei ole)**              | $LANG                            | Kieliasetukset                         |
| %PROMPT%                  | $PS1                             | Komentokehotteen muoto                 |

Myös monet ohjelmat tallentavat ympäristömuuttujia yleiseen käyttöön. Esimerkiksi <nowrap>:os-win: Windows-</nowrap>koneilla Java määrittelee kääntäjän ja virtuaalikoneen sijainnin ```%JAVA_HOME%``` muuttujalla <nowrap>(:os-mac::os-linux: muilla</nowrap> koneilla ne löytyvät $PATH:istä). Samoin <nowrap>:os-mac: MacOS-koneilla</nowrap> käytettävä [Homebrew](../01-komentorivi/04-asennus.md#pakettien-asentaminen) asentaa kaikki ohjelmat polkuun, joka on määritelty muuttujassa ```$HOMEBREW_PREFIX```.


Kaikki ympäristömuuttujat voi saada näkyviin seuraavalla komennolla:

=== ":os-win: Windows"
    !!! shell "cmd.exe: näytä ympäristömuuttujat"
        C:\\TOL-alkeet> <pop>SET</pop>

=== ":os-mac::os-linux: bash"
    !!! shell "bash: näytä ympäristömuuttujat"
        **C54W4KDHGK**:~ jonrajal$ <pop>declare -p</pop>

Alla käydään muutama ympäristömuuttuja tarkemmin läpi.





### $PATH

Yleisimmin muokattu ympäristömuuttuja on ```PATH```. Se määrittelee kaikki hakemistot, joista komentorivitulkki hakee suoritettavat tiedostot kaikille komennoille ja komentojen lailla ajettaville ohjelmille. ```PATH``` on lista [absoluuttisia polkuja](../00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) kansioihin, joista komentoa vastaavaa tiedostoa etsitään. ```PATH``` listaa kaikki nämä polut yhdessä pötkössä, ja jokainen polku on erotettu <nowrap>:os-win: puolipisteellä</nowrap> ```;``` tai <nowrap>:os-mac::os-linux: kaksoispisteellä</nowrap> ```:```.

=== ":os-win: Windows"
    !!! shell "cmd.exe: echo %PATH%"
        C:\\> <pop>echo %PATH%</pop>
        C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem

=== ":os-mac::os-linux: echo %PATH%"
    !!! shell "bash: echo $PATH"
        **C54W4KDHGK**:~ jonrajal$ <pop>echo $PATH</pop>
        /opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/opt/homebrew/opt/python@3.13/libexec/bin:/Users/jonrajal/.local/bin

```PATH```-muuttujan sisältö on jo oletuksena aika laaja, koska se sisältää kaikki päätteen oletuskomentojen kansiot. Käytännössä kaikki komennot ovat pohjimmiltaan vain suoritettavia tiedostoja, jotka sijaitsevat jossain ```PATH```in kansiossa. Esimerkiksi <nowrap>:os-mac: MacOS-koneilla</nowrap> komento ```ls``` löytyy polusta ```/bin/ls``` ja ```man``` löytyy polusta ```/user/bin/man```. Täten, jos käyttäjä laittaa itse tekemänsä ohjelman mihin tahansa ```PATH```in määrittelemään kansioon, niin sitä voi käyttää kuten komentoa.

Yleensä ```PATH```in käyttämät oletuskansiot ovat piilossa, vaikeasti päästävissä ja käyttöjärjestelmätasolla suojattu, joten tiedostojen lisääminen niihin kansioihin ei välttämättä ole paras idea. Paljon helpommalla pääsee, jos luo koneelle oman komentoriviohjelmakansion, johon siirtää kaikki haluamansa itsetekemät komentoriviohjelmat ja komentosarjat. Sitten vain lisää tämän oman kansion ```PATH```iin seuraavalla tavalla:

=== ":os-win: Windows"
    Ympäristömuuttujia muokataan kuten muitakin muuttujia. ```PATH```-muuttujan kanssa kannattaa kuitenkin huomata, ettei vanhoja tietoja poisteta siitä, vaan pelkästään uusi polku lisätään vanhojen jatkeeksi. Tämä onnistuu komennolla ```SET PATH=%PATH%;C:\\täysi\\polku\\omaan\\kansioon```.

    !!! shell "cmd.exe: aseta PATH"
        C:\\> <pop>SET PATH=%PATH%;C:\\Users\\jonrajal\\Koodi\\scripts</pop>

    Komento voi näyttää pelottavalta, joten puretaanpa se osiin:

    - ```SET PATH=``` vaihtaa PATH-muuttujan arvon yhtäsuuruusmerkin oikealla puolella olevaksi arvoksi.
    - ```%PATH%``` ensimmäinen asia, mitä uuteen PATH-muuttujaan lisätään, on koko vanhan PATH-muuttujan arvo. Tällöin mitään ei jää pois.
    - ```;``` seuraavaksi lisätään muuttujaan puolipiste, koska jokainen PATH-muuttujan polku on eroteltu puolipisteellä.
    - ```\Users\jonrajal\Koodi\scripts``` viimeisenä laitetaan oma polku osaksi PATH-muuttujaan asetettavaa arvoa.

=== ":os-mac::os-linux: bash"
    *Bashissa* ympäristömuuttujia muokataan kuten muitakin muuttujia. ```PATH```-muuttujan kanssa kannattaa kuitenkin huomata, ettei vanhoja tietoja poisteta siitä, vaan pelkästään uusi polku lisätään vanhojen jatkeeksi. Tämä onnistuu komennolla ```PATH=$PATH:/täysi/polku/omaan/kansioon```. 

    !!! shell "bash: aseta PATH"
        **C54W4KDHGK**:~ jonrajal$ <pop>PATH=$PATH:/Users/jonrajal/Koodi/scripts</pop>

    Komento voi näyttää pelottavalta, joten puretaanpa se osiin:

    - ```PATH=``` vaihtaa PATH-muuttujan arvon yhtäsuuruusmerkin oikealla puolella olevaksi arvoksi.
    - ```$PATH``` ensimmäinen asia, mitä uuteen PATH-muuttujaan lisätään, on koko vanhan PATH-muuttujan arvo. Tällöin mitään ei jää pois.
    - ```:``` seuraavaksi lisätään muuttujaan kaksoispiste, koska jokainen PATH-muuttujan polku on eroteltu kaksoispisteellä.
    - ```/Users/jonrajal/Koodi/scripts``` viimeisenä laitetaan oma polku osaksi PATH-muuttujaan asetettavaa arvoa.

Ongelmia tulee kuitenkin, jos ympäristömuuttujaa yrittää muokata esimerkin mukaisesti suoraan komentokehotteesta. Jokainen komentokehotteessa muokattu muuttuja säilyy muistissa vain siitä [päätteessä](../01-komentorivi/01-bash-alkeet.md#komentorivin-osat), ja vain niin kauan kuin pääte on käynnissä. Jotta komentoa ei tarvitsisi ajaa joka kerta uudestaan, se kannattaa sijoittaa [päätteen käynnistystiedostoon](#päätteen-käynnistystiedostot), jossa se suoritetaan automaattisesti aina päätteen käynnistyessä.



=== ":os-win: AUTOEXEC.BAT"
    ```PATH```-muuttujan saa nopeasti käynnistystiedostoon lisäämällä seuraava rivi ```AUTOEXEC.BAT```-tiedostoon:

    **TODO:** Miten muutetaan PATHia AUTOEXECissa?

=== ":os-mac::os-linux: .bash_profile"
    ```PATH```-muuttujan saa nopeasti käynnistystiedostoon lisäämällä seuraava rivi ```.bash_profile```-tiedostoon (tiedosto on kotihakemistossa ```~```):
    ```
    export PATH=$PATH:/täysi/polku/omaan/kansioon
    ```

    Tämä on lähes sama komento kuin komentorivillekin kirjoitettaessa, mutta alussa on lisäksi avainsana ```export```. Tämä avainsana lisätään, koska ```.bash_profile``` on [komentosarjatiedosto](02-komentosarjat/02-bash_script.md#bash-komentosarjat). Komentosarjojen muokkaamat muuttujat tavallisesti jäävät vain komentosarjan sisäiseksi muutokseksi. Komento ```export``` laajentaa muuttujan muutoksen koko päätteelle näkyväksi.

    Voit lukea lisää ```.bash_profile```-tiedoston muokkaamisesta ja avaamista [alta](#päätteen-käynnistystiedostot), mutta helppo tapa lisätä tiedostoon uusi rivi on käyttää [tulosteenohjausmerkkejä](../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tuloste-tiedostoon). 

    !!! shell "bash: PATH >>"
        **C54W4KDHGK**:~ jonrajal$ <pop>echo PATH=$PATH:/Users/jonrajal/Koodi/scripts >> ~/.bash_profile</pop>







### Kehotteen muokkaus

[Komentokehotteen](../01-komentorivi/01-bash-alkeet.md#komentorivin-osat) ulkoasua voi muokata haluamansalaiseksi ympäristömuuttujilla. Joka komentotulkilla on oma tapansa kehotteen muotoiluksi, joten käydään tässä molemmat läpi.

=== ":os-win: Windows %PROMPT%"
    **TODO:** %PROMPT%in muokkaus

=== ":os-mac::os-linux: bash $PS1"
    *Bashissa* on itseasiassa useampi ympäristömuuttuja kehotteen muodolle, riippuen käyttäjän ajamasta komennosta. ```PS1``` muokkaa peruskehotetta, joten siihen voidaan perehtyä lähemmin. Muuttujia ```PS2```, ```PS3``` ja ```PS4``` käytetään erikoistapaukissa.

    Kuten [komentorivin perusteissa](../01-komentorivi/01-bash-alkeet.md#kehotteen-muotoja) esiteltiin, *bashin* kehote on oletuksena muotoa:
    
    ```tietokoneen_nimi:aktiivinen_kansio käyttäjätunnus$ ```. 
    
    ```PS1```-muuttujan käyttämässä muodossa tämä esitetään tekstirivillä:
    
    ```\h:\W \u\$ ```.

    Kehotteen muotoilussa käytetään siis avaimia, jotka korvataan oikealla sisällöllä, kun kehote näytetään käyttäjälle. ```PS1```:n tukemia avaimia on ainakin seuraavat:

    | Avain   | Merkitys                                                |
    |---------|---------------------------------------------------------|
    | \u      | Käyttäjätunnus |
    | \h      | Tietokoneen nimi |
    | \H      | Tietokoneen koko nimi |
    | \d      | Päivämäärä |
    | \t      | Kellonaika |
    | \v      | *Bashin* versio |
    | \w      | Polku aktiiviseen kansioon |
    | \W      | Aktiivisen kansion nimi |
    | \$      | Näyttää ```$```, ellei käyttäjä ole pääkäyttäjä. Pääkäyttäjälle ```#```. |

    Avaimia on myös enemmän, joten komentorivistä saa melko helposti haluamansa näköisen. Muuttujaan voi kirjoittaa myös vapaamuotoista tekstiä, tai laittaa muuttujien arvoja käyttämällä dollarimerkkiä (```$```).
    
    Varsinkin hakasulkuavaimien (```\[``` ja ```\]```) väliin voi laittaa erikoismerkkejä, jotka muuttavat toimintaa merkittävästi.

    ??? info "Muutama esimerkkikehote"
        Kehote voi näyttää kellonajan ja päivän. Näppärä, jos pitää kirjaa ajamistaan komennoista kopioimalla päätteen tulosteet erilliseen tekstitiedostoon.
        ```
        PS1="[\d \t \u@\h:\w ] $ "
        ``` 
        !!! shell "bash: PS1="[\d \t \u@\h:\w ] $ "
            [To Mar 13 20:11:32 jonrajal@C54W4KDHGK:~ ] $
        -------
        Kehote voi näyttää polun vakiintuneessa URL-muodossa. 
        ```
        PS1="\u@\h:\w\$ "
        ```
        !!! shell "bash: "\u@\h:\w\$ ""
            jonrajal@C54W4KDHGK:~/Koodi/opetus/tol-alkeet/kuvia$
        -------
        Kehotteen muotoiluun voi kirjoittaa myös vapaamuotoista tekstiä.
        ```
        PS1="Tämä on kehote > "
        ```
        !!! shell "bash: PS1=\"Tämä on kehote\""
            Tämä on kehote > 
        -------
        Kehotteessa saa käyttää myös muuttujia. Tässä on käytettä muuttujaa ```PWD```, jotta *bashin* kehote näyttäisi samalta kuin Windowsin cmd.exen kehote.
        ```
        PS1="$PWD> "
        ```
        !!! shell "bash: PS1=$PWD"
            /Users/jonrajal> 






## Päätteen käynnistystiedostot

Usein komentoriviä käyttäessä tulee vastaan tilanteita, joissa aina haluaisi suorittaa samat komennot, riippumatta mistään. Jos haluaa asettaa ympäristömuuttujat aina kohdalleen, tai vaihtaa komentorivi aloittamaan aina tietysti kansiosta.

Näitä varten komentotulkit käyttävät käynnistystiedostoja. Nämä käynnistystiedostot ovat aivan tavallisia [komentosarjotiedostoja](02-komentosarjat/index.md#komentosarjat), jotka tulkki suorittaa aina käynnistyessään.

=== ":os-win: Windows"


=== ":os-mac: MacOS"
    !!! warning inline end ".bashrc"
        *Bash* joskus lukee käynnistyessään tiedoston ```~/.bashrc``` muiden tiedostojen sijasta. Tämä tiedosto luetaan vain niissä tapauksissa, jos tulkki käynnistyy ilman sisäänkirjautumista. MacOS:llä tämä on kuitenkin harvinaista.
    
    *Bash* aina käynnistyessään suorittaa yhden käynnistystiedoston, riippuen siitä, minkä tiedoston se löytää ensimmäisenä. *Bash* hakee ensin tiedostoa ```~/.bash_profile``` ja suorittaa sen; jos sitä ei löydy, niin *bash* etsii tiedoston ```~/.bash_login```. Senkin puuttuessa etsitään vielä tiedosto ```~/.profile```. Jos mitään näistä ei löydy, *bash* ei suorita mitään käynnistystiedostoa.


    ```.bash_profile``` ja sen kaverit ovat piilotettuja tekstitiedostoja, joten niiden avaaminen komentorivin kautta voi olla vaikeaa. Kokeile jotain seuraavista komennoista sen avaamiseksi:

    - ```open -t ~/.bash_profile``` avaa Texturin (eng. *TextEdit*) tiedoston muokkaamista varten.
    - ```nano ~/.bash_profile``` avaa tekstitiedoston Nanolla, joka on komentorivillä toimiva tekstieditori.
    - Jos haluat vain lisätä tekstiä tiedoston perään, voit käyttää [tulosteenohjausmerkkejä](../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tuloste-tiedostoon). ```echo PATH=$PATH:/täysi/polku/omaan/kansioon >> ~/.bash_profile``` lisää halutun rivin tiedoston perään.

    Käynnistystiedostojen kanssa kannattaa myös huomioida se, että ne suoritetaan vain *interaktiivisen* tulkin käynnistyessä, eli tilanteissa jossa tulkki näyttää komentokehotteen. Jos suoritat komentosarjoja tai komentoriviohjelmia graafisen käyttöliittymän kautta, näitä käynnistystiedostossa esiteltyjä ```PATH```-muutoksia tai ```alias```-määrittelyjä ei suoriteta.

=== ":os-linux: Ubuntu"
    !!! warning inline end ".bash_profile"
        *Bashilla* on paljon erilaisia käynnistystiedostoja eri käyttötapauksiin. Ubuntun oletuspääte ei kirjaa käyttäjää sisään tulkkiin, joten se käyttää ```.bashrc```-tiedostoa. Toisaalta *bash* käyttää myös tiedostoja ```.bash_profile```, ```.bash_login``` ja ```.profile```, jos kirjautunut käyttäjä käynnistää tulkin. Näiden kanssa kannattaa olla tarkkana.
    
    *Bash* aina käynnistyessään suorittaa tiedoston ```~/.bashrc``` sisällön komentosarjana. Jos tiedostoa ei ole käyttäjän kotihakemistossa, niin mitään ei suoriteta.

    ```.bashrc``` ja sen kaverit ovat piilotettuja tekstitiedostoja (niiden nimi alkaa pisteellä), joten niiden avaaminen komentorivin kautta voi olla vaikeaa. Kokeile jotain seuraavista komennoista sen avaamiseksi:

    - ```xdg-open ~/.bashrc``` avaa käyttöjärjestelmän oletustekstieditorin tiedoston muokkaamista varten. Pahimmassa tapauksessa se voi olla *vim*.
    - ```nano ~/.bashrc``` avaa tekstitiedoston Nanolla, joka on komentorivillä toimiva tekstieditori.
    - Jos haluat vain lisätä tekstiä tiedoston perään, voit käyttää [tulosteenohjausmerkkejä](../01-komentorivi/03-peruskomennot/bash-peruskomennot.md#tuloste-tiedostoon). ```echo PATH=$PATH:/täysi/polku/omaan/kansioon >> ~/.bashrc``` lisää halutun rivin tiedoston perään.

    Käynnistystiedostojen kanssa kannattaa myös huomioida se, että ne suoritetaan vain *interaktiivisen* tulkin käynnistyessä, eli tilanteissa jossa tulkki näyttää komentokehotteen. Jos suoritat komentosarjoja tai komentoriviohjelmia graafisen käyttöliittymän kautta, näitä käynnistystiedostossa esiteltyjä ```PATH```-muutoksia tai ```alias```-määrittelyjä ei suoriteta.




### Alias

Käynnistystiedostot ovat näppäriä paikkoja kirjoittaa aikaisemmin esitellyt [PATHin lisäykset](#path) ja [kehotteen muotoilut](#kehotteen-muokkaus), mutta niitä voi käyttää myös muuhun. Toinen yleinen tarkoitus niille on esitellä komentojen synonyymeja tai pienoiskomentoja. Tapoja kirjoittaa lyhenteitä monimutkaisemmille komennoille.

=== ":os-win: Windows doskey"
    Windows ei tue aliasta tai vastaavaa järjestelmää. cmd.exe voi luoda macroja komennolla ```doskey```, mutta niiden käyttö on huomattavan monimutkaista.

=== ":os-mac::os-linux: *Bash* alias"

    *Bashilla* pienoiskomennot saa luotua ```alias```-komennolla.

    ```alias``` luo uuden avainsanan komentoriville, joka aina kirjoitettaessa laajenee annettuun merkitykseensä. Esimerkiksi ```alias vaihdakansio=cd``` luo käyttäjälle uuden komennon nimeltä ```vaihdakansio```, joka toimii kuin ```cd```.

    !!! shell "bash: alias vaihdakansio=cd"
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>alias vaihdakansio=cd</pop>
        **C54W4KDHGK**:tol-alkeet jonrajal$ pwd
        /Users/jonrajal/Koodi/opetus/tol-alkeet
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>vaihdakansio kuvia</pop>
        **C54W4KDHGK**:kuvia jonrajal$ pwd
        /Users/jonrajal/Koodi/opetus/tol-alkeet/kuvia

    Toinen näppärä käyttö aliaksille on muuttaa olemassa olevia komentoja toimimaan haluamallaan tavalla. Esimerkiksi komento ```alias ls='ls -GFh'``` muuttaa ```ls```-komennon toiminnan siten, että siinä on aina liput ```-GFh``` päällä.




