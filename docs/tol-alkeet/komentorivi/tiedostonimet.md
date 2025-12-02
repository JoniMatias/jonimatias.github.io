# Tiedostonimet

Joskus vanhoina hyvinä aikoina, kun tietokoneen muisti mitattiin vain muutamissa tuhansissa tavuissa, tiedostojen nimet oli rajattu kahdeksaan merkkiin, ja mitään erikoismerkkejä niissä ei saanut olla. Niistä päivistä on kuitenkin jo kohta puolikas ihmisen elinikä, ja tietokoneet ovat kehittyneet runsaasti. Muistin lisääntyessä tiedostonimiä rajaavat säännöt ovat vapautuneet, ja nykyään tiedostot saa nimetä melkein millä tahansa nimellä, käyttäen melkein mitä tahansa merkkejä.

Joitain erikoistapauksia kuitenkin vielä on. Osa näistä johtuu vanhoista käytänteistä, joita ei ole päivitetty nykypäivään. Osa taas on teknisiä rajoitteita tai ratkaisuja, joita kehittäjät ovat suunnitellessaan pähkäilleet. Tällä sivulla esitellään muutama asia, joka tiedostonimistä on hyvä tietää; varsinkin komentoriviä käyttäessä.


## Isot ja pienet kirjaimet

Tietokoneet eroavat toisistaan miten ne käsittelevät isoja ja pieniä kirjaimia tiedostojen nimissä. Jos tiedostojärjestelmä erottaa isot kirjaimet toisistaan, niin tiedostot ```teksti.txt``` ja ```Teksti.txt``` ovat järjestelmän mielestä eri tiedostoja. Jos kirjainkokoa taas ei erotella, niin järjestelmä tulkitsee tiedostot saman nimisiksi, jolloin tiedostot eivät voi olla samassa kansiossa.

