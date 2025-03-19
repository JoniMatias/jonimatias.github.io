# Ääkköset

Ohjelmointikieliä on maailmassa vähän turhan monta. Uudet kielet syntyvät yleensä harrastuneisuuden kautta. Toinen yleinen syy on se, että jotain käyttäjää ärsyttää jokin käytetyssä kielessä oleva ominaisuus, ja hän päättä tehdä paremman. Tämän takia lähes kaikkien perustoimintojen ratkaisut ovat kielestä toiseen hyvin erilaisia. Tekstin, merkkijonojen ja perus-ASCII merkkien ulkopuolisten merkkien lukeminen on yksi tällainen asia. Käytännössä jokainen kieli käyttää tähän omaa ratkaisuaan. Yleensä kielet käyttämät ratkaisut ovat hyvin yhdenlaisessa merkkijonojen käsittelyssä, mutta muissa tulee ongelmia.

C käsittelee merkkejä tavu kerrallaan, jolloin kaikki ASCII-merkistöjen ulkopuolinen teksti tuottaa ongelmia. Applen kehittämä Swift on päättänyt ratkaista ongelman päinvastaisella tavalla, jossa oletetaan **kaikki** merkkijonot kokoelmiksi satunnaisen kokoisia koodattuja *kirjaimia*, jolloin yksittäisten merkkien käsittely on huomattavan paljon vaikeampaa jopa yksinkertaisissa tilanteissa.

Monet kielet, kuten Python, Java ja Swift tukevat Unicodea luonnostaan, ainakin jollain tasolla. Tällaisilla kielillä ääkkösten lukeminen, käsittely ja tulostaminen on käytännössä yhtä vaivatonta kuin muidenkin merkkien ja kirjainten.



## C

C-kielellä ei pitkään ollut minkäänlaista tukea ASCII-merkistön ulkopuoliselle koodaukselle. Ne piti käsitellä tavu kerrallaan itse, tai hyödyntää muiden käyttäjien tekemiä kirjastoja. C11-standardin mukana tuli parempi tuki `widechar_t` tyypin muodossa. `widechar_t` on käytännössä uusi tyyppi, joka toimii hyvin samaan tapaan kuin perinteinen `char`, mutta se pystyy käsittelemään vaihtelevan pituisia merkkejä. Tyypin mukana tuli myös paljon uusia funktioita sen käsittelyyn. Pääasiallisesti nämä uudet funktiot on nimetty samalla tavalla kuin funktiot jotka käyttävät `char`-tyyppisiä muuttujia, mutta niissä on w-kirjain jossain loogisen oloisessa paikassa. Esimerkiksi funktion `isalpha` vastine on `iswalpha` ja `strlen` vastine on `wcslen`. 

Löydät muut `widechat_t` funktiot [täältä](https://en.cppreference.com/w/cpp/string/wide).

Myös vakiomerkkijonon määritteleminen toimii leveillä merkeillä hiukan eri tavalla. Tavallisesti merkkijono laitetaan vain lainausmerkkien sisään (esim. `"merkkijono"`), mutta leveät merkit haluavat ison L-kirjaimen ennen avaavaa lainausmerkkiä (esim. `L"ääkköjono"`).


### Koodiesimerkit

Jos haluaa käsitellä UTF-8-koodattua suomenkielistä tekstiä C:llä, niin ensimmäisenä kannattaa asettaa **locale**, eli paikallisuusmääritelmät, oikeaksi. Tämä tapahtuu lisäämällä pääohjelmaan seuraava koodinpätkä:

```
char * locale = setlocale(LC_ALL, "fi_FI.UTF-8");
```

Sitten voit lukea tiedoston käyttämällä seuraavaa koodia. Tämä toimii samoin kuin perusesimerkkikoodinpätkä [tiedoston lukeminen sivulla](./tiedoston_lukeminen.md), mutta käyttää `widechar_t`-tyyppiä `char`-tyypin sijasta. 

```
static const int MAX_RIVIN_PITUUS = 100;

FILE * tiedosto;
char rivi[MAX_RIVIN_PITUUS];

tiedosto = fopen("path/to/tile.txt", "r");
if (tiedosto == NULL) {
    printf("Tiedoston avaaminen ei onnistunut.");
    //Virheenkäsittelykoodi tänne
    return;
}

while ((fgetws(line, MAX_LINE_LENGTH, inputFile)) != NULL) {
    // Tähän laitetaan rivin käsittelykoodi
}

fclose(tiedosto);
```






## Tekninen selitys

Tällä sivulla syötteet pyritään pitämään UTF-8 koodattuina tiedostoina, jolloin tätä sivua käyttäessä ei tarvitse opetella muita merkkejä. UTF-8 on yleisin länsimaissa käytetty merkistöjen koodausmenetelmä sen ASCII-yhteensopivuuden takia. 

Lisäongelman ääkkösten käsittelyyn luo se, että ääkkösille on useampi erilainen koodaustapa. Jopa Unicode mahdollistaa [kaksi erilaista tapaa koodata ä-kirjain](https://bittimittari.blogspot.com/2024/09/unicode-ja-kirjain-kaksi-vaihtoehtoa.html). Näillä sivuilla kuitenkin voit olettaa aina käytettävät UTF-8 standardin mukaista yhden merkin (mutta kahden tavun) koodaustapaa. Eri ääkkösmerkkien heksadesimaaliset koodaukset ovat siis aina seuraavat:

| Merkki | Heksadesimaali |
|--------|----------------|
| ä      | 0xC3 0xA4      |
| Ä      | 0xC3 0x84      |
| ö      | 0xC3 0xB6      |
| Ö      | 0xC3 0x96      |
| å      | 0xC3 0xA5      |
| Å      | 0xC3 0x85      |

