# Yleisimmät Windowsin komennot

Tässä listataan muutama yleisin *cmd.exe*n tukema komento. Samalla kerrotaan mitä ne tekevät ja miten niitä käytetään. Jos haluat tietää enemmän näiden toiminnasta, niin tarkemmat ohjeet saa ```help```-komennolla ja komennon ```/?```-lipulla.

Löydät Unixin *bash*in käyttämät peruskomennot alla olevasta linkistä. 

[:os-mac::os-linux: Bashin peruskomennot](bash-peruskomennot.md){ .md-button }


### Aktiivisen kansion hallinta

#### dir
[**dir reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir){ .man-link }

!!! shell "cmd.exe: dir"
	c:\TOL-alkeet&gt;<pop>dir</pop>
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	14.11.2025  18.06    &lt;DIR&gt;          .
	05.11.2025  14.00                 0 foo.txt
	13.11.2025  19.53            49 602 hello.exe
	13.11.2025  19.28    &lt;DIR&gt;          html-kansio
	14.11.2025  17.52    &lt;DIR&gt;          kuvia
	05.11.2025  14.02                 0 README.txt
	14.11.2025  17.26                 0 teksti.txt
	14.11.2025  18.11                24 test.txt
	13.11.2025  19.28    &lt;DIR&gt;          toinen
	14.11.2025  18.07                15 toinen.txt
	05.11.2025  14.03               528 toinen.zip
	05.11.2025  14.00                 0 uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 311 048 171 520 bytes free
eli (show) DIRectory (contents), näyttää aktiivisen hakemiston eli kansion sisältämät tiedostot ja alihakemistot. Ilman erillisiä lippuja ja valitsimia, dir näyttää oletuksena listauksessaan yleisten tietojen jälkeen tiedoston tai hakemiston viimeisimmän muokkauspäivämäärän ja -ajan, sen, että onko kyseessä hakemisto (```<dir>```-merkintä), tiedoston viemän koon levyltä (tavuina), sekä nimen mahdollisine tiedostopäätteineen. Lopussa näytetään yhteenvetotiedot tiedostojen ja hakemistojen lukumääristä ja kokonaiskoosta. Jatkossa tämän osion kohdalla käytetään yleensä muotoa ```dir /w``` asemoinnillisista syistä, ellei oletustulostusmuotoilu ei tarjoa jotain relevanttia tietoa, jota ```/w```-muoto ei niin selkeästi tarjoa.

#### cd
[**cd reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd){ .man-link }

!!! shell "cmd.exe: cd "
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 813 175 808 bytes free

	c:\TOL-alkeet><pop>cd kuvia</pop>

	c:\TOL-alkeet\kuvia>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet\kuvia

	[.]           [..]          kuva1.png     kuva1.psd     loppu.png     pakkaus.png
	               4 File(s)      1 236 665 bytes
	               2 Dir(s)  1 310 813 175 808 bytes free


eli Change Directory -komento vaihtaa aktiivisen kansion komennon parametrina annettuun kansioon. Toisin sanoen siirtää käyttökontekstin annettuun kansioon. Komento vaatii argumentiksi jonkin aktiivisessa kansiossa sijaitsevan kansion, tai kokonaisen tiedostopolun alkaen juuresta (```/```), kotihakemistosta (```~```) tai aktiivisesta kansiosta (```.```)

Kansiorakenteessa voi nousta ylöspäin, komennolla ```cd ..``` Tämä vaihtaa aktiivisen kansion nykyisen kansion yläkansioksi. 

!!! shell "cmd.exe: cd.."
	c:\TOL-alkeet\kuvia&gt;dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet\kuvia

	[.]           [..]          kuva1.png     kuva1.psd     loppu.png     pakkaus.png
	               4 File(s)      1 236 665 bytes
	               2 Dir(s)  1 310 813 175 808 bytes free

	c:\TOL-alkeet\kuvia&gt;<pop>cd..</pop>

	c:\TOL-alkeet&gt;dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 827 470 848 bytes free


