# Komentojen rakenne

Komentokehotteeseen kirjoitetaan komentoja, joita komentotulkki tulkitsee ja suorittaa. Komennot ovat tehokkaita työkaluja, jolla pääsee helposti kaikkiin tietokoneen asetuksiin ja helpompaan automaatioon.

Näitä komentorivin hyötyjä ei kuitenkaan voi saada käyttöönsä, ellei tunne aluksi komentorivin perusteita. Tällä sivulla käydään läpi miten komentorivin komentoja kirjoitetaan, ja mistä osasista ne koostuvat.

## Komentojen kirjoittaminen

Komennot koostuvat yleensä muutamasta perusosasesta. Komentoriville kirjoitetun komennon kuuluu aina alkaa komennon nimellä, ja sen jälkeen komennolle voidaan antaa lisämääreitä, kuten argumentteja, lippuja ja valintoja.

Komennon nimet ovat yleensä lyhyitä yhden sanan tai muutaman kirjaimen mittaisia. Tällainen on mm. kansion sisällön ruudulle tulostava :os-win:```dir``` tai :os-mac::os-linux:```ls```.

=== ":os-win: Windows"
    !!! shell "cmd.exe: dir"
        C:\\Users\\jonrajal\\Koodi\\opetus\\jonimatias.github.io> <pop>dir</pop>
        10/22/2025  10:34 AM   <DIR\>      _site
        10/16/2025  12:19 PM   <DIR\>      .git
        08/0842025  11:41 PM   <DIR\>      .github
        02/05/2025  04:52 PM              .gitignore
        02/05/2025  04:12 PM   <DIR\>      .venv
        02/18/2025  08:05 PM   <DIR\>      .vscode
        10/21/2025  12:03 PM   <DIR\>      docs
        02/05/2025  11:43 PM              imgresize.bat
        02/05/2025  09:31 PM              index.html
        02/14/2025  12:01 PM              koodi_toc.bat
        10/22/2025  12:58 PM              mkdocs.yml
        02/05/2025  10:34 PM              README.md
        10/22/2025  12:14 PM              requirements.txt
        02/05/2025  11:41 PM              test.bat
        02/05/2025  11:41 PM              vidresize.bat
                           9 File(s)       12,5123,633 bytes
                           6 Dir(s)    512,523,436,852 bytes free

=== ":os-mac::os-linux: bash"
    !!! shell html-whitespace "bash: ls"
        **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>ls</pop> <br>
        <span class="bash-table-element bash-purple">_site/</span>
        <span class="bash-table-element bash-purple">docs/</span>
        <span class="bash-table-element bash-red">imgresize.sh\*</span>
        <span class="bash-table-element">index.html</span>
        <span class="bash-table-element bash-red">koodi_toc.command\*</span>
        <span class="bash-table-element">mkdocs.yml</span>
        <span class="bash-table-element">README.md</span>
        <div class="bash-table-element">requirements.txt</div>
        <div class="bash-table-element bash-red">test.command\*</div>
        <div class="bash-table-element bash-red">vidresize.sh\*</div>

Joillekin komennoille voi antaa tarkentavia käskyjä. Näitä voivat olla mm. käytettävän tiedoston nimi, lisäargumentit ja ohjausliput. Tarkentavat käskyt kirjoitetaan komennon perään, yleensä vapaassa järjestyksessä. :os-win: Windows-ympäristön liput tai valitsimet kirjoitetaan yleensä komennon loppuun /-merkillä erotettuna. Esimerkiksi komento :os-win: ```dir```voi muuttaa tulostuksensa ns. leveään muotoon valitsimella ```/w```. :os-mac::os-linux: Unix-koneilla komento ```ls``` tukee mm. lippua ```-A```, joka näyttää kaikki piilotetut tiedostot. Unix-pohjaisissa järjestelmissä tiedostot ovat piilotettuja, jos niiden nimi alkaa pisteellä. 
 
