# Rooma
★★☆☆☆

Tee ohjelma, joka lukee sille annettuja roomalaisittain merkittyjä numeroita, ja palauttaa luvun tavallisessa kymmenjärjestelmämuodossa.

Roomalaisessa numerojärjestelmässä lukuja merkitään kirjaimilla, ja merkintätapa on hyvin lähellä tukkimiehen kirjanpitoa. Monta kappaletta samaa merkkiä plussataan yhteen: `I` on yksi, ja `II` on kaksi. Vain jos heti yksikkömerkin `I, X, C` jälkeen tulee merkkiä isompaa lukua edustava merkkiin, niin yksikkömerkit vähennetään isommasta: `IX` on yhdeksän.

??? tip "Roomalaiset numerot tiivistetysti"
    - I - 1
    - II - 2
    - III - 3
    - IV - 4
    - V - 5
    - VI - 6 
    - VII - 7
    - VIII - 8
    - IX - 9
    - X - 10
    - XX - 20
    - XXX - 30
    - XL - 40
    - L - 50
    - LX - 60
    - XC - 90
    - C - 100
    - D - 500
    - M - 1000

Eli mm. `MMDCCXCII = 2792`.


Kannattaa huomioida myös se, ettei roomalaisilla numeroilla ole tarkkaa vakiintunutta kirjoitusasua, jolloin myös sellaiset tapaukset kuin `IIX = 8`, `CCCCIIII = 404` ja `MIM = 1999` ovat mahdollisia.

Oletuksena kuitenkin voidaan pitää seuraavia sääntöjä:

 - Merkit listataan suuremmasta pienempään (ellei vähennetä).
 - Vain yksikköä edustavilla merkeillä `I, X, C` voidaan vähentää.
 - Vähennettäessä käytetään vain yhtä merkkiä. (eli `XIC` ei ole mahdollinen.)



## Data

Lataa alla oleva tiedosto. Siinä on riveittäin annettu erilaisia syötteitä. Alla olevaan vastauskenttään odotetaan tekstiä, jossa joka rivillä on syötetiedoston riviä vastaava tulos.

[Lataa syötetiedosto](../syotteet/rooma_input.txt){ .md-button }


### Vastaus

<textarea rows="10" cols="80" id="tulos"></textarea>
<button class="md-button md-button--primary" id="submit_button">Kokeile vastausta</button>
<div style="display: none;" id="vastaustiedosto">../../syotteet/rooma_output.txt</div>
<div style="display: none;" id="tehtavatiedosto">../../syotteet/rooma_input.txt</div>
<div style="text_color: red" id="virhelista"></div>