Erottelu ei ole täysin käyttöjärjestelmästä riippuvaista, vaan pikemminkin tallennusmedian ja sen käyttämän [tiedostojärjestelmän](https://fi.wikipedia.org/wiki/Tiedostoj%C3%A4rjestelm%C3%A4) mukaan. Pääasiallisesti kuitenkin <nowrap>:os-win: Windowsin</nowrap> oletuksena käyttämä NTFS ei erottele kirjainkokoja, kun taas <nowrap>:os-mac: MacOS:n</nowrap> APF ja <nowrap>:os-linux: Ubuntun</nowrap> ext3 erottelevat kirjainkoot. Erottelu voi kuitenkin vaihdella eri asemien, kovalevyjen ja tallennusmedioiden mukaan, eli tietokoneen sisäisen kovalevy voi erotella kirjaimet samalla kun koneeseen kytketty ulkoinen kovalevy ei tee niin.

Graafisen käyttöliittymän näkökulmasta kirjainkoon erottelulla ei ole suurta merkitystä. Lähinnä vain aina tiedostoa nimetessä pitää huomioida muidenkin tiedostojen nimet. Komentorivillä tällä on suurempi vaikutus, sillä kaikkien tiedostojen nimet pitää kirjoittaa siinä muodossa, kun tietokone ne tunnistaa.


## Välilyönnit

Tiedostonimissä saa olla välilyöntejä. Tämä on kuitenkin ristiriidassa komentotulkkien yleisen säännön kanssa, jonka mukaan [komennot, argumentit ja valinnat](03-bash-muoto.md#argumentit-lisävalinnat-ja-liput) erotetaan toisistaan välilyönneillä. Tämän vuoksi komento ```cat monisanainen tiedostonimi.txt``` yrittää avata tiedostoja nimeltä ```monisanainen``` ja ```tiedostonimi.txt```, ja sekoaa.

!!! shell "bash: cat monisanainen tiedostonimi.txt"
    **C54W4KDHGK**:testikansio jonrajal$ <pop>cat monisanainen tiedostonimi.txt</pop>
    cat: monisanainen: No such file or directory
    cat: tiedostonimi.txt: No such file or directory

Komentorivillä pitää siis kiertää nämä rajoitteet, ja kertoa tulkille tiedostonimen olevan monisanainen. Tähän on kaksi yleistä ratkaisua: tiedostonimen kääriminen lainausmerkkeihin tai pakomerkkien käyttö.

### Lainausmerkit

Komentorivi tunnistaa kaiken lainausmerkkien välissä olevan tekstin yhdeksi argumentiksi. Kun tiedostonimen aloittaa lainausmerkillä, ja lopettaa lainausmerkillä, niin tulkki siirtää tiedostonimen kokonaisena käynnistettävälle ohjelmalle tai komennolle.

!!! shell "bash: lainausmerkeillä"
    **C54W4KDHGK**:testikansio jonrajal$ <pop>cat "monisanainen tiedostonimi.txt"</pop>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


### Pakomerkit

Toinen tapa yhdistää välilyönnillä erotetut sanat yhdeksi argumentiksi on käyttämällä paettua välilyöntiä. [Pakomerkki](../glossaari.md#pakomerkki) vaihtaa sitä seuraavan merkin merkityksen muuksi kuin mitä se tavallisessa tekstimuodossaan olisi.

Komentotulkki erottaa aina argumentit toiseksi vain kohdatessaan tavallisen välilyönnin. Pakomerkin jälkeinen välilyönti tulkitaan argumentteja yhdistäväksi välilyönniksi.

:os-win: Windowsin cmd.exe käyttää sirkumfleksia ```^``` (eng. *caret*) pakomerkkinä, kun taas <nowrap>:os-mac::os-linux: bash</nowrap> käyttää kenoviivaa ```\```.

!!! shell "bash: pakomerkillä"
    **C54W4KDHGK**:testikansio jonrajal$ <pop>cat monisanainen\ tiedostonimi.txt</pop>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Tulkki oletuksena käyttää paettuja välilyöntejä tiedostojen nimissä, kun tiedostojen nimiä [täydennetään automaattisesti](#automaattinen-täydennys). Tästä voisi tulkita, että Bash tukisi paettuja välilyöntejä paremmin. Näin ei kuitenkaan aina ole.

??? info "Kehittyneempi esimerkki"
    Kannattaa huomioida, että [muuttujiin](../01.2-komentorivin-jatkoa/02.2-ohjausrakenteet/02-2-bash-rakenteet.md#muuttujat) tallennettava kenoviiva ```\``` paetaan heti muuttujaan asetettaessa. Tällöin tulevat komennot näkevät sen tilalla vain tavallisen välilyönnin.

    !!! shell "bash: pakomerkki muuttujassa"
        **C54W4KDHGK**:testikansio jonrajal$ muuttuja=monisanainen tiedosto.txt
        -bash: tiedosto.txt: command not found
        **C54W4KDHGK**:testikansio jonrajal$ muuttuja=monisanainen\ tiedosto.txt
        **C54W4KDHGK**:testikansio jonrajal$ echo $muuttuja
        monisanainen tiedosto.txt
        **C54W4KDHGK**:testikansio jonrajal$ <pop>cat $muuttuja</pop>
        cat: monisanainen: No such file or directory
        cat: tiedosto.txt: No such file or directory

    Muuttujia lukiessa kannattaa siis aina käyttää lainausmerkkejä ```"```. Niiden kanssa asiat menevät harvemmin pieleen.

    !!! shell "bash: lainausmerkit muuttujan kanssa"
        **C54W4KDHGK**:testikansio jonrajal$ muuttuja=monisanainen\ tiedosto.txt
        **C54W4KDHGK**:testikansio jonrajal$ echo $muuttuja
        monisanainen tiedosto.txt
        **C54W4KDHGK**:testikansio jonrajal$ <pop>cat "$muuttuja"</pop>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


### Muita ratkaisuja

Koska välilyönnit tuottavat komentorivilla harmaita hiuksia, useat komentorivin käyttäjät välttävät välilyöntejä tiedostojen nimissä. Yksinkertaisimmillaan kaikki tiedostot voi nimetä vain yhdellä sanalla, jolloin sanavälejä ei tarvita, mutta yleensä tiedoston nimen kannattaa olla kuvaavampi.

Monisanaisesta tiedostonimestä saa yksisanaisen merkitsemällä sanavälin jollain muulla tavalla kuin välilyönnillä. Yleisimpiä ratkaisuja siihen on mm.:

 - **PascalCase**, jossa jokaisen sanan ensimmäinen kirjain kirjoitetaan isolla.
 - **snake_case**, jossa jokainen sanaväli korvataan alaviivalla ```_```.
 - **kebab-case**, jossa jokainen sanaväli korvataa väliviivalla ```-```.

Jokainen saa valita tyylinsä itse, mutta valittu tyyli yleensä kertoo käyttäjästään jotain. *PascalCase* on yleensä ohjelmoijien suosiossa, *snake_case* komentorivivelhojen ja *kebab-case* verkkokehittäjien. Tämä johtuu vakiintuneista tavoista, joilla kunkin käyttäjäryhmän työkalut ja niiden dokumentaatio on perinteisesti yhdistänyt sanoja.

## Pistetiedostot

:os-mac::os-linux: Unix-järjestelmissä kaikki tiedostot, joiden nimi alkaa pisteellä piilotetaan käyttäjältä. Komentorivillä piilotiedostot saa näkyville komennolla ```ls -A```, ja graafisen käyttöliittymän puolella ne saadaan näkyville pikanäppäimellä <nowrap>:os-mac: <kbd>:key-shift: Shift</kbd>+<kbd>:key-cmd: Command</kbd>+<kbd>.</kbd></nowrap> tai <nowrap>:os-linux: <kbd>:key-ctrl: Control</kbd>+<kbd>H</kbd></nowrap>.

Vaikka tiedostot ovatkin piilotettuja, ne voidaan avata komentorivillä tavallisesti, eli kirjoittamalla niiden nimi (piste mukaan luettuna).  

!!! shell html-whitespace "bash: Piilotiedoston käyttö"
    **C54W4KDHGK**:tol-alkeet jonrajal$ ls<br>
        <span class="bash-table-element bash-purple">html-kansio/</span>
        <span class="bash-table-element bash-purple">kuvia/</span>
        <span class="bash-table-element bash-red">hello\*</span>
        <span class="bash-table-element">README.txt</span>
        <span class="bash-table-element">teksti.txt</span>
        <span class="bash-table-element">toinen.txt</span><br><br>
    <b>**C54W4KDHGK**</b>:tol-alkeet jonrajal$ ls -A<br>
        <span class="bash-table-element">.hidden.txt</span>
        <span class="bash-table-element bash-purple">html-kansio/</span>
        <span class="bash-table-element bash-purple">kuvia/</span>
        <span class="bash-table-element bash-red">hello\*</span>
        <span class="bash-table-element">README.txt</span>
        <span class="bash-table-element">teksti.txt</span>
        <span class="bash-table-element">toinen.txt</span><br><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ cat <opo>.hidden</pop><br>
    Tämä on piilotiedoston ".hidden.txt" sisältö.

:os-win: Windows-koneet eivät piilota pisteellä alkavia tiedostoja, minkä vuoksi muiden käyttöjärjestelmien koneilta siirretyissä kansiossa joskus näkyy ylimääräisiä tiedostoja. Yleisin näistä taitaa olla MacOS:n käyttämä ```.DS_Store```-tiedosto, jonka MacOS laittaa jokaiseen kansioon.


## Skandit ja erikoismerkit

Nykytietokoneet tukevat käytännössä koko ihmisten kirjoitustapojen kirjoa. Unicode tukee käytännössä kaikkia merkkejä, mitä ihmiskunta on koskaan halunnut painaa kirjaan tai verkkosivulle. 

Nykyiset käyttöjärjestelmät ja sitä kautta myös komentorivit tukevat Unicodea, sen kaikkia mahdollisia merkkejä. Tämän vuoksi on täysin ymmärrettävää, jos joku luulee ääkkösten käytön olevan täysin ongelmatonta tietokoneella.

Ongelmaksi kuitenkin muodostuu se, että Unicoden tukeminen ohjelmien sisällä on työläämpää kuin yksinkertaisen [ASCII-merkistön](../ascii.md#ascii-merkistö) tukeminen, jossa ei ole kuin englanninkielen käytössä olevat merkit. Siten monet komentorivillä käytettävät ohjelmat – joskus myös graafisetkin ohjelmat – eivät tue erikoismerkkejä.

Tämä tuottaa päänvaivaa aika ajoin, kun komentorivillä yrittää rakentaa näppärää automaatiota. Kaikki tuntuu toimivan, ja menevän oikein hyvin, kunnes yhtäkkiä vastaan tuleekin tiedosto, jossa on ääkkösiä, ja jokin yksi työvaihe automaatiossa pettää. Tällaisia ongelmia on nykypäivänä vähemmän kuin vielä 10-20 vuotta sitten, mutta niihin edelleen törmää varsinkin vanhoja ja vakiintuneita ohjelmia käyttäessä.

Potentiaalisten ongelmatilanteiden vähentämiseksi useat komentorivin käyttäjät välttävät siksi ääkkösten käyttöä tiedostojen nimissä.


## Automaattinen täydennys

Komentorivillä pitää aina muistaa komentojen nimet tai tiedostojen nimet, ja ne pitää kirjoittaa aina täysin oikeassa muodossa. Tämä tuottaa välillä ongelmia, kun yhdenkin kirjaimen kirjoittaminen väärin saa komentorivin valittamaan virheistä, tai pahimmassa tapauksessa tekemään jotain ihan väärää.

Tätä varten komentorivi tarjoaa automaattisen täydennyksen mahdollisuuden. Kun kirjoitat komennon tai aktiivisessa kansiossa olevan tiedostonimen muutaman ensimmäisen kirjaimen, voit painaa <kbd>:key-tab: Tab</kbd>-näppäintä, niin komentorivi kirjoittaa loput annetusta tekstistä. Jos samalla aloituksella on useampi vaihtoehto, niin komentorivi täydentää vain niin pitkälle, kunnes eriävä kohta löytyy.

Kun komentorivi huomaa useamman mahdollisen tiedostonimen tai komennon, on mahdollista painaa <kbd>:key-tab: Tab</kbd> kaksi kertaa nopeasti, jolloin komentorivi näyttää kaikki mahdolliset vaihtoehdot. Komentorivi pyrkii myös päättelemään kontekstista mitä ollaan täydentämässä. Ensimmäiseksi sanaksi se hyväksyy vain komentoja, kansioita tai suoritettavia tiedostoja, argumenteiksi vain kansioita ja mitä vain tiedostoja.

Automaattinen täydennys toimii myös polkujen kanssa. Jos ```tol-alkeet```-kansiossa aloittaa kirjoittamaan polkua ```cat ./html-kansio/ind``` ja sen jälkeen painaa <kbd>:key-tab: Tab</kbd>, niin komentorivi osaa täydentää polun muotoon ```cat ./html-kansio/index.html```.
