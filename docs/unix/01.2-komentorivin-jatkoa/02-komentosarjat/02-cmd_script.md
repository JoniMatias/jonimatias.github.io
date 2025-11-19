# Windowsin BAT-komentosarjat

Komentosarjoja kutsutaan Windows-puolella yleensä tiedostopäätteensä mukaisesti bat-tiedostoiksi, joka juontaa nimensä siitä miten komentosarjoja suoritetaan: yhdessä erässä (engl. **bat**ch) useampi komento kerrallaan. Suomeksi puhutaan virallisemmin *eräajosta*. Yleensä komentosarjoilla pyritään automatisoimaan toistuvia komentoja, jotka suorittamalla saadaan aikaan yksi tavoite. Tällöin vähennetään tarvittavien komentojen kirjoittamisen määrää, ja toisaalta voidaan käynnistää monimutkaisia toimintoja yhdellä komennolla.

## Komentosarjatiedostot

Bat-tiedosto on vain tavallinen tekstitiedosto (jolla on siis tiedostonimensä päätteenä ```.bat```), johon on kirjoitettu ajettavat komennot erillisille riveille siinä järjestyksessä kun ne halutaan ajaa. Yksinkertaisimmillaan tiedostossa voi olla vain muutama komento ilman minkäänlaisia kontrollirakenteita. Alla on esimerkki (sinänsä vain esimerkkinä toimivasta).bat-tiedostosta, joka kopioi tiedoston kahdeksi eri tiedostoksi, tulostaa tekstin "Valmis", ja poistaa kopioimansa tiedostot.

Esimerkkinä komentosarjatiedostosta (tiedoston kopioi.bat sisältö):

```
@ECHO OFF
copy test.txt foo.txt
copy foo.txt bar.txt
echo Valmis!
del bar.txt
del foo.txt
```

### Komentosarjojen ajaminen

.Bat-tiedostomuoto on automaattisesti sellainen muoto, minkä voi suorittaa komentoriviltä kirjoittamalla vain tiedoston nimen. Mikäli tiedosto on aktiivisessa hakemistossa, tai jos tiedoston sijainti on ```PATH```-ympäristömuuttujan osoittama, pelkkä tiedostonnimi riittää. Muuten pitää komentona käyttää tiedoston koko absoluuttista polkua ja nimeä.

!!! shell "cmd.exe: kopioi.bat"
	C:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of C:\TOL-alkeet

	[.]             hello.exe       [html-kansio]   kopioi.bat      [kuvia]         README.txt      teksti.txt      test.txt        [toinen]        toinen.txt      toinen.zip      uusi.txt
	               9 File(s)         50 535 bytes
	               4 Dir(s)  1 310 201 995 264 bytes free

	C:\TOL-alkeet><pop>kopioi</pop>
        1 file(s) copied.
        1 file(s) copied.
	Valmis!

Komentosarjatiedoston voi myös käynnistää graafisen käyttöliittymän puolelta kuvakkeesta, jos kyseisen kuvakkeen konfiguroi osoittamaan haluttuun komentosarjatiedostoon.

### Komentosarjan argumentit

Komentosarjoille voi antaa tietoa prosessoitavaksi argumenttien muodossa, kuten monelle muullekin komennolle (siksi *komento*sarja -nimi). Komentosarjassa voidaan ottaa komentoriviltä annettu argumentti käyttöön %-merkillä ja järjestysnumerolla. Esim. edellä esitetty komentosarja voisi ottaa alkuperäisen, kopioitavaksi tarkoitetun tiedoston nimen argumenttina:
```
@ECHO OFF
copy %1 foo.txt
copy foo.txt bar.txt
echo Valmis!
del bar.txt
del foo.txt
```


!!! shell "cmd.exe: kopioi.bat test.txt"
	C:\TOL-alkeet>dir /w
	 Volume in drive C has no label.
	 Volume Serial Number is 1028-66AE

	 Directory of C:\TOL-alkeet

	[.]           hello.exe     [html-kansio] kopioi.bat    [kuvia]       README.txt    teksti.txt    test.txt      [toinen]      toinen.txt    toinen.zip    uusi.txt
	               8 File(s)         50 511 bytes
	               4 Dir(s)  1 310 172 696 576 bytes free

	C:\TOL-alkeet><pop>kopioi test.txt</pop>
	        1 file(s) copied.
	        1 file(s) copied.
	Valmis!

