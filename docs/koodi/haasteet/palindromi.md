# Palindromit 1: Tunnistaminen
★★☆☆☆

??? Palindromitehtävät
    Tämä kuuluu palindromitehtävien ryhmään. Näiden tehtävien vaikeusaste nousee hiljalleen tehtävien edetessä, mutta missään vaiheessa niistä ei tule mitenkään läpipääsemättömän vaikeita. Kaikki tehtävät käyttävät myös samaa syötetiedostoa. Sarjaan kuuluu tehtävät:

     - **Palindromit 1: Palindromien tunnistaminen**
     - [Palindromit 2: Palindromiprosentti](./palindromi2.md)
     - [Palindromit 3: Alipalindromit](./palindromi3.md)

Palindromit ovat hauskoja ja hyödyllisiä.

Palindromeissa kirjainten järjestys on sama oikealta vasemmalle luettuna ja vasemmalta oikealle luettuna. Tässä tehtävässä myös oletetaan palindromien yleiset säännöt, eli muita erikoismerkkejä ei lasketa palindromiin ollenkaan, ne vaan jätetään huomiotta. Erikoismerkeiksi lasketaan kaikki muut merkit kuin tavalliset aakkoset, eli väliviivat `-`, numerot `0123456789`, välilyönnit ` `, välimerkit `,.;:!?` ja rivinlopetusmerkit `\n` `\r` eivät ole osa palindromia. Palindromit eivät myöskään välitä isoista tai pienistä kirjaimista. Kaikki tällaiset merkit pitäisi jättää palindromista vain huomiotta.

Näitä ohjeita nuodattamalla seuraavien merkkijonojen pitäisi siis olla palindromeja:

```
A. Aila, vegaaniuros iso ruinaa Gevaliaa!
Elli, se nollapalloliitto otti ilolla pallon esille
asdd8sa  
suhu-s
X
```

Vastaus olettaa jokaista syöteriviä vastaavan `true` tai `false` tulosteen, riippuen siitä, onko annetun rivin merkkijono sääntöjen mukainen palindromi. Vastausten rivin pitää vastata syötteen riviä täysin. Tarkemmat ohjeet voit lukea [yleisistä vastausohjeista](../arviointi.md). 

Ylläolevaa syötteen tulos olisi siis:

```
true
true
true
true
true
```



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

[Lataa syötetiedosto](../syotteet/palindromi_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<div id="vastausalue">
    <button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
    <div style="display: none;" id="vastaustiedosto">../../syotteet/palindromi_output.txt</div>
    <div style="display: none;" id="tehtavatiedosto">../../syotteet/palindromi_input.txt</div>
    <div style="text_color: red" id="virhelista"></div>
</div>
