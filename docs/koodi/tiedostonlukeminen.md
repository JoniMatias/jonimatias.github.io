# Tiedostojen lukeminen

Jos kiinnotaa tehdä näitä tehtäviä, mutta ohjelmointi ei vielä taivu niin sujuvasti, että tiedostojen aukaiseminen tapahtuu rutiinilla, niin tässä olisi muutamalla yleisimmällä kielellä esimerkki tiedoston sisällön lukemisesta rivi riviltä.




## C

??? note "C-koodi"
    ```
    FILE * tiedosto;
    char rivi[64];

    tiedosto = fopen("path/to/tile.txt", "r");
    if (tiedosto == NULL) {
        return;
    }

    while ((read = getline(&rivi, 64, tiedosto)) != -1) {
        // Tähän laitetaan rivin käsittelykoodi
    }

    fclose(tiedosto);
    ```



## Swift

??? note "Swift-koodi"
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
        //Virheenkäsittelykoodi tänne
    }
    ```