Komentoriviargumentteja voi antaa useampiakin, jolloin %-merkin jälkeen tuleva järjestysnumero osoittaa vaan kuinka monentena annettua argumenttia missäkin kohdassa käsitellään. Jos argumentteja annetaan komentorivillä useampia kuin mitä komentosarja ottaa vastaan, ylimääräiset argumentit jätetään huomiotta.

### @ECHO OFF

Komentosarjatiedostojen alussa on yleensä rivi ```@ECHO OFF```. Tämän tarkoituksena on poistaa itse komentojen kirjoittuminen komentorivi-ikkunaan. Toki voi kokeilla miltä komentosarjan käyttäminen näyttää ilman tuota, mutta yleensä sen melko pian pistää takaisin bat-tiedoston alkuun. Vaihtoehtona voi käyttää myös muotoa ```ECHO OFF```, mikä toimii muuten samoin, mutta komentorivi-ikkunaan tulostuu ensiksi teksti ```ECHO OFF``` - eli tuo ```@```-merkki komennon alussa poistaa itse tuon ```ECHO OFF```-tulostuksen näkymisen.

Myöhemmin komentosarjassa käytettävä ```echo```-komento tulostaa kuitenkin halutun tekstin näytölle, siihen tuo tiedoston alussa oleva ```@ECHO OFF``` ei vaikuta.

=== "Skripti @ECHO OFF:lla"
	!!! shell "cmd.exe: kopioi (@ECHO OFF)"
		C:\TOL-alkeet><pop>kopioi test.txt</pop>
		        1 file(s) copied.
		        1 file(s) copied.
		Valmis!

=== "Skripti ECHO OFF:lla"
	!!! shell "cmd.exe: kopioi (ECHO OFF)"
		C:\TOL-alkeet><pop>kopioi test.txt</pop>

		C:\TOL-alkeet><pop>ECHO OFF</pop>
		        1 file(s) copied.
		        1 file(s) copied.
		Valmis!


=== "Skripti ilman ECHO OFF:ia (ECHO ON)"
	!!! shell "cmd.exe: kopioi (@ECHO ON)"
		C:\TOL-alkeet>kopioi test.txt

		<pop>C:\TOL-alkeet>copy test.txt foo.txt
		        1 file(s) copied.
		C:\TOL-alkeet>copy foo.txt bar.txt
		        1 file(s) copied.
		C:\TOL-alkeet>echo Valmis!
		Valmis!
		C:\TOL-alkeet>del bar.txt
		C:\TOL-alkeet>del foo.txt</pop>

Joka tapauksessa komentojen tuottamat tulosteet, kuten esim. ```copy```-komennon tuottamat ```1 file(s) copied.```-tulostukset näkyvät, ellei tehdä lisäkonsteja itse komentosarjan sisällä.

## Tiedon käsittely

Automaatiota varten komentosarjojen pitää pystyä käsittelemään, säilyttämään ja siirtämään tietoa eri muodoissa. Tätä varten on käytössä useampiakin erilaisia työkaluja, jotka ovat monella tapaa yhteisiä ohjelmointikielten kanssa, mutta joissa on omia vivahde-eroja ja oma syntaksinsa.

### Muuttujat

Muuttujia ".BAT-kielessä" on periaatteessa kahta eri tyyppiä: numeromuuttujia, ja (oletus) muuntyyppisiä muuttujia. Muuttuja sisältää tällä tasolla ajateltuna palasen tietoa, jota komentosarja voi käyttää jossain kohtaa komentojaan. Muuttujalla on nimi ja sisältö, ja nimeä käyttämällä voidaan vaikuttaa sen sisältämään sisältöön. 

Muuttuja asetetaan (olemaan olemassa ja kerrotaan mikä sen nimi on) komennolla ```SET```

```
SET muuttuja=arvo
```

Mikäli halutaan käyttää numerotyyppistä muuttujaa, annetaan ```SET```-komennon jälkeen valitsin ```/A``` ennen asetettavan muuttujan nimeä.

```
SET /A numeromuuttuja=arvo
```
Esimerkkinä ```testi.bat```-tiedosto`:
```
@ECHO OFF
SET kieli=BAT
SET /A numero=42

echo Kieli on: %kieli%
echo ja vastaus kaikkeen on: %numero%
```
ja sen suoritus:

!!! shell "cmd.exe: test.bat"
	C:\TOL-alkeet>testi
	Kieli on: BAT
	ja vastaus kaikkeen on: 42

Muuttujilla ja muutenkin .BAT-tiedostoissa on käytössä peruslaskutoimitusoperaatiot (+,-,\*,/), sekä vertailuoperaattorit (EQU, NEQ, LSS, LEQ, GTR ja GEQ) ja loogiset operaattorit (AND, OR ja NOT). 

```
@ECHO OFF
SET kieli=BAT
SET /A numero=42

