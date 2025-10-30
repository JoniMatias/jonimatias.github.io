# Komentojen rakenne

Komentokehotteeseen kirjoitetaan komentoja, joita komentotulkki tulkitsee ja suorittaa. Komennot ovat tehokkaita työkaluja, jolla pääsee helposti kaikkiin tietokoneen asetuksiin ja helpompaan automaatioon.

Näitä komentorivin hyötyjä ei kuitenkaan voi saada käyttöönsä, ellei tunne aluksi komentorivin perusteita. Tällä sivulla käydään läpi miten komentorivin komentoja kirjoitetaan, ja mistä osasista ne koostuvat.

## Komentojen kirjoittaminen

Komennot koostuvat yleensä muutamasta perusosasesta. Komentoriville kirjoitetun komennon kuuluu aina alkaa komennon nimellä, ja sen jälkeen komennolle voidaan antaa lisämääreitä, kuten argumentteja, lippuja ja valintoja.

Komennon nimet ovat yleensä lyhyitä yhden sanan tai muutaman kirjaimen mittaisia. Tällainen on mm. kansion sisällön ruudulle tulostava ```dir``` (Windows) tai ```ls``` (Unix).

=== "Windows"
    !!! shell "cmd.exe: dir"
        C:\\System32\\jonrajal\\Koodi\\opetus\\jonimatias.github.io> <pop>dir</pop> <br>
        10/22/2025 &ensp; 10:34 AM &emsp; <DIR\> &emsp;&emsp; _site<br>
        10/16/2025 &ensp; 12:19 PM &emsp; <DIR\> &emsp;&emsp; .git<br>
        08/0842025 &ensp; 11:41 PM &emsp; <DIR\> &emsp;&emsp; .github<br>
        02/05/2025 &ensp; 04:52 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; .gitignore<br>
        02/05/2025 &ensp; 04:12 PM &emsp; <DIR\> &emsp;&emsp; .venv<br>
        02/18/2025 &ensp; 08:05 PM &emsp; <DIR\> &emsp;&emsp; .vscode<br>
        10/21/2025 &ensp; 12:03 PM &emsp; <DIR\> &emsp;&emsp; docs<br>
        02/05/2025 &ensp; 11:43 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; imgresize.bat<br>
        02/05/2025 &ensp; 09:31 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; index.html<br>
        02/14/2025 &ensp; 12:01 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; koodi_toc.bat<br>
        10/22/2025 &ensp; 12:58 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; mkdocs.yml<br>
        02/05/2025 &ensp; 10:34 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; README.md<br>
        10/22/2025 &ensp; 12:14 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; requirements.txt<br>
        02/05/2025 &ensp; 11:41 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; test.bat<br>
        02/05/2025 &ensp; 11:41 PM &emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; vidresize.bat<br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 9 File(s)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;12,5123,633 bytes<br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 6 Dir(s) &emsp;&emsp;512,523,436,852 bytes free

=== "bash"
    !!! shell "bash: ls"
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

Joillekin komennoille voi antaa tarkentavia käskyjä. Näitä voivat olla mm. käytettävän tiedosto nimi, lisäargumentit ja ohjausliput. Nämä kirjoitetaan komennon perään, yleensä vapaassa järjestyksessä.  Unix-koneilla komento ```ls``` tukee mm. lippua ```-A```, joka näyttää kaikki piilotetut tiedostot. Unix-pohjaisissa järjestelmissä tiedostot ovat piilotettuja, jos niiden nimi alkaa pisteellä. 
 
 
!!! shell "bash: ls -A"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ <pop>ls -A</pop> <br>
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


Jokaisen komennon argumentteihin ja toimintatapaan voi tutustua paremmin komennolla ```man```, joka avaa pyydetyn komennon manuaalin. Esimerkiksi ```man ls``` kertoo tarkemmin ls-komennon toiminnasta.


## Argumentit, lisävalinnat ja liput

