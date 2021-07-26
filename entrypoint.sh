#!/bin/sh -l

cd $GITHUB_WORKSPACE

npm install
npm run build
npm run create-card -- $1 $2 $3


echo "Card done"

