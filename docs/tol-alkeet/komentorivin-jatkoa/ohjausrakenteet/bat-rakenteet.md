# Windows ohjausrakenteet

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

Usein yksinkertaiset listamuotoiset komentosarjat eivät riitä, vaan komentojen pitää myös pystyä tekemään päätöksiä, reagoimaan löydettyihin tuloksiin ja toistamaan toiminta useammalle tiedostolle kerralla. BAT-tiedostojen tukema syntaksi on kuitenkin joiltain osin rajoittuneempaa kuin esimerkiksi [bash-skriptauksen](../komentosarjat/bash_script.md) vastaavat, tai mitä on käytössä varsinaisissa ohjelmointikielissä. Joissakin tapauksissa BAT-ohjausrakenteetkin ovat kuitenkin käyttökelpoisiakin.

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

Tämä ei ole missään nimessä kaikenkattava katsaus Windows-puolen komentosarjoihin, mutta mikäli automatisointi komentosarjoilla kiinnostaa enemmän, niin suosittelen erittäin painavasti tutustumaan mieluummin [bash-puolen skriptaukseen](../komentosarjat/bash_script.md), jos se vain ympäristön puolesta on mahdollista (WSL on nykyään olemassa).
