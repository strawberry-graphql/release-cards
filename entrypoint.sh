#!/bin/sh -l

npm install
npm run build
time=$(date)
echo "::set-output name=time::$time"
