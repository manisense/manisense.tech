#!/bin/bash

# Create social media icons
cat > twitter.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4 4 0 0 0-7.09 3.79c-3.14-.2-6.02-1.59-7.93-3.79a4 4 0 0 0 1.24 5.33 4 4 0 0 1-1.82-.5v.05a4 4 0 0 0 3.19 3.91 4 4 0 0 1-1.82.07 4 4 0 0 0 3.73 2.77 8 8 0 0 1-5.91 1.65 11.3 11.3 0 0 0 6.13 1.79c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51a8.2 8.2 0 0 0 2-2.09z"/>
</svg>
EOF

cat > linkedin.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
  <rect x="2" y="9" width="4" height="12"/>
  <circle cx="4" cy="4" r="2"/>
</svg>
EOF

cat > github.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>
EOF

chmod +x social-icons.sh