=== ":os-win: Windows"
    !!! shell "cmd.exe: dir /w"
        C:\TOL-alkeet><pop>dir /w</pop>
        Volume in drive C has no label
        Volume Serial Number is 1286-3C3D

        Directory of C:\TOL-alkeet

        [.]           [..]          hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    [toinen]      toinen.txt    toinen.zip    uusi.txt
                       6 File(s)         49 137 bytes
                       5 Dir(s)  5 121 948 966 912 bytes free


=== ":os-mac::os-linux: bash"
    !!! shell html-whitespace "bash: ls -A"
        **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>ls -A</pop><br>
        <span class="bash-table-element bash-purple">_site/</span>
        <span class="bash-table-element bash-purple">.github/</span>
        <span class="bash-table-element bash-purple">.vscode/</span>
        <span class="bash-table-element">index.html</span>
        <span class="bash-table-element">mkdocs.yml</span>
        <span class="bash-table-element bash-red">test.command\*</span>
        <span class="bash-table-element">.DS_Store</span>
        <span class="bash-table-element">.gitignore</span>
        <span class="bash-table-element bash-purple">docs/</span>
        <span class="bash-table-element bash-red">koodi_toc.command\*</span>
        <span class="bash-table-element">README.md</span>
        <span class="bash-table-element bash-red">vidresize.sh\*</span>
        <span class="bash-table-element bash-purple">.git/</span>
        <span class="bash-table-element bash-purple">.venv/</span>
        <span class="bash-table-element bash-red">imgresize.sh\*</span>
        <span class="bash-table-element">requirements.txt</span>


