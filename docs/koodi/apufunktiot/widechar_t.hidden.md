


Antin Slack-kommentin perusteella:

Luulen että sain tuon C-toteutuksen Aakkoset -tehtävästä toimimaan. Ainakin se tulostaa yhtä monta kertaa true kuin Swiftillä tehty ratkaisu. Aluksi pitää mainissa:

```
char * locale = setlocale(LC_ALL, "fi_FI.UTF-8");
```

Sitten joka paikassa char sijaan pitää käyttää wchar_t ja esim. tiedoston lukeminen menee näin (huom fwide -kutsu jolla kerrotaan että luetaan utf-merkkejä, ei asciita:

```
wchar_t ** readFile(const char * fileName) {

	static const int MAX_LINE_LENGTH = 100;
	
	FILE * inputFile = fopen(fileName, "r");
	if (inputFile == NULL) {
		return NULL;
	}
	fwide(inputFile, 1);
	
	wchar_t line[MAX_LINE_LENGTH];
	ssize_t read = 0;
	
	int currentCapacity = DEFAULT_ELEMENT_COUNT;
	wchar_t ** lines = malloc(currentCapacity * sizeof(wchar_t*));
	int index = 0;
	
	while ((fgetws(line, MAX_LINE_LENGTH, inputFile)) != NULL) {
		if (index == currentCapacity - 2) {
			lines = realloc(lines, currentCapacity * 2 * sizeof(wchar_t*));
			currentCapacity *= 2;
		}
		lines[index] = clean(line, read);
		index++;
	}
	lines[index] = NULL;
	
	fclose(inputFile);
	
	return lines;
}
```

Joka palauttaa pointterin wchar_t -taulukkoon joka sisältää wchar_t pointtereita tiedostosta luettuihin sanoihin (riveihin). Esim. se logiikka joka tarkistaa onko sanan kirjaimet aakkosjärjestyksessä on tällainen:

```
const wchar_t * checkLine(const wchar_t * line) {
	size_t len = wcslen(line);
	bool isInOrder = true;
	for (int index = 1; index < len; index++) {
		if (iswalpha(line[index]) && iswalpha(line[index - 1])) {
			if (line[index - 1] > line[index]) {
				isInOrder = false;
				break;
			}
		}
	}
	return isInOrder ? L"true" : L"false";
}
```

Eli joka paikasssa pitää käyttää noita wide -funktioita, normien strlen, isalpha, jne tilalta. Ja vakiomerkkijonojen edessä pitää olla L jos se on wchar_t.

Mahdollista siis tehdä, mutta varmaankin pitäisi a) antaa aika paljon valmista koodia, esim. tuo tiedoston lukeminen ja b) varmistaa että komentorivillä OS:ssa on varmasti oikea locale käytössä ja terminaali pystyy ne hoitamaan ja c) vähän selittääkin jossain tätä char/ wchar_t -hässäkkää ja että joka paikassa merkkitietoa käsitellessä, omissakin funktioissa, niitä pitää sitten käyttää. Esimerkkejäkin näistä pitäisi antaa ja varmaankin lista hyödyllisistä funktioista.

Ja sitten tosiaan sekin pitää varmistaa että se sivustolta saatu tekstitiedosto on varmasti tallennettu utf-8 -muodossa.

Aikamoinen selvittäminen tuossa oli, ja esim. tässä macOS:n kehitysympäristössä ei ollut ollenkaan standardissa määriteltyä getwline-funktiota (joka tosin pitäisi ottaa tietyillä #define:illa käyttöön sekin) vaan piti löytää tuo fgetws jolla homma hoituu.