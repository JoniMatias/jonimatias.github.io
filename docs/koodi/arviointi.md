# Vastausten antaminen

Kaikissa tällä sivustolla olevissa koodaustehtävissä on aina samanlainen ajatus taustalla. Tehtävään kuuluu aina syötetiedosto, ja joka sivulta löytyy syötetiedostosta saatujen tulostusten tarkastus. 

Huomaathan, että koska kysessä on yksinkertainen verkkosivu, niin kaikki tehtävänannot ovat samanlaisia. Syötteet eivät vaihdu opiskelijalta toiselle. Tämän sivun tarkoitus ei ole olla opiskelijoiden arviointiväline, vaan sen pyrkii vain auttamaan opiskelijoita ohjelmoinnin harrastuneisuuden kanssa. 

!!! danger "Tekoälystä"
    Monet tällä sivulla olevista tehtävistä on sen verran yksinkertaisia ja yleisiä harjoitustehtäviä, että todennäköisesti niiden syöttäminen sellaisenaan chatGPT:hen tai vastaavaan tekoalyalustaan tuottaa ainakin lähes täydellisen tuloksen. Näiden tehtävien ei ole tarkoituskaan tuottaa uutta ja mullistavaa koodia, vaan niiden ainoa tarkoitus on saada ohjelmoinnin opiskelijalle jonkinlainen ohjelmointirutiini, -harrastuneisuus ja -ymmärrys. Jos uskot, että tekoälyn käyttö auttaa sinua saavuttamaan nämä kolme tavoitetta tehtäviä tehdessä, niin ole hyvä; ei näitä tehtäviä kukaan kuitenkaan arvostele tai tarkasta. Muista kuitenkin, että kaikki tehotyökalut - kuten tekoäly - auttavat vasta, kun alkeet on ymmärretty.

## Syötetiedosto

Syötetiedostoissa on aina useampi erilainen syöte eroteltuina riveille. Jokaista syötettä - eli riviä - kohden ohjelman olisi tarkoitus tuottaa sitä vastaava tulos tehtävän ohjeiden mukaisesti. Suurimmassa osassa tehtävistä jokainen rivi on yksilöllinen syöte, jonka tulos ei ole riippuivainen aikaisemmista riveistä tai niiden tulokseista. Niissä tehtävissä, jossa tämä ei pidä paikkaansa, asia on selkeästi merkitty.

Huomatkaa myös, että joissain tehtävissä syötteessä voi olla myös tarkoituksellisesti virheellisiä, väärin muotoiltuja syötteitä. Jos tällaisia tehtävästä löytyy, ne on merkitty tehtävänantoon selkeästi. Tässä tapauksessa ohjelman pitää myös pystyä tunnistamaan nämä, ja jatkamaan toimintaansa niistä välittämättä. Tulokseksi näille syötteille pitää olla joko tyhjä rivi, `virhe` tai `error`.

Eli, jos käytetään esimerkkinä [roomalaista kirjoitusjärjestelmätehtävää](./haasteet/roomalaiset.md), niin syötetiedosto voisi olla esimerkiksi muotoa:

```
I
IX
CCLVI
ABCDEF
XCI
```

Oikeasti nämä syötetiedostot ovat pidempiä. Usein satoja rivejä pitkiä.

Jos olet vielä ohjelmointitaipaleesi alkumetreillä, eikä tiedostojen lukeminen ole vielä erityisen sulavaa, niin kurkkaapa [tiedostorivien lukemisen ohjesivulle](./apufunktiot.md). Sieltä löytyy kopiotavaa koodia eri kielillä, jolla voi lukaista tiedoston rivi kerrallaan.

Jokainen syötetiedosto on UTF-8-koodattu txt-tiedosto, joka noudattaa UNIX-standardia rivien vaihtamiseen. Eli rivinvaihdot tehdään pelkällä `new-line` -merkillä, eikä Windowsin käyttämällä `carriage-return` + `new-line` -yhdistelmällä. Tämän ei pitäisi tuottaa isompia ongelmia Windows-puolella, suurin osa ohjemointiympäristöistä osaa tunnistaa molemmat rivinvaihtotavat, mutta jos jostain syystä rivinvaihtojen tunnistaminen tuottaa ongelmia Windows-koneilla, niin kannattaa kokeilla vaihtoehtoisia menetelmiä.



## Tulos

!!! info "Tietosuoja"
    Sivuilla syötettyjä tuloksia ei tallenneta mihinkään, eikä kenestäkään kerätä mitään tietoa. Täällä pääset leikkimään koodisi kanssa ihan anonyymisti.

Jokainen tehtävä vaatii tuloksen. Tulos kirjoitetaan (tai todennäköisemmin kopioidaan ja liitetään) tehtäväsivun alalaidassa olevaan tuloskenttään. Tuloksen muotoilun odotetaan seuraavan samaa rakennetta kuin syötetiedoston, ja olevan samassa järjestyksessä syötetiedoston kanssa. Ensimmäisen rivin syötettä vastaava tulos pitäisi siis olla ensimmäisellä tulosrivillä, ja toisen syöterivin tulos toisella tulosrivillä, jne. Ylimääräisiä rivinvaihtoja ei kannata siis tulosteessa olla, koska muuten tulos luetaan väärin.

Helpoin tapa siirtää tuloste tälle sivulle on kopioida se päätteen tulosteesta. Sillä tavalla ohjelmassa ei tarvitse tehdä muuta kuin käsitellä syöte rivi riviltä, ja tulostaa rivin tulos käyttäen kielen tulostusfunktiota, kuten `printf`, `print` tai `System.out.println`. Sitten komentoriville tulostetun tekstin voi suoraan kopioida tämän sivun vastauskenttään.

Jos syöte on virheellinen, eikä tulosta voida sen perustella tuottaa, niin tuloksen niillä riveillä kuuluu olla joko tyhjä rivi, `virhe` tai `error`. `virhe` ja `error` pitää olla rivin alussa, mutta samalla rivillä niiden kanssa saa olla myös muuta tekstiä.

Käyttäen aikaisempaa roomalaista kirjoitusjärjestelmäesimerkin syötetiedostoa, tulos voisi olla muotoa:

```
1
9
256
virhe: outoja kirjaimia
91
```

Tarkastimen pitäisi huomioida automaattisesti kirjainten koodaus ja rivinvaihtomerkkien erilaisuus. Suurin osa testeistä on kuitenkin tehty vain UTF-8-kooodatulla tekstillä ja UNIX-rivivaihdoilla, joten ongelmatapauksissa kannattaa tarkastaa tarkistimeen laitetun tekstin muotoilu.