Jokaisen komennon argumentteihin ja toimintatapaan voi tutustua paremmin komennolla [```man```](03-peruskomennot/bash-peruskomennot.md#man), joka avaa pyydetyn komennon manuaalin. Esimerkiksi ```man ls``` kertoo tarkemmin ls-komennon toiminnasta.


## Argumentit, lisävalinnat ja liput

Hyvin harvoin komentoja voidaan käyttää kuitenkaan sellaisenaan, yleensä käyttäjä haluaa muokata niiden toimintaa jotenkin, tai komento tarvitsee toimiakseen lisätietoa, kuten käytettävän tiedoston. Tällainen tieto siirretään komennolle ja ohjelmalle käyttäen argumentteja, lisävalintoja ja lippuja. Teknisesti nämä kategoriat eivät eroa toisistaan, mutta näitä jaotteluja voidaan pitää yleisinä sääntöinä. Näihinkin on poikkeuksia eri ohjelmien kesken, joten kannattaa tutustua niiden toimintatapoihin.

Kaikki nämä tiedot kirjoitetaan komennon nimen perään komentokehotteeseen. Komentorivitulkit siis odottavat komentoja yleensä muodossa:

```komento --valinta parametri --lippu --valinta2 parametri argumentti```

Lippuja, valintoja ja argumentteja voi olla niin paljon kuin käyttäjä niitä haluaa laittaa, kunhan komento tukee niitä kaikkia. Yleisellä tasolla näiden järjestyksellä ei ole väliä, mutta poikkeuksiakin on.

#### Argumentit
=== ":os-win: Windows"
    !!! shell "cmd.exe: argumentti"
        C:\TOL-alkeet\html-kansio>type index.html
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
            &lt;head&gt;
                Yksinkertainen HTML-verkkosivu.
            &lt;/head&gt;
            &lt;body&gt;
                Terve, maailma!
            &lt;/body&gt;
        &lt;/html&gt;
=== ":os-mac::os-linux: bash"
    !!! shell "bash: argumentti"
        **C54W4KDHGK**:~ jonrajal$ cat <pop>index.html</pop>
        <!DOCTYPE html\>
        <html\>
            <head\>
                Yksinkertainen HTML-verkkosivu.
            </head\>
            <body\>
                Terve, maailma!
            </body\>
        </html\>

Argumentti on komennon vastaanottama tieto, yleensä tiedoston tai kansion nimi. Argumentti kirjoitetaan yleisesti suoraan komennon perään tai valintalistan loppuun. Jos komennon argumentiksi annetaan tiedosto, siihen yleensä riittää pelkkä tiedostonimi, ellei käsiteltävä tiedosto ole jossain muualla kuin aktiivisessa kansiossa. Muualla oleviin tiedostoihin pitää viitata joko [absoluuttisella polulla](../00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) tai jollain [suhteellisella polulla](../00-intro/01-tiedostot.md#tiedostopolut).

Argumenttien määrää ei ole mitenkään rajattu, ja jotkin ohjelman ja komennot edellyttävät useampia argumentteja. Tällaisessa tapauksessa argumenttien järjestyksellä voi olla suuri merkitys. Esimerkiksi tiedostoja kopioiva <nowrap>:os-win: ```copy```</nowrap> <nowrap>:os-mac::os-linux: ```cp```</nowrap>-komento haluaa kaksi argumenttia: kopioitavan lähdetiedoston ja uuden luotavan tiedoston nimen. Lähdetiedosto pitää <nowrap>:os-win: ```copy```</nowrap> <nowrap>:os-mac::os-linux: ```cp```</nowrap>-komennolle antaa ensin ja uusi tiedosto sitten.

=== ":os-win: Windows"
    !!! shell "cmd.exe: kopioi usealla argumentilla"
        C:\TOL-alkeet>copy foo.txt bar.txt
        1 file(s) copied.
    
=== ":os-mac::os-linux: bash"
    !!! shell "bash: kopioi usealla argumentilla"
        **C54W4KDHGK**:testikansio jonrajal$ cp foo.txt bar.txt


#### Lisävalinnat

Joidenkin komentojen suoritusta voi ohjata lisäksi komennolle annettavilla lisävalinnoilla. Lisävalinnat eroavat argumenteista siten, että ne alkavat valintaa merkkaavalla merkillä. Usein <nowrap>:os-win: Windowsilla</nowrap> se on kauttaviiva ```/```; <nowrap>:os-mac::os-linux: *bashissa*</nowrap> käytetään käytännössä aina yhtä tai kahta väliviivaa (```-``` tai ```--```). Toisin kuin argumentit, joita käytetään ohjelman syötteenä, lisävalinnoilla vain muutetaan ohjelman suoritustapaa. Toisin sanoen, lisävalinnat kertovat mitä ohjelma/komento tekee, ja argumentti kertoo mille se tehdään.

Lisävalinnan edessä olevien väliviivojen määrä perinteisesti riippuu siitä, kuinka monimerkkinen tunnus lisävalinnalla on. Kaikilla yksikirjaimisilla lisävalinnoilla on usein vain yksi väliviiva, kuten vaikka aikaisemmin ```ls -A```. Jos taas tunnus on pidempi sana, väliviivoja on yleensä kaksi, kuten vaikka [gitin](../02-ohjelmointi/02-git.md) komennossa ```git commit --message "Viesti"```. Joillakin valinnoilla voi olla myös pitkä ja lyhyt muoto, jossa lyhyt on yhden merkin mittainen ja tiivis, ja pitkä on kuvaavampi. Esimerkiksi tuo aikaisempi git-komennon voi kirjoittaa myös muodossa ```git commit -m "viesti"```.

Nämä säännöt ovat kuitenkin vain yleisiä käytänteitä, jotka voivat vaihdella ohjelmasta, komennosta ja tulkista toiseen. Suoritettavan ohjelman kooditasolla valinnat ja argumentit eivät eroa toisistaan mitenkään.

Lisävalintoja on pääasiallisesti kahta erilaista: lippuja ja parametrillisiä lisävalintoja.

##### Liput

Liput (eng. *flag*) ovat yksinkertaisin lisävalintatyyppi, ja lähes kaikki ohjelmat ja komennot tukevat niitä. Muun muassa yllä olevassa ```ls -A``` esimerkissä käytettiin ```-A```-lippua. Lippu muutti komennon suorittamista siten, että se tulostaa myös kaikkien piilotiedostojen nimet.

Yksinkertaisin lippu, joita lähes kaikki komentoriviohjelmat tukevat on ```--version``` tai jokin vastaava. Tällä lipulla ohjelma tulostaa ohjelman versionumeron, ja keskeyttää sen jälkeen ohjelman suorittamisen siten, ettei mitään muuta tapahdu.

=== ":os-win: Windows"
    !!! shell "cmd.exe: git \-\-version"
        C:\TOL-alkeet>git <pop>\-\-version</pop>
        git version 2.33.1.windows.1

=== ":os-mac::os-linux: bash"
    !!! shell "bash: git \-\-version"
        **C54W4KDHGK**:jonimatias.github.io jonrajal$ git <pop>\-\-version</pop>
        git version 2.39.5 (Apple Git-154)



##### Parametrilliset lisävalinnat

Jotkin lisävalinnat tarvitsevat itselleenkin syötteen tai muun tarkentavat arvon. Tällaisia parametrillisiä lisävalintoja on paljon. Parametrilliset lisävalinnat yleensä alkavat yhdellä tai kahdella väliviivalla, ja ovat muotoa ```komento --valinnannimi parametri```. Jotkin parametrilliset lisävalinnat voivat olla myös muotoa ```--valinnannimi=parametri```; kannattaa tutustua dokumentaatioon.
=== ":os-win: Windows"
    !!! shell "cmd.exe: xcopy parametrillisellä lisävalinnalla"
        C:\TOL-alkeet>xcopy .\*.txt toinen <pop>/exclude:ohita.xcl</pop>
        C:foo.txt
        C:teksti.txt
        C:toinen.txt
        C:uusi.txt
        4 File(s) copied

    Yllä olevassa esimerkissä käytetään ```xcopy```-komentoa kopioimaan aktiivisesta kansiosta kaikki tiedostot, joiden nimen lopussa on ```.txt```, kansioon ```toinen```. Komento ottaa argumenteikseen lähdetiedoston/-tiedostojen/-kansion nimen, sekä kansion mihin lähdetiedostot kopioidaan. (Aktiivinen kansio merkitään aina merkillä ```.```)

    Lisävalintana on esimerkissä on ```/exclude```, joka vaatii parametrikseen tiedoston nimen, jossa on lista kopioinnista pois jätettävistä tiedostoista. Tällöin halutut tiedostot voidaan hypätä yli (esimerkin tapauksessa README.txt jätetään kopioimatta, koska tiedoston ohita.xcl sisältö on pelkästään rivi, jossa lukee ```README.txt```).
=== ":os-mac::os-linux: bash"
    !!! shell "bash: find parametrillisellä lisävalinnalla"
        **C54W4KDHGK**:testikansio jonrajal$ find . <pop>-name "*.txt"</pop>
        ./foo.txt
        ./bar.txt
        ./alikansio/tiedosto.txt

    Yllä olevassa esimerkissä käytetään ```find```-komentoa etsimään aktiivisesta kansiosta kaikki tiedostot, joiden nimen lopussa on ```.txt```. Komento ottaa argumentikseen kansion mihin haku tehdään, joka tässä tapauksessa on aktiivinen kansio. Aktiivinen kansio merkitään aina merkillä ```.```.

    Lisävalintana on esimerkissä on ```-name```, joka vaatii parametrikseen vapaamuotoisen merkkijonon. Lisävalinta muuttaa ```find```-komennon toiminnan siihen, että se käyttää tiedostojen nimeä hakuehtona. Samalla komennolle annettu parametri määrittelee minkälaista merkkijonoa tiedostojen nimistä etsitään. 



##### Lisävalintojen ketjuttaminen

Lisävalintoja ja lippuja voi laittaa myös useampia samalle komennolle. 
=== ":os-win: Windows"
    Esimerkiksi komennolla ```dir``` on useita lippuja, mukaan lukien liput ```/p```, joka keskeyttää tulostuksen ja odottaa käyttäjän näppäimen painallusta jatkaakseen, mikäli tulostus on pidempi kuin näytölle mahtuu, ja ```/O```, joka järjestää tulostettavat tiedot parametrina annettavan tiedon mukaisesti, esimerkissä ```-D``` on käänteisesti (```-```) tiedoston viimeisimmän muokkausajankohdan (```D```) mukainen järjestys. Huomaa, että Windows-puolella jokaisen lipun eteen pitää lisätä oma ```/```-merkkinsä, toisin kuin bash-puolella, jossa lippuja voi ketjuttaa yhden ```-```-merkin kanssa useita.
    !!! shell "os-win: cmd.exe dir /w/p/O-D"
        C:\TOL-alkeet>dir <pop>/w/p/O-D</pop>
         Volume in drive C has no label.
         Volume Serial Number is 1028-66AE

         Directory of C:\TOL-alkeet

        [.]           [toinen]
        [kuvia]       [html-kansio]
        ohita.xcl     toinen.zip
        README.txt    uusi.txt
        toinen.txt    foo.txt
        teksti.txt    hello.exe
                       8 File(s)         49 147 bytes
        Press any key to continue . . .
                       4 Dir(s)  1 313 433 563 136 bytes free

=== ":os-mac::os-linux: bash"
    Komennolla ```ls``` on useita lippuja, mukaan lukien liput ```-A```, joka näyttää kaikki kansion piilotiedostot ja ```-l```, joka näyttää kaikkien listassa näkyvien tiedostojen oikeudet. Näitä lippuja voi käyttää komennon kanssa erikseen: ```ls -A``` näyttää kaikki aktiivisen kansion tiedostot ja piilotiedostot, ja ```ls -l``` näyttää kaikki aktiivisen kansion näkyvien tiedostojen oikeudet. Jos haluaisi nähdä myös piilotiedostojen oikeudet, komentoon voi laittaa molemmat liput peräjälkeen muodossa ```ls -A -l```. Usein tällaisia lyhyitä yhden kirjaimen lippuja voi myös ketjuttaa yhteen, jolloin myös ```ls -Al``` tekee saman asian.

    !!! shell "bash: ls -Al"
        **C54W4KDHGK**:jonimatias.github.io jonrajal$ ls <pop>-Al</pop>
        total 104
        drwxr-xr-x  17 jonrajal  staff   544B 22 Lok 10:34 <span class="bash-purple">_site/</span>
        -rw-r--r--@  1 jonrajal  staff    10K 16 Lok 14:17 .DS_Store
        drwxr-xr-x  15 jonrajal  staff   480B 16 Lok 12:19 <span class="bash-purple">.git/</span>
        drwxr-xr-x   4 jonrajal  staff   128B  4 Elo 11:41 <span class="bash-purple">.github/</span>
        -rw-r--r--@  1 jonrajal  staff    34B  5 Hel  2025 .gitignore
        drwxr-xr-x   7 jonrajal  staff   224B  5 Hel  2025 <span class="bash-purple">.venv/</span>
        drwxr-xr-x@  3 jonrajal  staff    96B 18 Hel  2025 <span class="bash-purple">.vscode/</span>
        drwxr-xr-x  12 jonrajal  staff   384B 21 Lok 12:03 <span class="bash-purple">docs/</span>
        -rwxr-xr-x   1 jonrajal  staff   335B  5 Hel  2025 imgresize.sh\*
        -rw-r--r--   1 jonrajal  staff   268B  5 Hel  2025 index.html
        -rwxr-xr-x@  1 jonrajal  staff   452B 14 Hel  2025 koodi_toc.command\*
        -rw-r--r--@  1 jonrajal  staff   1,3K 22 Lok 12:58 mkdocs.yml
        -rw-r--r--@  1 jonrajal  staff   154B  5 Hel  2025 README.md
        -rw-r--r--@  1 jonrajal  staff    62B 20 Lok 12:14 requirements.txt
        -rwxr-xr-x@  1 jonrajal  staff   171B  5 Hel  2025 test.command\*
        -rwxr-xr-x   1 jonrajal  staff   361B  5 Hel  2025 vidresize.sh\*

    Tässä ```ls```-komennon tulosteessa tiedostojen ja kansioiden oikeudet on listattu rivin vasemmassa laidassa. Siinä on 10 merkkiä, joista ensimmäinen kertoo onko kyseessä kansio vai ei. Loput merkit kulkevat kolmen sarjoissa, jokainen sarja kuvastaa eri käyttäjäryhmien luku- kirjoitus- ja suoritusoikeuksia kyseiseen tiedostoon. Jos kiinnostaa enemmän, suosittelen tutustumaan [**man chmod**](https://man7.org/linux/man-pages/man1/chmod.1.html).



## Ohjelmien suorittaminen

Toisin kuin komennot, jotka on saatavilla kaikissa kansioissa, tiedostoihin ja ohjelmiin päästäkseen pitää tietää niiden sijainti. Tiedoston sijainnin voi joko antaa [absoluuttisena polkuna](../00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) tai suhteessa *aktiiviseen kansioon*. Aktiivinen kansio viittaa siihen paikkaan, jossa käyttäjä tällä hetkellä "on". Kaikki komennot ja ohjelmat oletuksena suoritetaan aktiivisessa kansiossa, ellei toisin määritetä. Aktiivista kansiota voi vaihtaa käyttämällä ```cd```-komentoa ([:os-win: Windows](./03-peruskomennot/windows-peruskomennot.md#cd) tai [:os-mac::os-linux: bash](./03-peruskomennot/bash-peruskomennot.md#cd)).

Komennon suorittamisen sijasta komentorivillä voi myös käynnistää ohjelman. Ohjelman käynnistäminen tapahtuu samalla tavoin kuin komennon suorittaminen, mutta komennon sijasta ensimmäiseksi sanaksi kirjoitetaan suoritettavan ohjelman tiedostonimi tai -polku. 
 
=== ":os-win: Windows"
    Kunhan tiedosto ei ole jonkin komennon niminen, niin aktiivisessa kansiossa olevan ohjelman voi käynnistää kirjoittamalla ohjelmatiedoston nimen.

    !!! shell "cmd.exe: Hello World .exe"
        C:\TOL-alkeet><pop>hello.exe</pop>

        Hello, World!
        Terve, maailma!
    
    Suoritettavan ohjelman tiedostonimen voi kirjoittaa myös ilman tiedostotarkenninta.

    !!! shell "cmd.exe: Hello World"
        C:\TOL-alkeet><pop>hello</pop>

        Hello, World!
        Terve, maailma!
        C:\TOL-alkeet>
=== ":os-mac::os-linux: bash"
    Mikäli suoritettava ohjelmatiedosto on aktiivisessa kansiossa, pitää tiedostonimen eteen lisätä ```./```. Tämä siksi, etteivät komentojen nimet ole varattuja avainsanoja, eli tiedostot voi nimetä myös komentoja vastaavilla nimillä. *Bash* ei siis pysty erottamaan komentoa tiedostosta, ellei tiedostoa ole kirjoitettu polkumuodossa.

    !!! shell "bash: Hello World"
        **C54W4KDHGK**:testikansio jonrajal$ ./hello
        Hello, World!
        Terve, maailma!

Tämän lisäksi ohjelmien suorittaminen ei eroa komentorivillä muiden komentojen suorittamisesta mitenkään. Ohjelmille annetaan argumentit, lisävalinnat ja liput samalla tavoin kuin komennoille.

## Päätteen kontrollointi

Joskus ohjelma tai komento ei sammu itsekseen käynnistymisen jälkeen. Tällaisia ovat mm. ```man```-manuaalikomento tai ```nano```-tekstinkäsittelyohjelma. Moniin tällaisiin ohjelmiin on yleensä ohjelmoitu tapa sammuttaa ne, mutta joskus se ei ole tarpeellista.

Joskus myös ohjelmassa on bugi, jonka takia se jää ikuiseen silmukkaan, eikä lopu ikinä. Joskus taas voit huomata käynnistäneesi väärän ohjelman, ja haluat sammuttaa sen ennen kuin se ehtii tehdä liikaa tuhoja.

Näitä ongelmia varten on olemassa näppäinyhdistelmä <nowrap><kbd>^ Control</kbd>+<kbd>c</kbd></nowrap>. Kun tätä näppäinyhdistelmää painetaan, :os-win: *komentokehote* :os-mac::os-linux: *bash* sammuttaa tällä hetkellä suorituksen alaisen ohjelman heti. Se ei jää kyselemään tai odottamaan käyttäjältä lisäsyötteitä, ohjelma vaan keskeytetään suoraan siihen, ja sen toiminta jätetään kesken.