echo Kieli on: %kieli%
echo ja vastaus kaikkeen on: %numero%

SET /A toinen=64

SET /A tulos=%numero%+%toinen%
echo %numero% + %toinen% = %tulos%
```

!!! shell "cmd.exe: test.bat"
	C:\TOL-alkeet>testi
	Kieli on: BAT
	ja vastaus kaikkeen on: 42
	42 + 64 = 106

### Jokerimerkit (wildcard)

Varsinkin tiedostoja käsiteltäessä, voidaan niitten valinnassa käyttää apuna ns. jokerimerkkejä.  Komentosarjojen tapauksessa niiden pääasiallinen käyttötarkoitus on etsiä useita tiedostoja, joiden nimet ovat lähellä toisiaan tai joilla on sama tiedostopääte. Esimerkiksi komento ```type *.txt``` tulostaa kaikki aktiivisessa kansiossa olevat ```.txt```-päätteiset tiedostot.

*Windows* tukee kahta erilaista jokerimerkkiä. Nämä merkit ovat ```*``` ja ```?```

Näistä yksinkertaisempi on ```?```, joka voidaan korvata millä tahansa yhdellä merkillä. Täten siis merkkijono ```kuva-?.jpg``` löytää minkä tahansa seuraavista: ```kuva-2.jpg```, ```kuva-5.jpg``` ja ```kuva-9.jpg```, mutta ei löydä ```kuva-.jpg``` tai ```kuva-25.jpg```

Yleisemmin käytetty jokerimerkki on ```*```. Tämä korvataan millä tahansa määrällä mitä tahansa merkkejä. \*-merkki voidaan jättää myös kokonaan korvaamatta. Eli merkkijono ```kuva-*.jpg``` löytää tiedostot ```kuva-2.jpg```, ```kuva-76.jpg```, ```kuva-asd.jpg``` ja ```kuva-.jpg```, mutta ei löydä merkkijonona ```asd-2.jpg``` tai ```kuva-54.png```.

Jokerimerkkejä voi olla useampi samassa haussa. Esimerkiksi haku *.* löytää kaikki kansiossa olevat tiedostot, joilla on tiedostopääte (tai piste muuten nimessä). Tai vaikkapa haku te???.* löytää sekä tiedostot ```testi.txt``` että ```testi.bat```, muttei tiedostoa ```teksti.txt``` (koska siinä on enemmän kirjaimia kahden ensimmäisen ````te```-kirjaimen jälkeen ennen pistettä, kuin mitä ```?```-jokerimerkkejä on haussa).

!!! shell "cmd.exe: type te???.\*"
	C:\TOL-alkeet><pop>type te???.*</pop>

	test.txt


	test test
	testataan

	testi.bat


	@ECHO OFF
	SET kieli=BAT
	SET /A numero=42

	echo Kieli on: %kieli%
	echo ja vastaus kaikkeen on: %numero%

	SET /A toinen=64

	SET /A tulos=%numero%+%toinen%
	echo %numero% + %toinen% = %tulos%

Jokerimerkkejä voi käyttää siis joko suoraan komentoriviltä tai komentosarjatiedostoista.

## Ohjausrakenteet

Usein yksinkertaiset listamuotoiset komentosarjat eivät riitä, vaan komentojen pitää myös pystyä tekemään päätöksiä, reagoimaan löydettyihin tuloksiin ja toistamaan toiminta useammalle tiedostolle kerralla. BAT-tiedostojen tukema syntaksi on kuitenkin joiltain osin rajoittuneempaa kuin esimerkiksi [bash-skriptauksen](02-bash_script.md) vastaavat, tai mitä on käytössä varsinaisissa ohjelmointikielissä. Joissakin tapauksissa BAT-ohjausrakenteetkin ovat kuitenkin käyttökelpoisiakin.

### Silmukat 

Pääasiallisin toistorakenne, mitä .BAT-tiedostoissa tulee käyttää, on ```FOR```. Tästä on käytännössä mahdollista tehdä kaksi eri vaihtoehtoa: joko listaversio, tai ns. range-versio. Ensimmäisessä, eli listaversiossa, ```FOR``` saa aluksi listan arvoista, jotka se käy yksitellen, yksi kierrosta kohden, läpi tavallaan laskurimuuttujallaan. Esimerkiksi:

