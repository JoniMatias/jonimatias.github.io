# Palindromit 2: Palindromiprosentti
<div markdown class="info-card">
Vaikeusaste: ★★☆☆☆

**Ääkkösiä**
</div>

??? Palindromitehtävät
    Tämä kuuluu palindromitehtävien ryhmään. Näiden tehtävien vaikeusaste nousee hiljalleen tehtävien edetessä, mutta missään vaiheessa niistä ei tule mitenkään läpipääsemättömän vaikeita. Sarjaan kuuluu tehtävät:

     - [Palindromit 1: Palindromien tunnistaminen](./palindromi.md)
     - **Palindromit 2: Palindromiprosentti**
     - [Palindromit 3: Alipalindromit](./palindromi3.md)

Käyttäen annettua syötetiedostoa, laske syöteriveillä olevien kirjainten määrä, joille löytyy palindromisesti vastaava kirjain. Eli toisin sanoen kirjaimet, joille löytyy merkkijonon toisesta päästä vastaava kirjain. Tehtävänanto edelleen olettaa, että palindromissa huomioidaan vain kirjaimet, ja erikoismerkkien indeksien yli vain hypätään. Merkkijonon kokonaispituudessa nämä erikoismerkit pitäisi kuitenkin laskea.

Ilmoita löydettyjen kirjainten määrä murtolukuna koko merkkijonon kirjainten määrästä.

Taulukossa on muutamia esimerkkejä siitä, millaisia tuloksia tehtävästä odotettaisiin.


| Syöte       | Palindroivat merkit    | Tulos |
|-------------|------------------------|-------|
| ässä        | **ässä**               | 4/4   |
| allakka     | **a**ll**a**kk**a**    | 3/7   |
| amme        | a**mm**e               | 2/4   |
| aho         | a**h**o                | 1/3   |
| s 21 ii-s   | **s** 21 **ii**-**s**  | 4/9   |
| Linux unil' | **Linux unil**'        | 9/11  |

Vastaus odottaa jokaista syöteriviä vastaavalle vastausriville vain taulukon tulososion. Eli esimerkin mukaiselle syötteelle:

```
ässä
allakka
amme
aho
s 21 ii-s
Linux unil'
```

vastaus olisi:

```
4/4
3/7
2/4
1/3
4/9
9/11
```

## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

[Lataa syötetiedosto](../syotteet/palindromi_input.txt){ .md-button }




### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<div id="vastausalue">
    <button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
    <div style="display: none;" id="vastaustiedosto">../../syotteet/palindromi_output2.txt</div>
    <div style="display: none;" id="tehtavatiedosto">../../syotteet/palindromi_input.txt</div>
    <div style="text_color: red" id="virhelista"></div>
</div>