Hyvin harvoin komentoja voidaan käyttää kuitenkaan sellaisenaan, yleensä käyttäjä haluaa muokata niiden toimintaa jotenkin, tai komento tarvitsee toimiakseen lisätietoa, kuten käytettävän tiedoston. Tällainen tieto siirretään komennolle ja ohjelmalle käyttäen argumentteja, lisävalintoja ja lippuja. Teknisesti nämä kategoriat eivät eroa toisistaan, mutta näitä jaotteluja voidaan pitää yleisinä sääntöinä. Näihinkin on poikkeuksia eri ohjelmien kesken, joten kannattaa tutustua niiden toimintatapoihin.

Kaikki nämä tiedot kirjoitetaan komennon nimen perään komentokehotteeseen. Komentorivitulkit siis odottavat komentoja yleensä muodossa:

```komento --valinta parametri --lippu --valinta2 parametri argumentti```

Lippuja, valintoja ja argumentteja voi olla niin paljon kuin käyttäjä niitä haluaa laittaa, kunhan komento tukee niitä kaikkia. Yleisellä tasolla näiden järjestyksellä ei ole väliä, mutta poikkeuksiakin on.

#### Argumentit

!!! shell "bash: argumentti"
    **C54W4KDHGK**:~ jonrajal$ cat <pop>index.html</pop><br>
    <!DOCTYPE html\><br>
    <html\><br>
        &emsp;&emsp;<head\><br>
            &emsp;&emsp;&emsp;&emsp;Yksinkertainen HTML-verkkosivu.<br>
        &emsp;&emsp;</head\><br>
        &emsp;&emsp;<body\><br>
            &emsp;&emsp;&emsp;&emsp;Terve, maailma!<br>
        &emsp;&emsp;</body\><br>
    </html\><br>

