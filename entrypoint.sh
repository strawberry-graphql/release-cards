#!/bin/sh -l

cd $GITHUB_WORKSPACE

npm install
npm run build
npm run create-card


echo "Card done"

