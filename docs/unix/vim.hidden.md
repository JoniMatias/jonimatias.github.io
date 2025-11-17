# Vim 
<div class="subtitle">
- eli kuinka lakkasin olemasta huolissani ja opin sulkemaan sen.
</div>

Jonain kauniina päivänä olet käyttämässä komentoriviä, ja eteesi yhtäkkiä pamahtaa seuraavanlainen ruutu:

![Vim näyttämässä tol-alkeet-kansion README.md-tiedoston sisältöä.](./kuvia/Vim-readme.png){ .center }

Pahoitteluni. Olet juuri avannut Vimin. Vim on komentorivillä toimiva tekstinkäsittelyohjelma, jonka suunnittelijat eivät ole koskaan kuulleet käytettävyydestä tai käytettävyystestaamisesta. Paras esimerkki tästä on se, ettei Vimillä voi suoraan kirjoittaa tekstiä painamalla näppäimistön kirjainnäppäimiä, sillä jokainen näppäimistön kirjainnäppäin on varattu jollekin pikakomennolle tekstinkirjoittamisen sijasta. Mitenkäs muuten.

Jotta Vimillä voi kirjoittaa tekstiä, ensin pitää painaa <kbd>i</kbd>, jotta Vim vaihtaa sijoitus- (eng. *insert*) eli kirjoitustilaan. Ja tästä tilasta pääsee takaisin komentotilaan painamalla <kbd>Esc</kbd>. Mitenkäs muuten.

Vimin käytön helppoudesta kielii jotain se, että Googlen suosituimmat haut, jotka alkavat "Vim how" ovat: "Vim how to quit and save" ja "Vim how to edit". Vim on siis tekstinkäsittelyohjelma, jonka kaksi yleisintä käyttäjien kysymystä ovat miten tästä pääsee eroon ja miten tällä muokataan tekstiä.

!["Vim how" -Google-hakuehdotukset](./kuvia/Vim-google.png){ .center }

Todennäköisesti tässä vaiheessa haluat tietää vastauksen tuohon ensimmäiseen Google osumaan, eli miten ruudusta päästään eroon? Se tapahtuu kirjoittamalla ```:quit!``` ja painamalla <kbd>⏎ Enter</kbd>. Mitenkäs muuten.

??? info "```:quit!```? WTF?"
    Tuo Vimin komento ```:quit!``` voi näyttää oudolta, joten puretaanpa se osiin.

    Kaksoipiste (```:```) aloittaa Vimin komentoparserin, johon voit kirjoittaa Vimille pidempiä komentoja. ```quit``` sammuttaa ohjelman ja ```!``` antaa sammuttaa Vimin, vaikka tiedostossa olisi tallentamattomia muutoksia. 
    
    Jos tämä on ensimmäinen kertasi kun käytät Vimiä, siinä on todennäköisesti tahattomia muutoksia, eli haluat tuon huutomerkin (```!```).


 
Vimin vannoutuneiden käyttäjien mukaan se on kuitenkin tehokkain tekstinkäsittelyohjelma maailmassa, kunhan siihen vain jaksaa perehtyä. Jokainen tietysti tykkää mistä tykkää, mutta yksinkertaisempiakin vaihtoehtoja on olemassa.

Jos komentoriville haluaa jonkin helppokäyttöisen tekstieditorin, niin suosittelen Nanoa. Seuraavilla komennoilla saat Vimin pois käytöstä kaikissa niissä tapauksissa, joissa se saattaisi ilmestyä sinua kiusaamaan:

#### Komentorivin oletustekstieditori

=== ":os-mac: MacOS"
    MacOS-tietokoneiden oletustekstieditori on Texturi (eng. TextEdit), joka on graafisen käyttöliittymän ohjelma. Jotkin komentoriviohjelmat eivät kuitenkaan tykkää käynnistellä graafisen käyttöliittymän ohjelmia, joten ne käyttävät Unix-standardia [ympäristömuuttujaa](01.2-komentorivin-jatkoa/03-environment.md#ympäristömuuttujat) ```$EDITOR``` etsiäkseen jonkin käynnistettävän ohjelman. MacOS ei ole asettanut tähän mitään arvoa, joten jokainen ohjelma valitsee siis itsekseen jonkin satunnaisen tekstinkäsittelyohjelman. Asettamalla ympäristömuuttujaan ```$EDITOR``` arvon, voi monet ohjelmat saada käyttämään haluamaansa tekstieditoria.

    Lisää siis [käynnistystiedostoon](01.2-komentorivin-jatkoa/03-environment.md#päätteen-käynnistystiedostot) ```.bash-profile``` seuraava rivi:

    ```
    EDITOR=/usr/bin/nano
    ```

    Jos et halua käyttää Nanoa, voit vaihtaa polun joksikin toiseksi.

=== ":os-linux: Ubuntu"
    Unix-koneiden oletustekstieditori on nimetty [ympäristömuuttujassa](01.2-komentorivin-jatkoa/03-environment.md#ympäristömuuttujat) ```$EDITOR```. Siinä pitäisi olla [absoluuttinen polku](00-intro/01-tiedostot.md#täysi-eli-absoluuttinen-polku) siihen ohjelmaan, jolla tekstitiedosto pitäisi avata.

    Lisää siis [käynnistystiedostoon](01.2-komentorivin-jatkoa/03-environment.md#päätteen-käynnistystiedostot) ```.bashrc``` seuraava rivi:

    ```
    EDITOR=/usr/bin/nano
    ```

    Jos et halua käyttää Nanoa, voit vaihtaa polun joksikin toiseksi.

#### gitin merge viestien kirjoittamiseen

```
git config --global core.editor open
```
