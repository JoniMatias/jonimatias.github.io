# ASCII-merkistö

ASCII, eli amerikkalainen tiedonvälityksen vakiokoodisto (eng. *American standard code for information interchange*), on 1960-luvulla kehitetty tapa koodata kirjaimet numeroiksi tietokoneille. Alunperin IBM:n koneille kehitetty järjestelmä vakiinnutettiin Yhdysvaltain kansallisen standardointijärjestö (ANSI) toimesta hyvin pian sen kehittämisen jälkeen. 

Taustansa takia ASCII on rakennettu englantia puhuvan maailman, ja varsinkin Yhdysvaltojen ehdoilla. Mitään kansainvälistä merkistöä ei ASCII:ssa ole. Koodistossa näkyy myös historian painolasti IBM:n 1960-luvun tietokoneiden ja tulostimien ohjauskoodistona; merkeissä on paljon nykypäivänä turhia merkkejä, joita vanhat tulostimet ovat vaatineet toimiakseen.



## Näkymättömän ohjausmerkit

ASCII-merkistön alkupää on varattu vanhanaikaisten kirjoitus- ja tulostuskoneiden ohjausmerkeille. Iso osa näistä merkeistä on nykyään poistunut käytöstä, mutta muutama on säilyttänyt hyödyllisyytensä. Tärkeimmät edelleen käytössä olevat ovat **NUL**, **BS**, **LF**, **CR** ja **ESC**. 

 - **NUL**:ia käytetään C:ssä merkkijonojen lopetusmerkkinä.
 - **BS** poistaa kirjoitettuja merkkejä. Näppäimistöltä merkille löytyy edelleen nappi: askelpalautin (<nowrap><kbd>← Backspace</kbd></nowrap>), ja joissain ohjelmissa näppäimistö oikeasti tuottaakin tämän merkin.
 - **LF** on yleinen Unix-tietokoneiden rivinvaihtomerkki ("**L**ine **F**eed", eli "paperin" syöttö eteenpäin yhden rivin verran). Kaikissa tekstitiedostoissa käytetään **LF**-merkkiä.
 - **CR** on Windows-koneilla käytössä oleva rivinvaihtomerkki ("**C**arriage **R**eturn", eli "kirjoituspään kelkan" siirto alkuasemaansa eli rivin alkuun). Windows-koneilla jokainen rivivaihto merkitään kahdella merkillä, **CR** ja **LF** peräkkäin.
 - **ESC** on menettänyt merkityksensä, mutta näppäimistöllä on edelleen sille nappi. **ESC**:n alkuperäinen tarkoitus oli toimia *pakomerkkinä*, eli kertoa ettei **ESC**:iä seuraavaa merkkiä pidä lukea sen tavallisessa ASCII-merkityksessä. Nykyään vastaavassa käytössä on yleensä kenoviiva ```\```.


Alla oleva taulukko näyttää ASCII-merkistön mukaiset kirjaimet ja niiden numeerisen ilmaisun kymmen-, kahdeksan- (oktaali) ja kuusitoistajärjestelmässä (heksadesimaali).


| n<sub>10</sub> | n<sub>8</sub> | n<sub>16</sub> | Lyhenne | Kuvaus                     |
|-----|-----|-----|---------|----------------------------|
|    0|    0|    0| NUL     | (Null)                     |
|    1|    1|    1| SOH     | (Otsakkeen alkumerkki)     |
|    2|    2|    2| STX     | (Sisällön alkumerkki)      |
|    3|    3|    3| ETX     | (Sisällön lopetusmerkki)   |
|    4|    4|    4| EOT     | (Lähetyksen lopetusmerkki) |
|    5|    5|    5| ENQ     | (Pyyntö)                   |
|    6|    6|    6| ACK     | (Vahvistus)                |
|    7|    7|    7| BEL     | (Äänimerkki)               |
|    8|   10|    8| BS      | (Askelpalautin)            |
|    9|   11|    9| HT      | (Tabulaattori)             |
|   10|   12|    a| LF      | (Rivin vaihto)             |
|   11|   13|    b| VT      | (Pystytabulaattori)        |
|   12|   14|    c| FF      | (Sivunvaihto)              |
|   13|   15|    d| CR      | (Kelkan palautus)          |
|   14|   16|    e| SO      | (Värinauhan poisto)        |
|   15|   17|    f| SI      | (Värinauhan syöttö)        |
|   16|   20|   10| DLE     | (Verkon yli lähetettävä pakomerkki)    |
|   17|   21|   11| DC1     | Device Control yksi        |
|   18|   22|   12| DC2     | Device Control kaksi       |
|   19|   23|   13| DC3     | Device Control kolme       |
|   20|   24|   14| DC4     | Device Control neljä       |
|   21|   25|   15| NAK     | Kielteinen vahvistus       |
|   22|   26|   16| SYN     | (Yhtäaikaisen kommunikaation täytemerkki) |
|   23|   27|   17| ETB     | (Lähetyssivun lopetusmerkki) |
|   24|   30|   18| CAN     | (Komennon peruutus)          |
|   25|   31|   19| EM      | (Syötteen loppu)             |
|   26|   32|   1A| SUB     | (Täytemerkki)                |
|   27|   33|   1B| ESC     | (Escape / Pakomerkki)        |
|   28|   34|   1C| FS      | (Tiedostoerotin)             |
|   29|   35|   1D| GS      | (Ryhmäerotin)                |
|   30|   36|   1E| RS      | (Tallenne-erotin)            |
|   31|   37|   1F| US      | (Yksikköerotin)              |



## Tavalliset kirjainmerkit

ASCII-merkistössä on kaikki englanninkielen käyttämän kirjaimet ja yleisimmät erikoismerkit. Ääkköset ja muut eurooppalaiset kirjaimet puuttuvat näiden joukosta, puhumattakaan kyrillisistä, intialaisista tai kiinalaisista merkeistä.

Jos on kiinnostunut laajemmasta määrästä kirjaimia ja siitä miten tietokoneet käsittelevät niitä, kannattaa tutustua [Unicoden standardeihin](https://en.wikipedia.org/wiki/Unicode) ja [UTF-8-koodaukseen](https://en.wikipedia.org/wiki/UTF-8). Kaikki nämä standardit ovat täysin yhteensopivia ASCII-merkistön kanssa. Tällä sivulla esiteltyjen taulukkojen numeroarvot vastaavat myös näiden muiden standardien merkkeihin.

Alla oleva taulukko näyttää ASCII-merkistön mukaiset kirjaimet ja niiden numeerisen ilmaisun kymmen-, kahdeksan- (oktaali) ja kuusitoistajärjestelmässä (heksadesimaali).

| n<sub>10</sub> | n<sub>8</sub> | n<sub>16</sub> | Kuvaus                    |
|-----|-----|-----|---------------------------|
|   32|   40|   20| (Välilyönti)              |
|   33|   41|   21| !                         |
|   34|   42|   22| "                         |
|   35|   43|   23| #                         |
|   36|   44|   24| $                         |
|   37|   45|   25| %                         |
|   38|   46|   26| &                         |
|   39|   47|   27| '                         |
|   40|   50|   28| (                         |
|   41|   51|   29| )                         |
|   42|   52|   2A| *                         |
|   43|   53|   2B| +                         |
|   44|   54|   2C| ,                         |
|   45|   55|   2D| -                         |
|   46|   56|   2E| .                         |
|   47|   57|   2F| /                         |
|   48|   60|   30| 0                         |
|   49|   61|   31| 1                         |
|   50|   62|   32| 2                         |
|   51|   63|   33| 3                         |
|   52|   64|   34| 4                         |
|   53|   65|   35| 5                         |
|   54|   66|   36| 6                         |
|   55|   67|   37| 7                         |
|   56|   70|   38| 8                         |
|   57|   71|   39| 9                         |
|   58|   72|   3A| :                         |
|   59|   73|   3B| ;                         |
|   60|   74|   3C| <                         |
|   61|   75|   3D| =                         |
|   62|   76|   3E| >                         |
|   63|   77|   3F| ?                         |
|   64|  100|   40| @                         |
|   65|  101|   41| A                         |
|   66|  102|   42| B                         |
|   67|  103|   43| C                         |
|   68|  104|   44| D                         |
|   69|  105|   45| E                         |
|   70|  106|   46| F                         |
|   71|  107|   47| G                         |
|   72|  110|   48| H                         |
|   73|  111|   49| I                         |
|   74|  112|   4A| J                         |
|   75|  113|   4B| K                         |
|   76|  114|   4C| L                         |
|   77|  115|   4D| M                         |
|   78|  116|   4E| N                         |
|   79|  117|   4F| O                         |
|   80|  120|   50| P                         |
|   81|  121|   51| Q                         |
|   82|  122|   52| R                         |
|   83|  123|   53| S                         |
|   84|  124|   54| T                         |
|   85|  125|   55| U                         |
|   86|  126|   56| V                         |
|   87|  127|   57| W                         |
|   88|  130|   58| X                         |
|   89|  131|   59| Y                         |
|   90|  132|   5A| Z                         |
|   91|  133|   5B| [                         |
|   92|  134|   5C| \                         |
|   93|  135|   5D| ]                         |
|   94|  136|   5E| ^                         |
|   95|  137|   5F| _                         |
|   96|  140|   60| `                         |
|   97|  141|   61| a                         |
|   98|  142|   62| b                         |
|   99|  143|   63| c                         |
|  100|  144|   64| d                         |
|  101|  145|   65| e                         |
|  102|  146|   66| f                         |
|  103|  147|   67| g                         |
|  104|  150|   68| h                         |
|  105|  151|   69| i                         |
|  106|  152|   6A| j                         |
|  107|  153|   6B| k                         |
|  108|  154|   6C| l                         |
|  109|  155|   6D| m                         |
|  110|  156|   6E| n                         |
|  111|  157|   6F| o                         |
|  112|  160|   70| p                         |
|  113|  161|   71| q                         |
|  114|  162|   72| r                         |
|  115|  163|   73| s                         |
|  116|  164|   74| t                         |
|  117|  165|   75| u                         |
|  118|  166|   76| v                         |
|  119|  167|   77| w                         |
|  120|  170|   78| x                         |
|  121|  171|   79| y                         |
|  122|  172|   7A| z                         |
|  123|  173|   7B| {                         |
|  124|  174|   7C| \|                        |
|  125|  175|   7D| }                         |
|  126|  176|   7E| ~                         |

## Ylimääräiset ohjausmerkit

Jostain syystä ASCII-taulukon viimeinen arvo on myös näkymätön ohjausmerkki. Todennäköisesti merkki keksittiin lisätä koodistoon vasta myöhemmin, jolloin alkupäässä ei ollut enää tilaa.

| n<sub>10</sub> | n<sub>8</sub> | n<sub>16</sub> | Lyhenne | Kuvaus                     |
|-----|-----|-----|---------|----------------------------|
|  127|  177|   7F| DEL     | (Poista merkki nauhalta)                  |
