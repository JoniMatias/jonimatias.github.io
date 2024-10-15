#!/bin/bash

while getopts i:o: opt; do
case $opt in
    i) input=$OPTARG ;;
    o) output=$OPTARG ;;
esac
done


if test -z "$input"
then
  echo "No input file"
  exit 1
fi

input_nopath="${input##*/}"
input_name="${input_nopath%.*}"

if test -z "$output"
then
     output="$input_name.mp4"
fi

ffmpeg -i "$input" -pix_fmt yuv420p -vf "scale=480:-1" "$output"