Argumentti on komennon vastaanottama tieto, yleensä tiedoston tai kansion nimi. Argumentti kirjoitetaan yleisesti suoraan komennon perään tai valintalistan loppuun. Jos komennon argumentiksi annetaan tiedosto, siihen yleensä riittää pelkkä tiedostonimi, ellei käsiteltävä tiedosto ole jossain muualla kuin aktiivisessa kansiossa. Muualla oleviin tiedostoihin pitää viitata joko [absoluuttisella polulla](../00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) tai jollain [suhteellisella polulla](../00-intro/01-tiedostot.md#tiedostopolut).

Argumenttien määrää ei ole mitenkään rajattu, ja jotkin ohjelman ja komennot edellyttävät useampia argumentteja. Tällaisessa tapauksessa argumenttien järjestyksellä voi olla suuri merkitys. Esimerkiksi tiedostoja kopioiva ```cp```-komento haluaa kaksi argumenttia: kopioitavan lähdetiedoston ja uuden luotavan tiedoston nimen. Lähdetiedosto pitää ```cp```komennolle antaa ensin ja uusi tiedosto sitten.

!!! shell "bash: kopioi usealla argumentilla"
    **C54W4KDHGK**:testikansio jonrajal$ cp foo.txt bar.txt


#### Lisävalinnat

Joidenkin komentojen suoritusta voi ohjata lisäksi komennolle annettavilla lisävalinnoilla. Lisävalinnat eroavat argumenteista siten, että ne alkavat yhdellä tai kahdella väliviivalla (```-``` tai ```--```). Toisin kuin argumentit, joita käytetään ohjelman syötteenä, lisävalinnoilla vain muutetaan ohjelman suoritustapaa. Toisin sanoen, lisävalinnat kertovat mitä ohjelma/komento tekee, ja argumentti kertoo mille se tehdään.

Lisävalinnan edessä olevien väliviivojen määrä perintenteisesti riippuu siitä, kuinka monimerkkinen tunnus lisävalinnalla on. Kaikilla yksikirjaimisilla lisävalinnoilla on usein vain yksi väliviiva, kuten vaikka aikaisemin ```ls -A```. Jos taas tunnus on pidempi sana, väliviivoja on yleensä kaksi, kuten vaikka [gitin](../02-ohjelmointi/02-git.md) komennossa ```git commit --message "Viesti"```. Joillakin valinnoilla voi olla myös pitkä ja lyhyt muoto, jossa lyhyt on yhden merkin mittainen ja tiivis, ja pitkä on kuvaavampi. Esimerkiksi tuo aikaisempi git-komennon voi kirjoittaa myös muodossa ```git commit -m "viesti"```.

Nämä säännöt ovat kuitenkin vain yleisiä käytänteitä, jotka voivat vaihdella ohjelmasta, komennosta ja tulkista toiseen.

Lisävalintoja on pääasiallisesti kahta erilaista: lippuja ja parametrillisiä lisävalintoja.

##### Liput

Liput (eng. *flag*) ovat yksinkertaisin lisävalintatyyppi, ja lähes kaikki ohjelmat ja komennot tukevat niitä. Muun muassa ylläolevassa ```ls -A``` esimerkissä käytettiin ```-A```-lippua. Se lippu muutti komennon suorittamista siten, että se tulostaa myös kaikkien piilotiedostojen nimet.

!!! shell "bash: git --version"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ git <pop>\-\-version</pop><br>
    git version 2.39.5 (Apple Git-154)

Yksinkertaisin lippu, joita lähes kaikki komentoriviohjelmat tukevat on ```--version``` tai jokin vastaava. Tällä lipulla ohjelma tulostaa ohjelman versionumeron, ja keskeyttää sen jälkeen ohjelman suorittamisen siten, ettei mitään muuta tapahdu.


##### Parametrilliset lisävalinnat

Jotkin lisävalinnat tarvitsevat itselleenkin syötteen tai muun tarkentavat arvon. Tällaisia parametrillisiä lisävalintoja on paljon. Parametrilliset lisävalinnat yleensä alkavat yhdellä tai kahdella väliviivalla, ja ovat muotoa ```komento --valinnannimi parametri```. Jotkin parametrilliset lisävalinnat voivat olla myös muotoa ```--valinnannimi=parametri```; kannattaa tutustua dokumentaatioon.

!!! shell "bash: find parametrillisellä lisävalinnalla"
    **C54W4KDHGK**:testikansio jonrajal$ find . <pop>-name "*.txt"</pop><br>
    ./foo.txt<br>
    ./bar.txt<br>
    ./alikansio/tiedosto.txt<br>

Ylläolevassa esimerkissä käytetään ```find```-komentoa etsimään aktiivisesta kansiosta kaikki tiedostot, joiden nimen lopussa on ```.txt```. Komento ottaa argumentikseen kansion mihin haku tehdään, joka tässä tapauksessa on aktiivinen kansio. Aktiivinen kansio merkitään aika merkillä ```.```.

Lisävalintana on esimerkissä on ```-name```, joka vaatii parametrikseen vapaamuotoisen merkkijonon. Lisävalinta muuttaa ```find```-komennon toiminnan siihen, että se käyttää tiedostojen nimeä hakuehtona. Samalla komennolle annettu parametri määrittelee minkälaista merkkijonoa tiedostojen nimistä etsitään. 



##### Lisävalintojen ketjuttaminen

Lisävalintoja ja lippuja voi laittaa myös useampia samalle komennolle. Komennolla ```ls``` on useita lippuja, mukaan lukien liput ```-A```, joka näyttää kaikki kansion piilotiedostot ja ```-l```, joka näyttää kaikkien listassa näkyvien tiedostojen oikeudet. Näitä lippuja voi käyttää komennon kanssa erikseen: ```ls -A``` näyttää kaikki aktiivisen kansion tiedostot ja piilotiedostot, ja ```ls -l``` näyttää kaikki aktiivisen kansion näkyvien tiedostojen oikeudet. Jos haluaisi nähdä myös piilotiedostojen oikeudet, komentoon voi laittaa molemmat liput peräjälkeen muodossa ```ls -A -l```. Usein tällaisia lyhyitä yhden kirjaimen lippuja voi myös ketjuttaa yhteen, jolloin myös ```ls -Al``` tekee saman asian.

!!! shell "bash: ls -Al"
    **C54W4KDHGK**:jonimatias.github.io jonrajal$ ls <pop>-Al</pop><br>
    total 104<br>
    drwxr-xr-x  17 jonrajal  staff   544B 22 Lok 10:34 <span class="bash-purple">_site/</span><br>
    -rw-r--r--@  1 jonrajal  staff    10K 16 Lok 14:17 .DS_Store<br>
    drwxr-xr-x  15 jonrajal  staff   480B 16 Lok 12:19 <span class="bash-purple">.git/</span><br>
    drwxr-xr-x   4 jonrajal  staff   128B  4 Elo 11:41 <span class="bash-purple">.github/</span><br>
    -rw-r--r--@  1 jonrajal  staff    34B  5 Hel  2025 .gitignore<br>
    drwxr-xr-x   7 jonrajal  staff   224B  5 Hel  2025 <span class="bash-purple">.venv/</span><br>
    drwxr-xr-x@  3 jonrajal  staff    96B 18 Hel  2025 <span class="bash-purple">.vscode/</span><br>
    drwxr-xr-x  12 jonrajal  staff   384B 21 Lok 12:03 <span class="bash-purple">docs/</span><br>
    -rwxr-xr-x   1 jonrajal  staff   335B  5 Hel  2025 imgresize.sh\*<br>
    -rw-r--r--   1 jonrajal  staff   268B  5 Hel  2025 index.html<br>
    -rwxr-xr-x@  1 jonrajal  staff   452B 14 Hel  2025 koodi_toc.command\*<br>
    -rw-r--r--@  1 jonrajal  staff   1,3K 22 Lok 12:58 mkdocs.yml<br>
    -rw-r--r--@  1 jonrajal  staff   154B  5 Hel  2025 README.md<br>
    -rw-r--r--@  1 jonrajal  staff    62B 20 Lok 12:14 requirements.txt<br>
    -rwxr-xr-x@  1 jonrajal  staff   171B  5 Hel  2025 test.command\*<br>
    -rwxr-xr-x   1 jonrajal  staff   361B  5 Hel  2025 vidresize.sh\*<br>

Tässä ```ls```-komennon tulosteessa tiedostojen ja kansioiden oikeudet on listattu rivin vasemmassa laidassa. Siinä on 10 merkkiä, joista ensimmäinen kertoo onko kyseessä kansio vai ei. Loput merkit kulkevat kolmen sarjoissa, jokainen sarja kuvastaa eri käyttäjäryhmien luku- kirjoitus- ja suoritusoikeuksia kyseiseen tiedostoon. Jos kiinnostaa enemmän, suosittelen tutustumaan [**man chmod**](https://man7.org/linux/man-pages/man1/chmod.1.html).



## Ohjelmien suorittaminen

Toisin kuin komennot, jotka on saatavilla kaikissa kansioissa, tiedostoihin ja ohjelmiin päästäkseen pitää tietää niiden sijainti. Tiedoston sijainnin voi joko antaa [absoluuttisena polkuna](../00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) tai suhteessa *aktiiviseen kansioon*. Aktiivinen kansio viittaa siihen paikkaan, jossa käyttäjä tällä hetkellä "on". Kaikki komennot ja ohjelmat oletuksena suoritetaan aktiivisessa kansiossa, ellei toisin määritetä. Aktiivista kansiota voi vaihtaa käyttämällä [```cd```-komentoa](03-bash-peruskomennot.md#cd).

Komennon suorittamisen sijasta komentorivillä voi myös käynnistää ohjelman. Ohjelman käynnistäminen tapahtuu samalla tavoin kuin komennon suorittaminen, mutta komennon sijasta ensimmäiseksi sanaksi kirjoitetaan suoritettavan ohjelman tiedostonimi tai -polku. Mikäli suoritettava ohjelmatiedosto on aktiivisessa kansiossa, pitää tiedostonimen eteen lisätä ```./```. Tämä siksi, etteivät komentojen nimet ole varattuja avainsanoja, eli tiedostot voi nimetä myös komentoja vastaavilla nimillä. *Bash* ei siis pysty erottamaan komentoa tiedostosta, ellei tiedostoa ole kirjoitettu polkumuodossa.

!!! shell "bash: Hello World"
    **C54W4KDHGK**:testikansio jonrajal$ ./hello <br>

Tämän lisäksi ohjelmien suorittaminen ei eroa komentorivillä muiden komentojen suorittamisesta mitenkään. Ohjelmille annetaan argumentit, lisävalinnat ja liput samalla tavoin kuin komennoilla.

