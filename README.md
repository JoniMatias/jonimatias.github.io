# Tämä on testisivu TOL:n lisäopetusmateriaalin rakentamiseksi


Sivusto on kirjoitettu kokonaan markdownlinna, ja käyttää MkDocsia tiedostojen kääntämiseksi. Sivuston muokkaamisen kannalta kannattaa osata ainakin markdownin ja MkDocsin alkeet.

MkDocsin lisäpalikoista tällä sivustolla on käytössä:

 - mkdocs-material
 - [awesome-nav](https://lukasgeiter.github.io/mkdocs-awesome-nav/) (Josta osa on piilotettu css:llä.)
 - [tags](https://jimandreas.github.io/mkdocs-material/setup/setting-up-tags/)
 - [charts](https://timvink.github.io/mkdocs-charts-plugin/usage/)
 - [admonition](https://jimandreas.github.io/mkdocs-material/reference/admonitions/)
 - smarty
 - [md-in-html](https://github.com/Python-Markdown/markdown/blob/master/docs/extensions/md_in_html.md) (mahdollistaa markdownin kirjoittamisen html-tagien sisään.)




## Puukotukset

Osaa käytetyistä lisäosista on puukotettu vähän omalla css:llä, jotta ne taipuisivat sivuston tarpeisiin.

### Admonition

MkDocsin admonition lisäosa on näppärä palikka pienten korostusikkunoiden luomiseen tekstin sekaan. Tavallisen käytön lisäksi tällä sivustolla on käytössä ylimääräinen admonition-tyyppi: ```shell```. Se muotoilee sisällön komentorivin näköiseksi.

Komentorivin sisällön saa tehtyä seuraavalla muotoilulla:

```
!!! shell "otsikko lainausmerkkien sisällä"
    C54W4KDHGK:kuvia jonrajal$ for tiedosto in kuva-[0-9][0-9].jpg; do echo $tiedosto; done
    kuva-08.jpg
    kuva-10.jpg
    kuva-54.jpg
```

Komentorivin sisältö pitää sisentää neljän välilyönnin verran, jotta MkDocs tunnistaa sen admonitionin sisällöksi.

#### Kummallisuuksia

Toisin kuin muut admonitionit, ```shell``` oletuksena säilyttää kaikki tyhjät merkit (whitespace), eikä tiivisstä niitä tavallisen html:n tavoin. Jos haluat säilyttää html-muotoilun teksillä, laita ```shell```ille lisätagi ```html-whitespace```. 

```
!!! shell html-whitepace "otsikko lainausmerkkien sisällä"
    C54W4KDHGK:kuvia jonrajal$ for tiedosto in kuva-[0-9][0-9].jpg; do echo $tiedosto; done<br>
    kuva-08.jpg<br>
    kuva-10.jpg<br>
    kuva-54.jpg<br>
```

```shell``` tukee myös interaktiivisia korostuksia. Jos haluat korostaa jotain osaa komentorivin tekstistä, kun käyttäjä siirtää hiiren osoittimen minne tahansa admonitionin päälle, voit ympäröidä korostettavan tekstit <pop>-tageilla.

```
!!! shell "otsikko lainausmerkkien sisällä"
    C54W4KDHGK:kuvia jonrajal$ for tiedosto in kuva-[0-9][0-9].jpg; do echo $tiedosto; done
    kuva-08.jpg
    <pop>kuva-10.jpg</pop>
    kuva-54.jpg
```

