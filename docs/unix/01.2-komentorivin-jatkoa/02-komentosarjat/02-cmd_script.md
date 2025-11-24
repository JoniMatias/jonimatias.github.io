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





