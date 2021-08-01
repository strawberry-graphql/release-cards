#!/bin/sh -l

cd /app

npm run build
npm run create-card -- "$@"

echo "Card done"

