# Apufunktioita

Jos kiinnostaa tehdä näitä tehtäviä, mutta ohjelmointi ei vielä taivu täysin sujuvasti, niin tässä olisi muutamia apufunktioita yleisimillä kielillä.



## Tiedoston lukeminen

=== "C"
    ```
    FILE * tiedosto;
    char rivi[64];

    tiedosto = fopen("path/to/tile.txt", "r");
    if (tiedosto == NULL) {
        printf("Tiedoston avaaminen ei onnistunut.");
        //Virheenkäsittelykoodi tänne
        return;
    }

    while ((read = getline(&rivi, 64, tiedosto)) != -1) {
        // Tähän laitetaan rivin käsittelykoodi
    }

    fclose(tiedosto);
    ```

=== "Swift"
    ```
    let tiedostopolku = "path/to/file.txt"
    let tiedosto_url = URL(filePath: tiedostopolku)
    do {
        let sisalto = try String(contentsOf: tiedosto_url, encoding: .utf8)
        let rivit = sisalto.split(whereSeparator: \.isNewline)
        for rivi in rivit {
            //Tähän laitetaan rivin käsittelykoodi
        }
        
    } catch (let error) {
        print("Tiedoston avaaminen ei onnistunut.")
        //Virheenkäsittelykoodi tänne
    }
    ```




## Ääkkösten käsittely

Ohjelmointikieliä on maailmassa vähän turhan monta. Uudet kielet syntyvät yleensä harrastuneisuuden kautta. Toinen yleinen syy on se, että jotain käyttäjää ärsyttää jokin käytetyssä kielessä oleva ominaisuus, ja hän päättä tehdä paremman. Tämän takia lähes kaikkien perustoimintojen ratkaisut ovat kielestä toiseen hyvin erilaisia. Tekstin, merkkijonojen ja perus-ASCII merkkien ulkopuolisten merkkien lukeminen on yksi tällainen asia. Käytännössä jokainen kieli käyttää tähän omaa ratkaisuaan. Yleensä kielet käyttämät ratkaisut ovat hyvin yhdenlaisessa merkkijonojen käsittelyssä, mutta muissa tulee ongelmia.

C muun muassa on käsittelee merkkejä käytännössä tavu kerrallaan, jolloin kaikki ASCII-merkistöjen ulkopuolinen teksti tuottaa ongelmia. Applen kehittämä Swift on päättänyt ratkaista ongelman päinvastaisella tavalla, jossa oletetaan **kaikki** merkkijonot kokoelmiksi satunnaisen kokoisia koodattuja *kirjaimia*, jolloin yksittäisten merkkien käsittely on huomattavan paljon vaikeampaa jopa yksinkertaisissa tilanteissa.

Lisäongelman ääkkösten käsittelyyn luo se, että ääkkösille on useampi erilainen koodaustapa. Jopa Unicode mahdollistaa [kaksi erilaista tapaa koodata ä-kirjaimelle](https://bittimittari.blogspot.com/2024/09/unicode-ja-kirjain-kaksi-vaihtoehtoa.html). Näillä sivuilla kuitenkin voit olettaa aina käytettävät UTF-8 standardin mukaista yhden merkin (mutta kahden tavun) koodaustapaa. Eli merkkien heksadesimaaliset koodaukset ovat aina seuraavat:

| Merkki | Heksadesimaali |
|--------|----------------|
| ä      | 0xC3 0xA4      |
| Ä      | 0xC3 0x84      |
| ö      | 0xC3 0xB6      |
| Ö      | 0xC3 0x96      |
| å      | 0xC3 0xA5      |
| Å      | 0xC3 0x85      |
