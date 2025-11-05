# Ohjelmien asentaminen

Internet on pullollaan erilaisia komentorivillä suoritettavia ohjelmia. Osan niistä voi ladata ja asentaa kuin tavallisen graafisen käyttöliittymän ohjelman, mutta monet eivät tue graafisen puolen asennusohjelmia. Silloin käyttäjälle jää vain muutama vaihtoehto:

 - Ladata ohjelma itse, ja laittaa se kansioon, joka on määritelty [ympäristömuuttujissa](../01.2-komentorivin-jatkoa/03-environment.md). Tämä kuitenkin voi tuottaa ongelmia, jos asennettava ohjelma tarvitsee toimiakseen muita ohjelmia, joita sinulla ei ole asennettuna.
 - Käyttää paketinhallintaohjelmaa, joka lataa ja asentaa tarvittavan ohjelman koneellesi ja kaikki sen riippuvuudet.


## Paketinhallintaohjelmat

Paketinhallintaohjelmat ovat erillisiä asennettavia komentoriviohjelmia, jotka on tarkoitettu muiden ohjelmien asentamisen helpottamiseksi. Nämä ovat usein käyttöjärjestelmä-, ohjelmointikieli- ja shell-kohtaisia. Osa paketinhallintaohjelmista, kuten Ubuntun ```apt``` on valmiiksi asennettu käyttöjärjestelmän mukana. Osa pitää kuitenkin asentaa itse. Tällaisia ohjelmia on mm.:

 - [WinGet Windowsille](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
 - [Homebrew MacOS:lle](https://brew.sh/)
 - [apt Ubuntulle](https://wiki.debian.org/AptCLI)
 - [npm nodelle](https://www.npmjs.com/)
 - [pip pythonille](https://pypi.org/project/pip/)



### Paketinhallintaohjelman asennus

=== ":os-win: Windows - WinGet"
    **TODO:** Kirjoita WinGetin kuvaus

=== ":os-mac: MacOS - brew"
    Applella ei ole omaa järjestelmään sisäänrakennettua paketinhallintaohjelmaa, mutta Homebrewistä on tullut vahva yleisesti käytössä oleva standardi. Homebrewin voi asentaa ajamalla seuraavan komennon komentorivillä:
    !!! shell "Asenna brew"
        **C54W4KDHGK**:~ jonrajal$ <pop>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</pop>

=== ":os-linux: Ubuntu - apt"
    ```apt``` on heti käyttövalmis Ubuntulla. Se on asennettuna koneelle oletuksena.


### Pakettien asentaminen

=== ":os-win: Windows - WinGet"
    **TODO:** Kirjoita WinGetin kuvaus ja esimerkit

=== ":os-mac: MacOS - brew"    
    Kun Homebrew on asennettu, uusien komentoriviohjelmien asentaminen on suhteellisen helppoa: asentaminen tapahtuu komennolla ```brew install <ohjelman nimi>```. Homebrewilla asennettavien ohjelmien lista löytyy osoitteesta: [https://formulae.brew.sh/formula/](https://formulae.brew.sh/formula/).

    Esimerkiksi jos haluaa asentaa koneelleen ohjelman ```ffmpeg```, joka on tehokas (ja vaikeakäyttöinen) videotiedostojen muokkausohjelma, se tapahtuu komennolla:

    !!! shell "brew install"
        **C54W4KDHGK**:~ jonrajal$ <pop>brew install ffmpeg</pop>
    
    Brewin kautta voi myös asentaa graafisen käyttöliittymän sovelluksia. Brew kutsuu näitä nimellä cask. Jos haluat asentaa Firefoxin koneellesi brewin avulla, komento on muotoa:

    !!! shell "brew install --cask"
        **C54W4KDHGK**:~ jonrajal$ <pop>brew install --cask firefox</pop>

    Kaikki caskit löytyvät osoitteesta [https://formulae.brew.sh/cask/](https://formulae.brew.sh/cask/). Kirjasintyypeille, eli fonteille, on oma cask-lista: [https://formulae.brew.sh/cask-font/](https://formulae.brew.sh/cask-font/).

    Jokainen paketti asentuu eri tavalla, joten kannattaa tutustua jokaisen ohjelman dokumentaatioon sen käytöstä. 

=== ":os-linux: Ubuntu - apt"
    ```apt``` on heti käyttövalmis Ubuntulla. Se on asennettuna koneelle oletuksena.
    **TODO:** Kirjoita kuvaus ja esimerkit


## Omien ohjelmien korottaminen komennoiksi

Tavallisesti ohjelman ajaminen tapahtuu tietämällä ohjelman sijainti. Ohjelma käynnistetään aina tietämällä minkä tahansa polun suoritettavaan tiedostoon, ja kutsumalla ohjelmaa polun kautta. Joskus käyttäjä voi kuitenkin haluta ajaa omia ohjelmiaan samalla tavalla kuin komentoja, eli missä tahansa kansiossa ja välittämättä ohjelman sijainnista.

Jos olet tehnyt itse ohjelman, jota haluaisit käyttää kuten komentoja, niin kannattaa tutustua ympäristömuuttujiin ja ohjelmien oikeuksiin [niistä kertovalla sivulla](../01.2-komentorivin-jatkoa/03-environment.md).

Pääasiallisesti prosessi kuitenkin toimii seuraavalla tavalla:

 1. Siirrä käännetty ohjelman johonkin sellaiseen kansioon, joka on määritelty ympäristömuuttujassa ```$PATH```. ```$PATH``` kertoo mistä kansioista etsitään suoritettavia komentoja. Oman koneesi ```$PATH```-kansiot löydät komennolla ```echo $PATH```. Vaihtoehtoisesti voit lisätä ohjelman kansion $PATHiin, mutta se on vähemmän suositeltavaa. Tilapäisesti kansion voi lisätä ```$PATH```iin  komennolla ```export PATH=$PATH:/absoluuttinen/polku/kansioon```. Pysyvästi sen tekemiseen tarvitaan [.bash_profile-tiedosto](../01.2-komentorivin-jatkoa/03-environment.md#bash_profile).

 2. Varmista, että komennolla on [suoritusoikeudet](../01.2-komentorivin-jatkoa/03-environment.md#oikeudet).

 3. Tämän jälkeen komennon voi ajaa kirjoittamalla pelkästään ohjelmatiedoston nimen missä tahansa kansiossa.
