#!/bin/bash

while read fullpath; do
  path="$(dirname $fullpath)"
  extension="${fullpath##*.}"
  filename="$(basename $fullpath)"
  filename="${filename%.*}"
  while read url; do
    wget -O "${path}/${filename}.jpg" "$url"
  done < <(kraken --file="$original" --lossy --quality=50 --convert='{"format": "jpeg"}' | egrep -o 'http.*jpg)
  # rm .tmp # cleanup
done < <(find . -type f | egrep '.*(jpg|png|gif|jpeg)')
