#!/bin/bash

cd "$(dirname "$0")"
cd docs/koodi

echo "<!-- Tämä on generoitu tiedosto, älä muokkaa tätä. -->" > "./koodi_toc.md"
cat ./koodi.md >> "./koodi_toc.md"
echo "<div class=\"grid cards\" markdown>" >> "./koodi_toc.md"

for file in ./haasteet/*.md
do 
title="$(head -1 $file)"
diff="$(head -3 $file)"
category="$(head -4 $file)"
echo -e "\n-   [$(head -1 $file)]($file)\n" >> "./koodi_toc.md"
done

echo -e "\n</div>" >> "./koodi_toc.md"