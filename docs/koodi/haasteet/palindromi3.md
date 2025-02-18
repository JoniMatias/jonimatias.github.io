# Palindromit 3: Alipalindromit
★★★★★
<!-- 
Ohjelmointi 2
Merkkijono
-->

??? Palindromitehtävät
    Tämä kuuluu palindromitehtävien ryhmään. Näiden tehtävien vaikeusaste nousee hiljalleen tehtävien edetessä, mutta missään vaiheessa niistä ei tule mitenkään läpipääsemättömän vaikeita. Sarjaan kuuluu tehtävät:

     - [Palindromit 1: Palindromien tunnistaminen](./palindromi.md)
     - [Palindromit 2: Palindromiprosentti](./palindromi2.md)
     - **Palindromit 3: Alipalindromit**

Palindromilauseiden rakentamiseen ei yleensä riitä se, että tunnistaa yksittäisen sanan palindromiksi. Palindromin rakentaminen yleensä tarvitsee kykyä tunnistaa myös sanan osia palindromeiksi tai muiden sanojen osiksi väärin päin. Muiden sanojen löytäminen sanastosta on tämän tehtävän puitteissa vielä turhan monimutkaista (siihen ehkä voisi käyttää [sanakirjatehtävän puurakennetta](./sanakirja.md)), mutta sanan sisäisten palindromien etsimisen ei pitäisi olla vaikeaa. 

Käyttäen annettua syötettä, etsi siitä jokaisen rivin sanan sisällä olevat palindromiset osiot. Löydettyjen osioiden ei tarvitse olla sanoja itsessään, kunhan ne noudattavat ensimmäisessä osassa annettuja palindromien sääntöjä. Jotta tulosteessa olisi jotain tolkkua, niin vain kolmikirjaimiset ja sitä pidemmät kirjainyhdistelmät lasketaan alipalindromeiksi.

!!! info inline end "Palindromien säännöt"
 
    - Teksti on sama etuperin kuin takaperin luettuna.
    - Vain kirjaimet lasketaan palindromiin, muut erikoismerkit jätetään huomiotta.

Vastaukseksi oletetaan jokaista syöteriviä vastaava tuloste, jossa on listattu kaikki sanan sisäiset vähintään kolmikirjaimiset alipalindromit aakkosjärjestyksessä puolipisteellä eroteltuna. Eli mm. syöte `minimikoko` jakautuisi osiin `imi`, `ini`, `kok`, `minim` ja `oko`, jolloin odotettu vastaus olisi muotoiltu seuraavasti `imi;ini;kok;minim;oko`. Tuloksissa pitää myös olla mukana alkuperäisen syötteen erikoismerkit vaikka niitä ei huomioitaisikaan palindromisuutta määriteltäessä, eli syötteen `si i-si` jakautuisi osiin `i-si` ja `si i-s`. Jos annetulla syötteellä ei ole yhtään tarvittavan pituista alipalindromia, niin silloin tulosrivi jätetään tyhjäksi.

## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

[Lataa syötetiedosto](../syotteet/palindromi_input.txt){ .md-button }



### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<div id="vastausalue">
    <button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
    <div style="display: none;" id="vastaustiedosto">../../syotteet/palindromi_output3.txt</div>
    <div style="display: none;" id="tehtavatiedosto">../../syotteet/palindromi_input.txt</div>
    <div style="text_color: red" id="virhelista"></div>
</div>
