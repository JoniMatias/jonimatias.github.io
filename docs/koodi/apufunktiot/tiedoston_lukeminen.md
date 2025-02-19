# Tiedostojen lukeminen

Iso osa näillä sivuilla olevia tehtäviä vaatii syötteen lukemista tiedostosta. Tällä sivulla on muutamalla yleisimmällä kielellä toteutettu koodinpätkä, jolla voi lukea tiedoston rivi riviltä.


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
