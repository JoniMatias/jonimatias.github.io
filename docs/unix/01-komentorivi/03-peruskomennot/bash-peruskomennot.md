# Bashin peruskomennot

Tässä listataan muutama yleisin *bashin* tukema komento, mitä ne tekevät ja miten niitä käytetään. Jos haluat tietää enemmän näiden toiminnasta, niin tarkemmat ohjeet saa ```man```-komennolla.

Löydät Windowsin *cmd.exe*n käyttämät peruskomennot alla olevasta linkistä. 

[Windowsin peruskomennot](windows-peruskomennot.md){ .md-button }

### Aktiivisen kansion hallinta

#### pwd 
[**man pwd**](https://man7.org/linux/man-pages/man1/pwd.1.html){ .man-link }

!!! shell "bash: pwd"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>pwd</pop>
    /Users/jonrajal/Koodi/web/jonimatias.github.io

eli print working directory. Näyttää aktiivisen kansion sijainnin [absoluuttisena polkuna](../00-intro/01-tiedostot.md#taysi-eli-absoluuttinen-polku), eli reittinä tiedostojärjestelmän juuresta kansio kerrallaan aktiiviseen kansioon. Absoluuttinen polku eroaa sen kumppanista suhteellisesta polusta siten, että suhteellinen polku on aina suhteessa johonkin: yleensä joko aktiiviseen kansioon tai kotihakemistoon.


#### ls 
[**man ls**](https://www.man7.org/linux/man-pages/man1/ls.1.html){ .man-link }

!!! shell html-whitespace "bash: ls"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>ls</pop><br>
    <span class="bash-table-element bash-purple">_site/</span>
    <span class="bash-table-element bash-purple">docs/</span>
    <span class="bash-table-element bash-red">imgresize.sh\*</span>
    <span class="bash-table-element">index.html</span>
    <span class="bash-table-element bash-red">koodi_toc.command*</span>
    <span class="bash-table-element">mkdocs.yml</span>
    <span class="bash-table-element">README.md</span>
    <span class="bash-table-element">requirements.txt</span>
    <span class="bash-table-element bash-red">test.command\*</span>
    <span class="bash-table-element bash-red">vidresize.sh\*</span>

eli list directory, näyttää aktiivisen kansion tiedostot ja alikansiot. Ilman muita valintoja tai lippuja, ```ls``` näyttää vain kaikkien tiedostojen nimet ja tiedostopäätteet. Komennon oletustulosteesta voi kuitenkin päätellä tiedostoista erilaisia asioita:

 - Niistä näkee tiedostojen tiedostopäätteen, eli tiedostotyypin.
 - Jos nimi loppuu kauttamerkkiin ```/```, niin kyseessä on kansio.
 - Jos nimen perässä on tähtimerkki ```*```, niin kyseessä on [suoritettava tiedosto](../01.2-komentorivin-jatkoa/02-komentosarjat.md).

Kuten tämän sivun esimerkeistä myös näkee, ```ls``` usein myös värjää erilaiset tiedostot eri väreillä. Tämä värjäys on kuitenkin pääte- ja tulkkikohtaista, joten kannattaa tutustua siihen, miten komento toimii omalla koneellasi.


#### cd 
[**man cd**](https://man7.org/linux/man-pages/man1/cd.1p.html){ .man-link }

!!! shell "cd"
    **C54W4KDHGK**:tol-alkeet jonrajal$ pwd
    /Users/jonrajal/Koodi/opetus/tol-alkeet
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>cd kuvia</pop>
    **C54W4KDHGK**:kuvia jonrajal$ pwd
    /Users/jonrajal/Koodi/opetus/tol-alkeet/kuvia
    **C54W4KDHGK**:kuvia jonrajal$

eli change directory -komento vaihtaa aktiivisen kansion komennon parametrina annettuun kansioon. Toisin sanoen siirtää käyttökontekstin annettuun kansioon. Komento vaatii argumentiksi jonkin aktiivisessa kansiossa sijaitsevan kansion, tai kokonaisen tiedostopolun alkaen juuresta (```/```), kotihakemistosta (```~```) tai aktiivisesta kansiosta (```.```).

Kansiorakenteessa voi nousta ylöspäin, komennolla ```cd ..```. Tämä vaihtaa aktiivisen kansion nykyisen kansion yläkansioksi. 

!!! shell "cd .."
    **C54W4KDHGK**:kuvia jonrajal$ pwd
    /Users/jonrajal/Koodi/opetus/tol-alkeet/kuvia
    **C54W4KDHGK**:kuvia jonrajal$ <pop>cd ..</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ pwd
    /Users/jonrajal/Koodi/opetus/tol-alkeet

Komennolle voi antaa myös polun, jolloin aktiivinen kansio vaihtuu kansioksi, joka löytyy polun päästä. Jos jokin kansio polussa on kirjoitettu väärin, mitään ei tapahdu.

!!! shell "cd polku"
    **C54W4KDHGK**:~ jonrajal$ pwd
    /Users/jonrajal/
    **C54W4KDHGK**:~ jonrajal$ <pop>cd Koodi/opetus/tol-alkeet</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ pwd
    /Users/jonrajal/Koodi/opetus/tol-alkeet


### Tiedostojen hallinta

#### touch
[**man touch**](https://man7.org/linux/man-pages/man1/touch.1.html){ .man-link }

!!! shell "bash: touch"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>touch uusitiedosto.txt</pop>

-komentoa pääasiallisesti käytetään uusien tiedostojen luomiseen. Jos ```touch```-komennolle antaa tiedoston nimen, jota ei vielä ole olemassa aktiivisessa kansiossa – tai polun tiedostoon jota ei vielä ole olemassa – komento luo uuden tyhjän tiedoston annetulla nimellä.

Komento on oikeasti tarkoitettu tiedostojen aikaleimojen muokkaamiseen, mutta se on harvinaisempi käyttötapaus.

#### rm
[**man rm**](https://man7.org/linux/man-pages/man1/rm.1.html){ .man-link }

!!! shell "bash: rm"
    **C54W4KDHGK**:testikansio jonrajal$ touch asd.txt
    **C54W4KDHGK**:testikansio jonrajal$ ls
    asd.txt
    **C54W4KDHGK**:testikansio jonrajal$ <pop>rm asd.txt</pop>
    **C54W4KDHGK**:testikansio jonrajal$ ls
    **C54W4KDHGK**:testikansio jonrajal$ 

eli remove file. Komento poistaa argumenttina annetun tiedoston. ```rm``` ei tee minkäänlaista tarkistusta tai varmistusta poistaessaan tiedoston.

Kuten kaikki komentorivin poistokomennot, ```rm``` ei käytä roskakoria. Kaikki tuhotut kansiot ja tiedostot häviävät kerralla, eikä niitä voi saada takaisin. Kannattaa siis olla varovainen tämän komennon kanssa.

#### cp
[**man cp**](https://man7.org/linux/man-pages/man1/cp.1.html){ .man-link }

!!! shell "bash: cp"
    **C54W4KDHGK**:testikansio jonrajal$ touch foo.txt
    **C54W4KDHGK**:testikansio jonrajal$ <pop>cp foo.txt bar.txt</pop>
    **C54W4KDHGK**:testikansio jonrajal$ ls
    bar.txt  foo.txt

eli copy. Komento ottaa vastaan kaksi tiedostoa argumentteina. Ensimmäinen tiedosto pitää olla olemassa oleva tiedosto, jonka sisältö kopiodaan sellaisenaan toiseen tiedostoon. Jos toisena argumenttina annettua tiedostoa ei ole olemassa, niin se luodaan, muuten ```cp``` korvaa tiedoston uudella. Kannattaa siis olla tarkkana, ettei tällä tuhoa olemassa olevia tiedostoja.


### Kansioiden hallinta

#### mkdir 
[**man mkdir**](https://man7.org/linux/man-pages/man1/mkdir.1.html){ .man-link }

!!! shell html-whitespace "bash: mkdir"
    **C54W4KDHGK**:testikansio jonrajal$ ls<br>
    <span class="bash-table-element">README.md</span>
    <span class="bash-table-element">requirements.txt</span><br>
    **C54W4KDHGK**:testikansio jonrajal$ <pop>mkdir uusi_kansio</pop><br>
    **C54W4KDHGK**:testikansio jonrajal$ ls<br>
    <span class="bash-table-element">README.md</span>
    <span class="bash-table-element">requirements.txt</span>
    <span class="bash-table-element bash-purple">uusi_kansio/</span>

eli make directory. Komento luo uuden kansion argumenttina annetun nimisen kansion aktiiviseen kansioon. Argumentiksi voidaan antaa myös polku, jolloin kansio luodaan polun päähän. ```mkdir```ei kuitenkaan voi luoda useampaa sisäkkäistä kansiota kerralla, ellei sille anneta lippua ```-p```.

!!! shell "bash: mkdir foo/bar"
    **C54W4KDHGK**:testikansio jonrajal$ <pop>mkdir foo/bar</pop>
    mkdir: foo: No such file or directory

!!! shell "bash: mkdir -p foo/bar"
    **C54W4KDHGK**:testikansio jonrajal$ <pop>mkdir -p foo/bar</pop>
    **C54W4KDHGK**:testikansio jonrajal$ tree
    .
    └── foo
        └── bar
    
    3 directories, 0 files

#### rmdir 
[**man rmdir**](https://man7.org/linux/man-pages/man1/rmdir.1.html){ .man-link }

!!! shell html-whitespace "rmdir"
    **C54W4KDHGK**:tol-alkeet jonrajal$ ls<br>
    <span class="bash-table-element bash-red">hello*</span>
    <span class="bash-table-element bash-purple">kuvia/</span>
    <span class="bash-table-element">teksti.txt</span>
    <span class="bash-table-element bash-purple">html-kansio/</span>
    <span class="bash-table-element">README.txt</span>
    <span class="bash-table-element">toinen.txt</span>
    <br><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ mkdir uusikansio<br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ ls<br>
    <span class="bash-table-element bash-red">hello*</span>
    <span class="bash-table-element bash-purple">kuvia/</span>
    <span class="bash-table-element">teksti.txt</span>
    <span class="bash-table-element bash-purple">html-kansio/</span>
    <span class="bash-table-element">README.txt</span>
    <span class="bash-table-element">toinen.txt</span>
    <span class="bash-table-element bash-purple"><pop>uusikansio/</pop></span>
    <br><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>rmdir uusikansio</pop><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ ls<br>
    <span class="bash-table-element bash-red">hello*</span>
    <span class="bash-table-element bash-purple">kuvia/</span>
    <span class="bash-table-element">teksti.txt</span>
    <span class="bash-table-element bash-purple">html-kansio/</span>
    <span class="bash-table-element">README.txt</span>
    <span class="bash-table-element">toinen.txt</span>
    <br>

eli remove directory. Vastinkappale komennolle ```mkdir```, joka poistaa kansion. Komennolle annetaan parametriksi poistettavan kansion nimi, ja se kansio sisältöineen poistetaan kovalevyltä.

Komento poistaa kansion vain, jos sen sisällä ei ole tiedostoja tai alikansioita. 

Kuten kaikki komentorivin poistokomennot, ```rmdir``` ei käytä roskakoria. Kaikki tuhotut kansiot ja tiedostot häviävät kerralla, eikä niitä voi saada takaisin. Kannattaa siis olla varovainen tämän komennon kanssa.

### Sisällön tulostaminen

#### echo 
[**man echo**](https://man7.org/linux/man-pages/man1/echo.1.html){ .man-link }

!!! shell "echo"
    jonrajal@C54W4KDHGK:~/testikansio$ <pop>echo Hello World!</pop>
    Hello World!

Tämä komento tulostaa vastaukseksi sille annetun argumentin. Näppärä [komentosarjojen](../01.2-komentorivin-jatkoa/02-komentosarjat.md) kanssa, jos haluaa saada tilannepäivityksiä. Ajatus on hyvinkin saman, kuin C-ohjelmointikielen ```printf()``` komennolla, vaikka muuttujien hallinta on hyvin erilainen.

#### cat 
[**man cat**](https://man7.org/linux/man-pages/man1/cat.1.html){ .man-link }

!!! shell "bash: cat index.html"
    **C54W4KDHGK**:~ jonrajal$ <pop>cat index.html</pop>
    <!DOCTYPE html\>
    <html\>
        <head\>
            Yksinkertainen HTML-verkkosivu.
        </head\>
        <body\>
            Terve, maailma!
        </body\>
    </html\>

Komennon nimi on lyhenne englanninkielen sanasta concatenate, eli yhdistää. ```cat``` tulostaa argumentiksi annetun tiedoston sisällön komentoriville. 

Komennon nimi tulee siitä, että sillä on helppo yhdistää useampia tiedostoja yhdeksi. Jos komennolle antaa useamman tiedoston yhtä aikaa argumentiksi, se tulostaa molempien tiedostojen sisällön komentoriville.

!!! shell "bash: cat teksti.txt toinen.txt"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>cat teksti.txt toinen.txt</pop>
    Tämä on tekstitiedoston sisältö. Tätä käytetään tol-alkeet-materiaalin esimerkkitiedostona.
    
    Tekstitiedosto sisältää tekstiä, kuten kirjaimia, numeroita ja muita erikoismerkkejä.Tästä alkaa toinen tekstitiedosto. Tämänkin tiedoston sisältö on tekstiä.

Tästä toiminnallisuudesta on vielä enemmän hyötyä, kun alkaa käyttämään [tulosteen ohjausta](#tuloste-tiedostoon).

### Tuloste tiedostoon

[```echo```](#echo) ja [```cat```](#cat) ovat näppäriä komentoja jos haluaa saada tulostuksia tilapäisesti näkymään ruudulla. Joskus kuitenkin tulostuksen haluaa säilymään pidemmän aikaa, jolloin tuloste on hyvä tallentaa tiedostoon.

Tiedostoon tallentamisen voi tehdä maalaamalla *päätteen* tekstin, ja kopioimalla ja liittämällä tekstin tiedostoon käsin. Tämä on kuitenkin työlästä ja aikaa vievää, joten eikö olisi parempi, jos sen voisi tulostaa suoraan tiedostoon.

Sitä varten *bash* tarjoaa tulosteenohjausmerkit. Jos komennon lopettaa merkeillä ```>``` tai ```>>```, jonka jälkeen laitetaan tiedoston nimi, niin kaikki komennon tai ohjelman komentoriville tulostettava teksti kirjoitetaan annettuun tiedostoon. Jos tiedostoa ei ole olemassa, niin se luodaan. Ohjausmerkkejä käytetään muodossa ```komento --valinnat argumentit >> ohjattu_tiedosto```.

Jos ohjauksessa käytetään vain yhtä merkkiä (```>```), niin silloin tuloste korvaa annetun tiedoston sisällön. Jos taas merkkejä on kaksi (```>>```), niin tuloste lisätään tiedoston perään.

!!! shell html-whitespace "bash: >"
    **C54W4KDHGK**:tol-alkeet jonrajal$ ls<br>
    <span class="bash-table-element">index.html</span>
    <span class="bash-table-element bash-purple">kuvia/</span>
    <span class="bash-table-element">README.txt</span>
    <span class="bash-table-element">teksti.txt</span>
    <span class="bash-table-element">toinen.txt</span>
    <br><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>cat teksti.txt toinen.txt > uusi.txt</pop><br>
    **C54W4KDHGK**:tol-alkeet jonrajal$ cat uusi.txt<br>
    Tämä on tekstitiedoston sisältö. Tätä käytetään tol-alkeet-materiaalin esimerkkitiedostona.<br>
    <br>
    Tekstitiedosto sisältää tekstiä, kuten kirjaimia, numeroita ja muita erikoismerkkejä.Tästä alkaa toinen tekstitiedosto. Tämänkin tiedoston sisältö on tekstiä.

Koko tuloste voidaan ohjata kerralla yhteen tiedostoon. Tämä on näppärä mm. ```cat``` komennon kanssa, koska siten sillä voi helposti yhdistää kahden tekstitiedoston sisällöt.


!!! shell "bash: echo tiedostoon"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>echo Hello World! > uusi.txt</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ cat uusi.txt
    Hello World!

Yksinkertaisimmillaan tätä voi käyttää kokonaan uuden tekstitiedoston luomiseen määritellyllä sisällöllä. ```echo``` toistaa sille annetun argumentin, mutta koska toistettu tuloste ohjataan tiedostoon, lopputuloksena on tiedosto, jonka sisältö on annettu argumentti. 


!!! shell "bash: peräkkäiset >>"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>echo eka argumentti >> uusi.txt</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>echo toka argumentti >> uusi.txt</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ cat uusi.txt
    eka argumenttitoka argumentti

Kahden merkin versio lisää tulosteet tiedoston perään. Tällöin kaksi peräkkäistä komentoa voi kirjoittaa samaan tiedostoon. 

!!! shell "bash: peräkkäiset >"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>echo eka argumentti > uusi.txt</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>echo toka argumentti > uusi.txt</pop>
    **C54W4KDHGK**:tol-alkeet jonrajal$ cat uusi.txt
    toka argumentti

Jos taas yrittää käyttää yhtä merkkiä ```>``` siirtämiseen, niin uuden komennon tuloste korvaa tulostetiedoston sisällön kokonaan uudella tulosteella.


### Muita komentoja

#### man 
[**man man**](https://man7.org/linux/man-pages/man1/man.1.html){ .man-link }

!!! shell "man echo"
    ECHO(1)                     General Commands Manual                    ECHO(1)
    
    NAME
        echo – write arguments to the standard output
    
    SYNOPSIS
        echo [-n] [string ...]
    
    DESCRIPTION
        The echo utility writes any specified operands, separated by single blank
        (‘ ’) characters and followed by a newline (‘\n’) character, to the
        standard output.<br>
        The following option is available:<br>
        -n    Do not print the trailing newline character.  This may also be
            achieved by appending ‘\c’ to the end of the string, as is done by
            iBCS2 compatible systems.  Note that this option as well as the
            effect of ‘\c’ are implementation-defined in IEEE Std 1003.1-2001
            (“POSIX.1”) as amended by Cor. 1-2002.  Applications aiming for
            maximum portability are strongly encouraged to use printf(1) to
            suppress the newline character.
    
    :

eli manuaali. Antamalla ```man```-komennolle argumentiksi ohjelman tai komennon nimen, pääte avaa kyseisen komennon manuaalin selattavaksi. Manuaali avautuu komentoriville, ja sitä voi selata nuoli-, page up ja page down -näppäimillä. Manuaali sulkeutuu painamalla Q-näppäintä näppäimistöltä. Jotkin käyttöjärjestelmät tukevat myös man-manuaalien avautumista erilliseen ikkunaan.

```man``` avaa manuaalin vain, jos pyydetyn ohjelman manuaali on asennettu koneelle. Ainakin kaikilla peruskomennoilla ja yleisimmillä ohjelmilla on jonkinlainen komentorivimanuaali olemassa. 

#### clear 
[**man clear**](https://man7.org/linux/man-pages/man1/clear.1.html){ .man-link }

=== "Ennen *clear*ia"
    !!! shell "bash: clear"
        käytetään tol-alkeet-materiaalin esimerkkitiedostona.
        
        Tekstitiedosto sisältää tekstiä, kuten kirjaimia, numeroita ja muita erikoismerkkejä.Tästä alkaa toinen tekstitiedosto. Tämänkin tiedoston sisältö on tekstiä.
        **C54W4KDHGK**:tol-alkeet jonrajal$ cat index.html
        <!DOCTYPE html\>
        <html\>
            <head\>
                Yksinkertainen HTML-verkkosivu.
            </head\>
            <body\>
                Terve, maailma!
            </body\>
        </html\>
        **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>clear</pop>

=== "*clear*in jälkeen"
    !!! shell html-whitespace "bash: *clear*in jälkeen"
        **C54W4KDHGK**:tol-alkeet jonrajal$
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>


tyhjentää komentorivin sisällön ja näyttää vain uuden komentokehotteen. Päätteen toteutuksesta riippuen se joko poistaa kaiken tekstisisällön ikkunasta, tai vain skrollaa ikkunaa alaspäin niin, että vain uusin komentokehote näkyy.

### sudo 
[man sudo](https://www.man7.org/linux/man-pages/man8/sudo.8.html){ .man-link }

Jotkin komennot vaativat käyttäjältä erikoisoikeuksia. Tällaiset toiminnot yleensä ovat tietoa tuhoavia, tietokoneen asetuksia muuttavia tai tietokoneen turvallisuutta vaarantavia toimia. Nämä komennot vaativat niiden ajamista ```sudo```-komennon kanssa.

Komennot siis ajetaan muodossa ```sudo komento --valinta```. Tämän jälkeen ```sudo``` kysyy vielä käyttäjän salasanaa, jos komento tarvitsee pääkäyttäjän oikeuksia. 

```sudo``` on turvallisuustoiminto nakkisormia vastaan. Se ei estä käyttäjää tekemästä mitään, mihin käyttäjällä ei olisi valmiiksi oikeuksia, eikä se rajaa käytössä olevia toimintoja pois niiltä, joiden ei sitä pitäisi tehdä. Sitä varten on erilliset käyttäjätilit ja -oikeudet. ```sudo``` suojelee käyttäjää tekemästä haitallisia toimia vahingossa. Ajatuksena on se että, jos komento vaatii ```sudo```-lisäkomennon, käyttäjän kannattaa miettiä kahdesti, ja varmistaa komennon tekevän juuri sen mitä hän haluaa sen tekevän.
