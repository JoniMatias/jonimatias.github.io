#!/bin/bash

echo "-----ALKU--------"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR

pwd

echo "kortit" >> ./_site/tavaratalo/asiakas/kortit.csv

for file in *.html
do
echo "$file" >> ./_site/tavaratalo/asiakas/kortit.csv
done


echo "kortit" >> ./_site/tavaratalo/kulttuuri/kortit.csv

for file in *.html
do
echo "$file" >> ./_site/tavaratalo/kulttuuri/kortit.csv
done


echo "kortit" >> ./_site/tavaratalo/pakka/kortit.csv

for file in *.html
do
echo "$file" >> ./_site/tavaratalo/pakka/kortit.csv
done


echo "-----LOPPU--------"