```
@ECHO OFF
FOR %%m IN (1 1 2 3 5 8 13) DO echo Fibonacci: %%m
```
!!! shell "cmd.exe: fibo.bat"
	C:\TOL-alkeet>fibo
	Fibonacci: 1
	Fibonacci: 1
	Fibonacci: 2
	Fibonacci: 3
	Fibonacci: 5
	Fibonacci: 8
	Fibonacci: 13

Huomattavaa on, että ```FOR```:n silmukkamuuttujan edessä pitää olla komentosarjojen tapauksessa kaksi ```%```-merkkiä, ja että itse muuttujan nimi on yksikirjaiminen aakkonen. Toisaalta, monesti silmukkarakenteen käyttö kohdistuu tiedostoihin, jolloin voidaan hyödyntää esimerkiksi jokerimerkkejä:

```
@ECHO OFF
FOR %%f IN (*.txt) DO echo %%f
```
!!! shell "cmd.exe: omadir.bat"
	C:\TOL-alkeet>omadir
	README.txt
	teksti.txt
	test.txt
	toinen.txt
	uusi.txt

Yhdistämällä ```FOR```-rakenteen muihin komentoihin komentosarjassa, voidaan saada aikaan monipuolisiakin komentosarjoja.

Toinen variantti ```FOR```-rakenteesta on ns. range-versio, jossa muuttuja käy läpi arvot annetusta lähtöpisteestä, tietyn mittaisilla askeleilla, aina loppupistearvoon asti:

```
@ECHO OFF
FOR /L %%m IN (-4, 2, 4) DO echo luku: %%m
```
!!! shell "cmd.exe: rangefor.bat"
	C:\TOL-alkeet>rangefor
	luku: -4
	luku: -2
	luku: 0
	luku: 2
	luku: 4


### Ehtolauseet

Ehtolauseitä käytetään luomaan haaraumakohtia komentosarjan toimintalogiikkaan. Niiden tarkoitus on muokata toiminta yhdessä tilanteessa yhdeksi, ja toisessa tilanteessa toiseksi. Periaatteessa siis kyseessä on joko-tai -tyyppinen suoritusreitin valinta, tai "tienhaara".

Yksittäisen haarauman muoto on seuraavanlainen:

=== "Yksittäinen ehto (if)"
	```
	if ehto komento
	```
	
	Esimerkiksi:

	```
	@ECHO OFF
	SET mjono1=Merkki
	SET mjono2=Jono

	if %mjono1%==Merkki echo Merkkijono 1 on "Merkki"
	if %mjono2%==mjono2 echo Merkkijono 2 on "mjono"
	```

	!!! shell "cmd.exe: ifmjono.bat"
		C:\TOL-alkeet>ifmjono
		Merkkijono 1 on "Merkki"


=== "Jos ei niin sitten (else)"
	```
	if ehto (komento) else (toinen_komento)
	```

	Esimerkiksi:

	```
	@ECHO OFF
	SET mjono1=Merkki
	SET mjono2=Jono

	if %mjono1%==Merkki (echo Merkkijono 1 on "Merkki") else (echo Merkkijono 1 on mitälie)
	if %mjono2%==mjono2 (echo Merkkijono 2 on "mjono") else (echo Merkkijono 2 on mitälie)
	```
	!!! shell "cmd.exe: ifelsemjono.bat"
		C:\TOL-alkeet>ifelsemjono
		Merkkijono 1 on "Merkki"
		Merkkijono 2 on mit├ñlie


=== "Useampi haara (else if)"
	```
	if ehto if ehto2 komento
	```

	Esimerkiksi:

	```
	@ECHO OFF
	SET /A luku=42
	if %luku% LSS 43 if %luku% GTR 41 (echo Kaiken tarkoitus on: %luku%) else (echo Olisiko parempaa lukua?)
	```
	!!! shell "cmd.exe: ifif.bat"
		C:\TOL-alkeet>ifif
		Kaiken tarkoitus on: 42

Tämä ei ole missään nimessä kaikenkattava katsaus Windows-puolen komentosarjoihin, mutta mikäli automatisointi komentosarjoilla kiinnostaa enemmän, niin suosittelen erittäin painavasti tutustumaan mieluummin [bash-puolen skriptaukseen](02-bash_script.md), jos se vain ympäristön puolesta on mahdollista (WSL on nykyään olemassa).




