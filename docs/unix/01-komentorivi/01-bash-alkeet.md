# Komentorivin alkeet

Ennen kuin 1980-luvulla tietokoneille kehitettiin graafiset, ikkunoihin pohjautuvat käyttöliittymät, tietokoneita käytettiin ainoastaan tekstipohjaisen komentorivin kautta. Kun graafiset käyttöliittymät yleistyivät, komentorivit kuitenkin jäivät osaksi tietokoneita muutamasta eri syystä:

 - Paljon ohjelmia oli jo luotu käyttämään vain komentoriviä
 - Komentorivisovellusten ohjelmoiminen oli helpompaa, koska visuaalista puolta ei tarvinnut miettiä.
 - Monet ohjelmat ovat vain taustasovelluksia, jotka eivät edes tarvitse visuaalista esitystapaa.
 - Komentorivillä oli paljon sisäänrakennettuja automaatio-ominaisuuksia, joille ei ole vielä nykyäänkään standardoitua vaihtoehtoa graafisille käyttöliittymille.
 - Komentorivi on tehokas työkalu ohjelmien väliseen kommunikaatioon. 

Näistä syistä komentorivi on edelleenkin hyvin tärkeä työkalu ohjelmoijille ja tietokoneiden kanssa työskenteleville. Jos tietokoneesta haluaa ottaa kaiken hyödyn irti, komentorivi on käytännössä pakollinen.

## Komentorivin käynnistäminen

Komentorivin käynnistäminen on helppoa. Kaikissa tietokoneissa on valmiiksi asennettuna jonkinlainen *pääteohjelma*, jolla pääsee käsiksi komentoriviin. Windows-käyttäjille se on *cmd.exe*, MacOS-koneilla ohjelman nimi on *Pääte* (eng. *Terminal*) ja Ubuntulla (joka on yleisin Linux-käyttöjärjestelmä) se on *gnome-terminal*. 

=== "Pääte (MacOS)"
    Helpoin tapa käynnistää *Pääte* on käyttää MacOS spotlight-toimintoa. Paina oikean yläkulman suurennuslasia (tai paina yhtäaikaa <kbd>⌘ Command</kbd> + <kbd> Välilyönti</kbd>), ja kirjoita ilmestyvään hakukenttään Pääte (jos koneesi on englanniksi, niin kirjoita Terminal) ja paina enteriä.

    Toinen tapa avata *Pääte* on mennä Finderilla Apit (eng. *Apps*) kansioon, löytää sieltä Apuohjelmat-kansio (eng. *Utilities*) ja käynnistää *Pääte.app* sieltä.

    ![](./macos-paate-alku.png)

    Kun saat *Päätteen* avattua, eteesi pitäisi avautua valkotaustainen ikkuna, jossa on mustaa tekstiä. 

    MacOS:n oletustulkki on nykyään *zsh*, ja tämä sivusto käsittelee pääasiallisesti *bashia*. Tämän sivuston näkökulmasta näillä kahdella ei ole merkittäviä eroja, mutta jos haluat vaihtaa tulkin samaksi kuin mitä tällä kurssilla käytetään, aja komento ```chsh -s /bin/bash``` ja syötä salasanasi sitä pyydettäessä. ```chsh```-komento vaihtaa käyttäjän perusasetuksia, ja ```-s```-lippu kertoo komennolle, että kyseessä on tulkin (eng. *shell*) vaihto.

    Jos päätät vaihtaa tulkin *bashiksi*, kannattaa huomioida että Applen koneilla oleva *bashin* versio on jo kohta 20 vuotta vanha. Toiminnallisuuteen se ei suuresti vaikuta, mutta tietoturvapäivityksiä siinä ei ole mukana. Jos haluat asentaa *bashin* uudemman version koneellesi, kannattaa lukea ohjeet [komentoriviohjelmien asentamisesta](../01-komentorivi/04-asennus.md), ja sitten ladata Homebrewillä *bash*.

=== "Terminal (Ubuntu)"
    **TODO:** Miten Terminal käynnistetään Ubuntussa.

    *Bash* on oletustulkki Ubuntulla, joten tämän sivuston ohjeistus toimii Ubuntun komentorivillä suoraan.


=== "cmd.exe (Windows)"
    Windows piilottaa oman komentorivipäätteensä käyttäjältä. Helpoin tapa käynnistää komentorivi on kirjoittaa aloitusvalikon hakukenttään cmd.exe, ja käynnistää löytynyt ohjelma. 

    Kun saat pääteohjelman päälle, niin eteesi pitäisi avautua mustataustainen ikkuna valkoisella tekstillä.

    **TODO:** Kuva cmd.exe:stä.



## Komentorivin osat

