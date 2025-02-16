#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/services/{websites,mobile,ai,automation}/{screenshots,hero}
mkdir -p public/testimonials
mkdir -p public/icons

# Create placeholder images using base64 data URIs
for dir in public/images/services/*/screenshots; do
  for i in {1..3}; do
    touch "$dir/screen-$i.jpg"
  done
done

for dir in public/images/services/*/hero; do
  touch "$dir/hero.jpg"
done

for i in {1..3}; do
  touch "public/testimonials/$i.jpg"
done

echo "✅ Placeholder images created"
