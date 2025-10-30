# Ohjelmien asentaminen

Internet on pullollaan erilaisia komentorivillä suoritettavia ohjelmia. Osan niistä voi ladata ja asentaa kuin tavallisen graafisen käyttöliittymän ohjelman, mutta monet eivät tue graafisen puolen asennusohjelmia. Silloin käyttäjälle jää vain muutama vaihtoehto:

 - Ladata ohjelma itse, ja laittaa se kansioon, joka on määritelty [ympäristömuuttujissa](./environment.md). Tämä on kuitenkin ongelma, jos asennettu ohjelma tarvitsee toimiakseen muita ohjelmia, joita sinulla ei ole asennettuna.
 - Käyttää paketinhallintaohjelmaa, joka lataa ja asentaa tarvittavan ohjelman koneellesi ja kaikki sen riippuvuudet.


## Paketinhallintaohjelmat

Paketinhallintaohjelmat ovat erillisiä asennettavia komentoriviohjelmia, jotka on tarkoitettu muiden ohjelmien asentamisen helpottamiseksi. Nämä ovat usein käyttöjärjestelmä-, ohjelmointikieli- ja shell-kohtaisia. Osa paketinhallintaohjelmista, kuten Ubuntun ```apt``` on valmiiksi asennettu käyttöjärjestelmän mukana. Osa pitää kuitenkin asentaa itse. Tällaisia ohjelmia on mm.:

 - [WinGet Windowsille](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
 - [Homebrew MacOS:lle](https://brew.sh/)
 - [apt Ubuntulle](https://wiki.debian.org/AptCLI)
 - [npm nodelle](https://www.npmjs.com/)
 - [pip pythonille](https://pypi.org/project/pip/)


=== "Windows - WinGet"
    **TODO:** Kirjoita WinGetin kuvaus

=== "MacOS - brew"
    Applella ei ole omaa järjestelmään sisäänrakennettua paketinhallintaohjelmaa, mutta Homebrewistä on tullut vahva yleisesti käytössä oleva standardi.
    !!! shell "Asenna brew"
        **C54W4KDHGK**:~ jonrajal$ <pop>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</pop>
    
    Kun Homebrew on asennettu, uusien komentoriviohjelmien asentaminen on suhteellisen helppoa: asentaminen tapahtuu komennolla ```brew install <ohjelman nimi>```. Homebrewilla asennettavien ohjelmien lista löytyy osoitteesta: https://formulae.brew.sh/formula/

=== "Ubuntu - npm"
    ```apt``` on heti käyttövalmis Ubuntulla. Se on asennettuna koneelle oletuksena.