Mikäli komennon antaa ilman mitään argumenttia, eli pelkästään ```cd```, niin komento käyttäytyy kuten bash-puolen [:os-mac::os-linux: ```pwd```](./bash-peruskomennot.md#pwd) , eli näyttää aktiivisen hakemiston sijainnin  [absoluuttisena polkuna](../../intro/tiedostot.md#täysi-eli-absoluuttinen-polku), eli reittinä tiedostojärjestelmän juuresta kansio kerrallaan aktiiviseen kansioon. Absoluuttinen polku eroaa sen kumppanista suhteellisesta polusta siten, että suhteellinen polku on aina suhteessa johonkin: yleensä joko aktiiviseen kansioon tai kotihakemistoon.

!!! shell "cmd.exe: cd "
	c:\TOL-alkeet\toinen><pop>cd</pop>
	c:\TOL-alkeet\toinen

Edellä olevasta voidaan toki myös huomata, että Windowsin komentokehote on oletuksena muotoiltu näyttämään aina aktiivisen hakemiston absoluuttisen polun, eli periaatteessa juuri saman tiedon minkä ```cd```ilman argumentteja näyttää.

### Tiedostojen hallinta

#### del
[**del reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/del){ .man-link }

!!! shell "cmd.exe: del"
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 576 603 136 bytes free

	c:\TOL-alkeet><pop>del foo.txt</pop>

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt      [toinen]		toinen.txt    toinen.zip    uusi.txt
	               7 File(s)         50 169 bytes
	               4 Dir(s)  1 310 576 599 040 bytes free

eli delete file. Komento poistaa argumenttina annetun tiedoston. ```del``` ei tee minkäänlaista tarkistusta tai varmistusta poistaessaan tiedoston.

Kuten kaikki komentorivin poistokomennot, ```del``` ei käytä roskakoria. Kaikki tuhotut kansiot ja tiedostot häviävät kerralla, eikä niitä voi saada takaisin. **Ole siis varovainen tämän komennon kanssa**.


#### move
[**move reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/move){ .man-link }

!!! shell "cmd.exe: move"
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 575 665 152 bytes free

	c:\TOL-alkeet><pop>move foo.txt kuvia</pop>
	        1 file(s) moved.

	c:\TOL-alkeet>cd kuvia

	c:\TOL-alkeet\kuvia>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet\kuvia

	[.]           [..]          foo.txt       kuva1.png     kuva1.psd     loppu.png     pakkaus.png
	               5 File(s)      1 236 665 bytes
	               2 Dir(s)  1 310 575 542 272 bytes free
eli siirrä (tiedosto). Tätä komentoa voi käyttää tiedoston siirtämiseen. Komento tarvitsee kaksi parametria: siirrettävän tiedoston nykyisen sijainnin ja tulevan sijainnin. Komento siirtää annetun tiedoston uuteen sijaintiin.

#### copy
[**copy reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/copy){ .man-link }

!!! shell "cmd.exe: copy "
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt	[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 575 534 080 bytes free

	c:\TOL-alkeet><pop>copy foo.txt bar.txt</pop>
	        1 file(s) copied.

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           bar.txt       foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
	               9 File(s)         50 169 bytes
	               4 Dir(s)  1 310 575 509 504 bytes free
Komento ottaa vastaan kaksi tiedostoa argumentteina. Ensimmäinen tiedosto pitää olla olemassa oleva tiedosto, jonka sisältö kopioidaan sellaisenaan toiseen tiedostoon. Jos toisena argumenttina annettua tiedostoa ei ole olemassa, niin se luodaan, muuten ```copy``` kysyy, että korvataanko tiedosto uudella. Kannattaa siis olla tarkkana, ettei tällä tuhoa olemassa olevia tiedostoja.

#### xcopy
[**xcopy reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/xcopy){ .man-link }

=== "xcopy toinen kolmas"
	!!! shell "cmd.exe: xcopy"
		c:\TOL-alkeet>dir /w
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet

		[.]           bar.txt       foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
		               9 File(s)         50 169 bytes
		               4 Dir(s)  1 310 575 509 504 bytes free

	    c:\TOL-alkeet&gt;<pop>xcopy toinen kolmas</pop>
		Does kolmas specify a file name
		or directory name on the target
		(F = file, D = directory)? d
		toinen\teksti.txt
		toinen\toinen.txt
		toinen\uusi.txt
		3 File(s) copied

		c:\TOL-alkeet&gt;dir
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet

		14.11.2025  20.10    &lt;DIR&gt;          .
		05.11.2025  14.00                 0 bar.txt
		05.11.2025  14.00                 0 foo.txt
		13.11.2025  19.53            49 602 hello.exe
		13.11.2025  19.28    &lt;DIR&gt;          html-kansio
		14.11.2025  20.10<pop>    &lt;DIR&gt;          kolmas</pop>
		14.11.2025  20.06    &lt;DIR&gt;          kuvia
		05.11.2025  14.02                 0 README.txt
		14.11.2025  17.26                 0 teksti.txt
		14.11.2025  18.11                24 test.txt
		14.11.2025  20.04    &lt;DIR&gt;          toinen
		14.11.2025  18.07                15 toinen.txt
		05.11.2025  14.03               528 toinen.zip
		05.11.2025  14.00                 0 uusi.txt
		               9 File(s)         50 169 bytes
		               5 Dir(s)  1 310 574 723 072 bytes free

		c:\TOL-alkeet&gt;cd kolmas

		c:\TOL-alkeet\kolmas&gt;dir /w
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet\kolmas

		[.]          [..]         teksti.txt   toinen.txt   uusi.txt
		               3 File(s)              0 bytes
		               2 Dir(s)  1 310 574 718 976 bytes free

=== "copy toinen kolmas"

	Miten käy, jos samaa yritetään tehdä pelkällä ```copy```:lla?
	!!! shell "cmd.exe: copy"
		c:\TOL-alkeet&gt;dir /w
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet

		[.]           bar.txt       foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
		               9 File(s)         50 169 bytes
		               4 Dir(s)  1 310 575 509 504 bytes free

		c:\TOL-alkeet&gt;<pop>copy toinen kolmas</pop>
		toinen\teksti.txt
		toinen\toinen.txt
		toinen\uusi.txt
		        1 file(s) copied.

		c:\TOL-alkeet&gt;dir
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet

		14.11.2025  20.09    &lt;DIR&gt;          .
		05.11.2025  14.00                 0 bar.txt
		05.11.2025  14.00                 0 foo.txt
		13.11.2025  19.53            49 602 hello.exe
		13.11.2025  19.28    &lt;DIR&gt;          html-kansio
		14.11.2025  20.09<pop>                 1 kolmas</pop>
		14.11.2025  20.06    &lt;DIR&gt;          kuvia
		05.11.2025  14.02                 0 README.txt
		14.11.2025  17.26                 0 teksti.txt
		14.11.2025  18.11                24 test.txt
		14.11.2025  20.04    &lt;DIR&gt;          toinen
		14.11.2025  18.07                15 toinen.txt
		05.11.2025  14.03               528 toinen.zip
		05.11.2025  14.00                 0 uusi.txt
		              10 File(s)         50 170 bytes
		               4 Dir(s)  1 310 575 243 264 bytes free

		c:\TOL-alkeet&gt;cd kolmas
		<pop>The directory name is invalid.</pop>

	Toisin sanoen, copy ei ymmärrä tehdä kohteesta hakemistoa, vaan koettaa kopioida kolmea tiedostoa yhdeksi, mikä onnistuu vaihtelevan huonoin tuloksin.

eli eXtended copy. Komento on monipuolisempi kuin pelkkä ```copy```, ja tukee esim. kokonaisten hakemistojen ja hakemistorakenteiden kopiointia kerralla. Kaiken mitä ```copy``` tekee, pystyy tekemään myös ```xcopy```:lla, ja sen lisäksi paljon muutakin.

#### ren
[**ren reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ren){ .man-link }

!!! shell "cmd.exe: ren "
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           foo.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 572 773 376 bytes free

	c:\TOL-alkeet><pop>ren foo.txt bar.txt</pop>

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           bar.txt       hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt		[toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 169 bytes
	               4 Dir(s)  1 310 572 761 088 bytes free

eli rename. Komento ottaa kaksi argumenttia, uudelleen nimettävän tiedoston (polun ja-) nimen, sekä tiedostolle annettavan uuden nimen. 

### Kansioiden hallinta

#### mkdir / md
[**mkdir reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mkdir){ .man-link }

!!! shell "cmd.exe: mkdir"
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt      [toinen]		toinen.txt    toinen.zip    uusi.txt
	               7 File(s)         50 169 bytes
	               4 Dir(s)  1 310 572 142 592 bytes free

	c:\TOL-alkeet><pop>mkdir uusi_kansio</pop>

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt      [toinen]		toinen.txt    toinen.zip    uusi.txt      [uusi_kansio]
	               7 File(s)         50 169 bytes
	               5 Dir(s)  1 310 571 614 208 bytes free

eli MaKe DIRectory. Komento luo uuden kansion argumenttina annetun nimisen kansion aktiiviseen kansioon. Argumentiksi voidaan antaa myös polku, jolloin kansio luodaan polun päähän, ja kaikki välissä olevat hakemistot joita ei vielä ole luodaan myös.

!!! shell "cmd.exe: mkdir foo\bar"
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt    test.txt
	[toinen]      toinen.txt    toinen.zip    uusi.txt      [uusi_kansio]
	               7 File(s)         50 169 bytes
	               5 Dir(s)  1 310 519 214 080 bytes free

	c:\TOL-alkeet><pop>mkdir foo\bar</pop>

	c:\TOL-alkeet>tree
	Folder PATH listing
	Volume serial number is 1028-66AE
	C:.
	├───foo
	│   └───bar
	├───html-kansio
	├───kuvia
	├───toinen
	└───uusi_kansio

	c:\TOL-alkeet>cd foo\bar

	c:\TOL-alkeet\foo\bar>

#### rmdir / rd
[**rmdir reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/rmdir){ .man-link }

!!! shell "cmd.exe: rmdir "
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           [foo]         hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	  test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt      [uusi_kansio]
	               7 File(s)         50 169 bytes
	               6 Dir(s)  1 310 518 542 336 bytes free

	c:\TOL-alkeet><pop>rmdir uusi_kansio</pop>

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           [foo]         hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	  test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
	               7 File(s)         50 169 bytes
	               5 Dir(s)  1 310 518 398 976 bytes free

eli ReMove DIRectory. Vastinkappale komennolle ```mkdir```. Komennolle annetaan parametriksi poistettavan kansion nimi, ja se kansio poistetaan järjestelmästä.

Komento poistaa oletuksena kansion vain, jos sen sisällä ei ole tiedostoja tai alikansioita. Kokonaisten hakemistorakenteiden ja hakemistojen joissa on tiedostoja poistamiseen käytetään valitsinta ```/s```
!!! shell "cmd.exe: rmdir /s"
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           [foo]         hello.exe     [html-kansio] [kuvia]       README.txt    teksti.txt	  test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
	               7 File(s)         50 169 bytes
	               5 Dir(s)  1 310 518 398 976 bytes free
	c:\TOL-alkeet><pop>rmdir foo /s</pop>
	foo, Are you sure (Y/N)? y

	c:\TOL-alkeet>tree
	Folder PATH listing
	Volume serial number is 1028-66AE
	C:.
	├───html-kansio
	├───kuvia
	└───toinen

	c:\TOL-alkeet>


Kuten kaikki komentorivin poistokomennot, ```rmdir``` ei käytä roskakoria. Kaikki tuhotut kansiot ja tiedostot häviävät kerralla, eikä niitä voi saada takaisin. **Ole siis varovainen tämän komennon kanssa**.

### Sisällön tulostaminen

#### echo
[**echo reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/echo){ .man-link }

!!! shell "cmd.exe: echo"
	c:\TOL-alkeet>echo Terve, komentorivi!
	Terve, komentorivi!

	c:\TOL-alkeet>

Tämä komento tulostaa vastaukseksi sille annetun argumentin. Se on näppärä [komentosarjojen](../../komentorivin-jatkoa/komentosarjat/index.md) kanssa, jos haluaa saada tekstiä tulostettua näytölle. 

Tämän komennon toinen käyttötapa on komentosarjatiedostojen alussa oleva ```@ECHO OFF```-rivi, mikä aiheuttaa komentojen suorittamisen  komentosarjatiedostosta ilman, että niitä kirjoitetaan näkyville komentokehoteikkunaan.

=== "@ECHO OFF komentosarjan alussa"
	!!! shell "cmd.exe: @echo off"
		c:\TOL-alkeet>dir /w
		 Volume in drive C has no label.
		 Volume Serial Number is 1028-66AE

		 Directory of c:\TOL-alkeet

		[.]           hello.exe     [html-kansio] kopioi.bat    [kuvia]       README.txt    teksti.txt    test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
		               8 File(s)         50 265 bytes
		               4 Dir(s)  1 310 525 820 928 bytes free

		c:\TOL-alkeet>kopioi.bat
		        1 file(s) copied.
		        1 file(s) copied.
		Valmis!

		c:\TOL-alkeet>type kopioi.bat
		<pop>@ECHO OFF</pop>
		copy test.txt foo.txt
		copy foo.txt bar.txt
		echo Valmis!
		del bar.txt
		del foo.txt

=== "Ilman @ECHO OFF:ia"
	!!! shell "cmd.exe: @echo on"
		c:\TOL-alkeet>kopioi.bat

		c:\TOL-alkeet>copy test.txt foo.txt
		        1 file(s) copied.

		c:\TOL-alkeet>copy foo.txt bar.txt
		        1 file(s) copied.

		c:\TOL-alkeet>echo Valmis!
		Valmis!

		c:\TOL-alkeet>del bar.txt

		c:\TOL-alkeet>del foo.txt

		c:\TOL-alkeet>type kopioi.bat
		copy test.txt foo.txt
		copy foo.txt bar.txt
		echo Valmis!
		del bar.txt
		del foo.txt

#### type
[**type reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/type){ .man-link }

!!! shell "cmd.exe: type"
	c:\TOL-alkeet\html-kansio&gt;dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet\html-kansio

	[.]          [..]         index.html
	               1 File(s)            148 bytes
	               2 Dir(s)  1 310 524 243 968 bytes free

	c:\TOL-alkeet\html-kansio&gt;<pop>type index.html</pop>
	&lt;!DOCTYPE html&gt;
	&lt;html&gt;
	    &lt;head&gt;
	        Yksinkertainen HTML-verkkosivu.
	    &lt;/head&gt;
	    &lt;body&gt;
	        Terve, maailma!
	    &lt;/body&gt;
	&lt;/html&gt;

Komento tulostaa eli kirjoittaa (```type```) argumentiksi annetun tiedoston sisällön komentoriville. 

Jos komennolle antaa useamman tiedoston yhtä aikaa argumentiksi, se tulostaa molempien tiedostojen sisällön komentoriville, ja erottelee sisällöt tulostamalla väliin aina alkavan tiedoston nimen.

!!! shell "cmd.exe: type teksti.txt toinen.txt "
	c:\TOL-alkeet>type teksti.txt toinen.txt

	teksti.txt


	Tõmõ on tekstitiedoston sisõlt÷. Tõtõ kõytetõõn tol-alkeet-materiaalin esimerkkitiedostona.

	Tekstitiedosto sisõltõõ tekstiõ, kuten kirjaimia, numeroita ja muita erikoismerkkejõ.
	toinen.txt


	T├ñst├ñ alkaa toinen tekstitiedosto. T├ñm├ñnkin tiedoston sis├ñlt├Â on teksti├ñ


Tästä toiminnallisuudesta on hyötyä, kun alkaa käyttämään [tulosteen ohjausta](#tuloste-tiedostoon). Joka tapauksessa, ehkä huomaatkin, että skandit ja muut erikoismerkit eivät (aina) toimi kovin hyvin yhteen Windowsin komentokehotteen kanssa.

### Tuloste tiedostoon

[```echo```](#echo) ja [```type```](#type) ovat näppäriä komentoja jos haluaa saada tulostuksia tilapäisesti näkymään ruudulla. Joskus kuitenkin tulostuksen haluaa säilymään pidemmän aikaa, jolloin tuloste on hyvä tallentaa tiedostoon.

Tiedostoon tallentamisen voi tehdä maalaamalla komentokehotteen ikkunassa näkyvän tekstin, ja kopioimalla ja liittämällä tekstin tiedostoon käsin jonkin toisen ohjelman kautta. Tämä on kuitenkin työlästä ja aikaa vievää, joten eikö olisi parempi, jos sen voisi tulostaa suoraan tiedostoon?

Sitä varten *komentokehote* tarjoaa tulosteenohjausmerkit. Jos komennon lopettaa merkeillä ```>``` tai ```>>```, jonka jälkeen laitetaan tiedoston nimi, niin kaikki komennon tai ohjelman komentoriville tulostettava teksti kirjoitetaan annettuun tiedostoon. Jos tiedostoa ei ole olemassa, niin se luodaan. Ohjausmerkkejä käytetään muodossa ```komento > ohjattu_tiedosto``` (komennolle voi antaa normaalisti argumentteja, valitsimia ja parametreja, jotka kaikki tulevat ennen tulosteenohjausmerkkiä, ja tulosteenohjausmerkkinä voi käyttää jompaa kumpaa merkeistä samalla paikalla).

Jos ohjauksessa käytetään vain yhtä merkkiä (```>```), niin silloin tuloste korvaa annetun tiedoston sisällön. Jos taas merkkejä on kaksi (```>>```), niin tuloste lisätään tiedoston perään.

!!! shell "cmd.exe: > "
	c:\TOL-alkeet>type teksti.txt toinen.txt > uusi.txt

	teksti.txt



	toinen.txt



	c:\TOL-alkeet>type uusi.txt
	Tõmõ on tekstitiedoston sisõlt÷. Tõtõ kõytetõõn tol-alkeet-materiaalin esimerkkitiedostona.

	Tekstitiedosto sisõltõõ tekstiõ, kuten kirjaimia, numeroita ja muita erikoismerkkejõ.T├ñst├ñ alkaa toinen tekstitiedosto. T├ñm├ñnkin tiedoston sis├ñlt├Â on teksti├ñ

Edellä tiedostojen nimet tulostuvat näytölle, mutta sisällöt menevät uuteen tiedostoon. Kyseessä on käytännössä kaksi erillistä tulostusvirtaa, jotka molemmat on ohjattu normaalisti näytölle, mutta nyt toinen niistä ohjataan tiedostoon. Koko tuloste voidaan siis ohjata kerralla yhteen tiedostoon. Yksinkertaisimmillaan tätä voi käyttää kokonaan uuden tekstitiedoston luomiseen määritellyllä sisällöllä. ```echo``` toistaa sille annetun argumentin, mutta koska toistettu tuloste ohjataan tiedostoon, lopputuloksena on tiedosto, jonka sisältö on annettu argumentti. 

!!! shell "cmd.exe: echo > "
	c:\TOL-alkeet>echo Terve, tekstitiedosto! > uusi.txt

	c:\TOL-alkeet>type uusi.txt
	Terve, tekstitiedosto!


Kahden merkin versio lisää tulosteet tiedoston perään. Tällöin kaksi peräkkäistä komentoa voi kirjoittaa samaan tiedostoon.

!!! shell "cmd.exe: >> "
	c:\TOL-alkeet>type uusi.txt

	c:\TOL-alkeet>echo eka argumentti >> uusi.txt

	c:\TOL-alkeet>echo toka argumentti >> uusi.txt

	c:\TOL-alkeet>type uusi.txt
	eka argumentti
	toka argumentti

Jos taas yrittää käyttää yhtä merkkiä ```>``` siirtämiseen, niin uuden komennon tuloste korvaa tulostetiedoston sisällön kokonaan uudella tulosteella.

!!! shell "cmd.exe: > ylikirjoitus "
	c:\TOL-alkeet>type uusi.txt

	c:\TOL-alkeet>echo eka argumentti > uusi.txt

	c:\TOL-alkeet>echo toka argumentti > uusi.txt

	c:\TOL-alkeet>type uusi.txt
	toka argumentti

Yhtä tulosteenohjausmerkkiä ja ```type```-komentoa hyödyntämällä voidaan myös tarvittaessa jäljitellä bash-puolen ```touch```-komentoa, siten kun sitä yleisesti käytetään luomaan tyhjä tiedosto, mikäli käytetään kirjoitettavana sisältönä tyhjää ```NUL``` -sisältöä.

!!! shell "cmd.exe: type NUL > "
	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] kopioi.bat    [kuvia]       README.txt    teksti.txt	  test.txt      [toinen]      toinen.txt    toinen.zip
	               7 File(s)         50 500 bytes
	               4 Dir(s)  1 310 524 698 624 bytes free

	c:\TOL-alkeet><pop>type NUL > uusi.txt</pop>

	c:\TOL-alkeet>type uusi.txt

	c:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of c:\TOL-alkeet

	[.]           hello.exe     [html-kansio] kopioi.bat    [kuvia]       README.txt    teksti.txt	  test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 500 bytes
	               4 Dir(s)  1 310 524 637 184 bytes free




### Muita komentoja
 
#### help / /?
[**help reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/help){ .man-link }
=== " help "
	!!! shell "cmd.exe: help "
		c:\TOL-alkeet><pop>help</pop>
		For more information on a specific command, type HELP command-name
		ASSOC          Displays or modifies file extension associations.
		ATTRIB         Displays or changes file attributes.
		BREAK          Sets or clears extended CTRL+C checking.
		BCDEDIT        Sets properties in boot database to control boot loading.
		CACLS          Displays or modifies access control lists (ACLs) of files.
		CALL           Calls one batch program from another.
		CD             Displays the name of or changes the current directory.
		CHCP           Displays or sets the active code page number.
		CHDIR          Displays the name of or changes the current directory.
		CHKDSK         Checks a disk and displays a status report.
		CHKNTFS        Displays or modifies the checking of disk at boot time.
		CLS            Clears the screen.
		CMD            Starts a new instance of the Windows command interpreter.
		COLOR          Sets the default console foreground and background colors.
		...
		WMIC           Displays WMI information inside interactive command shell.

		For more information on tools see the command-line reference in the online help.
=== " help xcopy"
	!!! shell "cmd.exe: help xcopy "
		c:\TOL-alkeet><pop>help xcopy</pop>
		Copies files and directory trees.

		XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]
		                           [/C] [/I] [/-I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T]
		                           [/U] [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/B] [/J]
		                           [/EXCLUDE:file1[+file2][+file3]...] [/COMPRESS]

		  source       Specifies the file(s) to copy.
		  destination  Specifies the location and/or name of new files.
		  /A           Copies only files with the archive attribute set,
		               doesn't change the attribute.
		  /M           Copies only files with the archive attribute set,
		               turns off the archive attribute.
		  /D:m-d-y     Copies files changed on or after the specified date.
		               If no date is given, copies only those files whose
		               source time is newer than the destination time.
		  /EXCLUDE:file1[+file2][+file3]...
		               Specifies a list of files containing strings.  Each string
		               should be in a separate line in the files.  When any of the
		               strings match any part of the absolute path of the file to be
		               copied, that file will be excluded from being copied.  For
		               example, specifying a string like \obj\ or .obj will exclude
		               all files underneath the directory obj or all files with the
		               .obj extension respectively.
		  /P           Prompts you before creating each destination file.
		  /S           Copies directories and subdirectories except empty ones.
		  /E           Copies directories and subdirectories, including empty ones.
		               Same as /S /E. May be used to modify /T.
		  /V           Verifies the size of each new file.
		  /W           Prompts you to press a key before copying.
		  /C           Continues copying even if errors occur.
		  /I           If destination does not exist and copying more than one file,
		               assumes that destination must be a directory.
		  /-I          If destination does not exist and copying a single specified file,
		               assumes that destination must be a file.
		  /Q           Does not display file names while copying.
		  /F           Displays full source and destination file names while copying.
		  /L           Displays files that would be copied.
		  /G           Allows the copying of encrypted files to destination that does
		               not support encryption.
		  /H           Copies hidden and system files also.
		  /R           Overwrites read-only files.
		  /T           Creates directory structure, but does not copy files. Does not
		               include empty directories or subdirectories. /T /E includes
		               empty directories and subdirectories.
		  /U           Copies only files that already exist in destination.
		  /K           Copies attributes. Normal Xcopy will reset read-only attributes.
		  /N           Copies using the generated short names.
		  /O           Copies file ownership and ACL information.
		  /X           Copies file audit settings (implies /O).
		  /Y           Suppresses prompting to confirm you want to overwrite an
		               existing destination file.
		  /-Y          Causes prompting to confirm you want to overwrite an
		               existing destination file.
		  /Z           Copies networked files in restartable mode.
		  /B           Copies the Symbolic Link itself versus the target of the link.
		  /J           Copies using unbuffered I/O. Recommended for very large files.
		  /COMPRESS    Request network compression during file transfer where
		               applicable.
		  /SPARSE      Preserves the sparse state when copying a sparse file.

		The switch /Y may be preset in the COPYCMD environment variable.
		This may be overridden with /-Y on the command line.
=== " xcopy /? "
	!!! shell "cmd.exe: xcopy /? "
		c:\TOL-alkeet><pop>xcopy /?</pop>
		Copies files and directory trees.

		XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]
		                           [/C] [/I] [/-I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T]
		                           [/U] [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/B] [/J]
		                           [/EXCLUDE:file1[+file2][+file3]...] [/COMPRESS]

		  source       Specifies the file(s) to copy.
		  destination  Specifies the location and/or name of new files.
		  /A           Copies only files with the archive attribute set,
		               doesn't change the attribute.
		  /M           Copies only files with the archive attribute set,
		               turns off the archive attribute.
		  /D:m-d-y     Copies files changed on or after the specified date.
		               If no date is given, copies only those files whose
		               source time is newer than the destination time.
		  /EXCLUDE:file1[+file2][+file3]...
		               Specifies a list of files containing strings.  Each string
		               should be in a separate line in the files.  When any of the
		               strings match any part of the absolute path of the file to be
		               copied, that file will be excluded from being copied.  For
		               example, specifying a string like \obj\ or .obj will exclude
		               all files underneath the directory obj or all files with the
		               .obj extension respectively.
		  /P           Prompts you before creating each destination file.
		  /S           Copies directories and subdirectories except empty ones.
		  /E           Copies directories and subdirectories, including empty ones.
		               Same as /S /E. May be used to modify /T.
		  /V           Verifies the size of each new file.
		  /W           Prompts you to press a key before copying.
		  /C           Continues copying even if errors occur.
		  /I           If destination does not exist and copying more than one file,
		               assumes that destination must be a directory.
		  /-I          If destination does not exist and copying a single specified file,
		               assumes that destination must be a file.
		  /Q           Does not display file names while copying.
		  /F           Displays full source and destination file names while copying.
		  /L           Displays files that would be copied.
		  /G           Allows the copying of encrypted files to destination that does
		               not support encryption.
		  /H           Copies hidden and system files also.
		  /R           Overwrites read-only files.
		  /T           Creates directory structure, but does not copy files. Does not
		               include empty directories or subdirectories. /T /E includes
		               empty directories and subdirectories.
		  /U           Copies only files that already exist in destination.
		  /K           Copies attributes. Normal Xcopy will reset read-only attributes.
		  /N           Copies using the generated short names.
		  /O           Copies file ownership and ACL information.
		  /X           Copies file audit settings (implies /O).
		  /Y           Suppresses prompting to confirm you want to overwrite an
		               existing destination file.
		  /-Y          Causes prompting to confirm you want to overwrite an
		               existing destination file.
		  /Z           Copies networked files in restartable mode.
		  /B           Copies the Symbolic Link itself versus the target of the link.
		  /J           Copies using unbuffered I/O. Recommended for very large files.
		  /COMPRESS    Request network compression during file transfer where
		               applicable.
		  /SPARSE      Preserves the sparse state when copying a sparse file.

		The switch /Y may be preset in the COPYCMD environment variable.
		This may be overridden with /-Y on the command line.


eli "apua"-komento, millä voi katsoa mitä komentoja on käytettävissä ja minkälainen on yksittäisen komennon muoto. Sama toiminto on yksittäiselle komennolle yleensä käytössä antamalla valitsin ```/?``` halutun komennon perään. Yleensä tietona on ainakin mitkä valitsimet on käytössä ja mitä ne tekevät, sekä komennon yleinen muoto (mihin kohtaan tulee mitkäkin argumentit, valitsimet, liput, parametrit, jne.)


#### cls
[**cls reference**](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cls){ .man-link }


=== "Ennen *cls*:ää"
	!!! shell "cmd.exe: xcopy /? more "
		c:\TOL-alkeet>xcopy /? | more
		Copies files and directory trees.

		XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]
		                           [/C] [/I] [/-I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T]
		                           [/U] [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/B] [/J]
		                           [/EXCLUDE:file1[+file2][+file3]...] [/COMPRESS]

		  source       Specifies the file(s) to copy.
		  destination  Specifies the location and/or name of new files.
		  /A           Copies only files with the archive attribute set,
		               doesn't change the attribute.
		  /M           Copies only files with the archive attribute set,
		               turns off the archive attribute.
		  /D:m-d-y     Copies files changed on or after the specified date.
		               If no date is given, copies only those files whose
		               source time is newer than the destination time.
		  /EXCLUDE:file1[+file2][+file3]...
		               Specifies a list of files containing strings.  Each string
		               should be in a separate line in the files.  When any of the
		               strings match any part of the absolute path of the file to be
		               copied, that file will be excluded from being copied.  For
		               example, specifying a string like \obj\ or .obj will exclude
		               all files underneath the directory obj or all files with the
		               .obj extension respectively.
		  /P           Prompts you before creating each destination file.
		  /S           Copies directories and subdirectories except empty ones.
		  /E           Copies directories and subdirectories, including empty ones.
		               Same as /S /E. May be used to modify /T.
		  /V           Verifies the size of each new file.
		  /W           Prompts you to press a key before copying.
		  /C           Continues copying even if errors occur.
		  /I           If destination does not exist and copying more than one file,
		               assumes that destination must be a directory.
		  /-I          If destination does not exist and copying a single specified file,
		               assumes that destination must be a file.
		  /Q           Does not display file names while copying.
		  /F           Displays full source and destination file names while copying.
		  /L           Displays files that would be copied.
		  /G           Allows the copying of encrypted files to destination that does
		               not support encryption.

		c:\TOL-alkeet>
=== "*cls*:n jälkeen"
	!!! shell "cmd.exe: cls"
		c:\TOL-alkeet>
		&nbsp;<br>
		&nbsp;<br>
		&nbsp;<br>
		&nbsp;<br>
		&nbsp;<br>
		&nbsp;<br>






eli CLear Screen. Komennolla voi tyhjentää komentorivi-ikkunan näkymän aiemmista tulostuksista ja komennoista, ja jättää näkyville vain uuden komentokehotteen. Hyödyllinen komento välillä, mikäli informaatioähky yllättää.



