#!/bin/bash

# Create main service directories
mkdir -p public/images/services/{websites,mobile,ai,automation}
mkdir -p public/icons
mkdir -p public/downloads
mkdir -p public/templates

# Create placeholder images directory for each service
for service in websites mobile ai automation; do
  mkdir -p "public/images/services/$service/screenshots"
  touch "public/images/services/$service/hero.jpg"
done

# Create icon directories
mkdir -p public/icons/{tech,social}

# Create template directories
mkdir -p public/templates/{websites,mobile,ai,automation}

echo "✅ Project directories created successfully!"
