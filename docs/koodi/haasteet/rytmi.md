# Rytmi

Bändin rumpalina on kiva olla, mutta joskus vain ottaa päähän hakata samaa humpappaa-rytmiä päivästä toiseen. Eikö tätä voisi jotenkin automatisoita, että keikoilla voisi vain fiilistellä ilman käsien ylimääräistä heiluttelua?

Luo algoritmi, joka ottaa vastaan musiikin tahdin iskuina minuutissa (bpm), ja laskee iskujen väliset ajat millisekunteina. Annetussa syötteessä on myös annettu rytmi, joka noudattaa seuraavaa muotoilua:

!!! info "Rytmimerkit"
    - X - Tämä isku pitää merkitä
    - _ _ Tätä iskua ei merkitä

Syöte alkaa bpm-arvolla, jonka jälkeen tulee puolipiste, ja sen jälkeen tarvittavat iskut. Syötetiedostossa rivit voivat siis olla vaikka seuraavanlaisia: `113;X__XX_X`.