Komentorivien käyttöä varten tietokone tarvitsee kolme eri komponenttia: päätteen, tulkin ja komentokehotteen.

!!! warning inline end fasdas "Windows-käyttäjille"
    Tämä sivu käsittelee *bashia*, joka on Unix-pohjaisten käyttöjärjestelmien yleisin tulkki. Jos haluat käyttää näitä komentoja Windows-koneella, niin sinun pitää asentaa koneellesi **wsl**, eli Windows Subsystem for Linux. wsl
    
    Jos haluat käyttää Windowsin omaa päätettä ja tulkkia, niin sen ohjeet löytyvät [täältä](./windows-komennot.md).

**Pääte** on ohjelma, jolla voi suorittaa tekstikomentoja. Pääte joko virtualisoi vanhemman käyttöjärjestelmäympäristön, tai se on rakennettu graafisen käyttöliittymän päälle. Käyttäjälle pääte näkyy yleensä ikkunana, johon komennot kirjoitetaan. Yleensä pääteen käyttäjä voi valita mitä tulkkia pääte käyttää. Aikaisemmassa luvun ohjeet kertoivatkin miten pääte käynnistetään.


**Komentorivien tulkkeja**, ts. **shell**ejä, on useita erilaisia. Yleisimmät niistä on *bash* ja *zsh*. Microsoft käyttää omassa päätteessään joko *PowerShelliä* tai vanhempaa MS-DOS:ista periytyvää *cmd.exeä*. Tulkeissa on pieniä ja suuria eroja sen mukaan mitä komentoja ne tukevat, miten komennot täytyy kirjoittaa ja miten komennot tarkalleen ottaen toimivat. Tällä sivustolla käsitellään pääasiallisesti *bash*-tulkin ymmärtämiä komentoja.

**Komentokehote** on päätteen kohta, joka kertoo päätteen olevan tilassa, jossa käyttäjä voi antaa sille komentoja. Komentokehotteen tarkemmasta muotoilusta vastaa tulkki. Komentokehote yleensä näyttää jotain tietoa tulkin tämänhetkisestä tilasta ja pyytää käyttäjää kirjoittamaan komennon.

### Kehotteen muotoja

=== "cmd.exe"
    Windowsin komentorivitulkin kehotteessa näytetään vain [absoluuttinen polku](../00-intro/01-tiedostot.md#taysi-eli-absoluuttinen-polku) aktiiviseen kansioon.
    !!! shell "cmd.exe"
        C:\Windows\System32>
    
=== "bash"
    *bashissä* komentokehote on muotoa ```tietokoneen_nimi:aktiivinen_kansio käyttäjä$```. Kehotteen dollarimerkin jälkeen käyttäjä voi syöttää haluamansa komennon.
    !!! shell "bash: Kehote"
        **C54W4KDHGK**:~ jonrajal$ 

    Ylläolevassa esimerkissä aktiiviseksi kansioksi on merkitty ```~```. Merkkiä ```~``` käytetään oikotienä/lyhenteenä käyttäjän kotihakemistolle. Jos käyttäjän aktiivinen kansio on jokin muu kansio kuin hänen kotihakemistonsa, niin kehote näyttää sen kansion nimen.

    !!! shell "bash: Kehote kansiossa"
        **C54W4KDHGK**:tol-alkeet jonrajal$


## Aktiivinen kansio

Samoin kuin graafisen käyttöliitymän tiedostoikkunoissa, komentorivillä on yksi aktiivinen kansio kerralla auki. Käytännössä kaikki komennot ajetaan aktiivisessa kansiossa. Graafisella ikkunalla tämän kansion sisältö näkyy kerralla, mutta komentorivillä kansion sisällön tarkasteluun tarvitaan komento ```ls```. Se listaa kaikki tämänhetkisen kansion tiedostot.

!!! shell "bash: ls"
    **C54W4KDHGK**:tol-alkeet jonrajal$ <pop>ls</pop><br>
    <span class="bash-table-element bash-purple">html-kansio/</span>
    <span class="bash-table-element bash-purple">kuvia/</span>
    <span class="bash-table-element">README.txt</span>
    <span class="bash-table-element">teksti.txt</span>
    <span class="bash-table-element">toinen.txt</span>
    <span class="bash-table-element">uusi.txt</span>

Aktiivista kansiota voi vaihtaa ```cd```-komennolla. ```cd kansion_nimi``` vaihtaa aktiivisen kansion nykyisen aktiivisen kansion alikansioon, jolla on annettu nimi. ```cd ..`` siirtää aktiivista kansiota yhden kansiota yhden askeleen ylöspäin; nykyisen aktiivisen kansion yläkansioon.

