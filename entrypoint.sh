#!/bin/sh -l

cd $GITHUB_WORKSPACE

npm install -g playwright
playwright install-deps chromium

npm install
npm run build
npm run create-card -- "$@"


echo "Card done"

