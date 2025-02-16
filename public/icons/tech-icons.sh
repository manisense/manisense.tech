#!/bin/bash

# List of required icons
ICONS=(
  "react-native"
  "flutter"
  "swift"
  "kotlin"
  "tensorflow"
  "pytorch"
  "python"
  "openai"
  "nodejs"
  "zapier"
  "make"
  "tailwind"
  "typescript"
)

# Create each icon as an SVG
for icon in "${ICONS[@]}"; do
  cat > "$icon.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <text x="12" y="12" text-anchor="middle" dominant-baseline="middle" font-size="8">
    ${icon}
  </text>
</svg>
EOF
done

echo "✅ Tech icons created!"
