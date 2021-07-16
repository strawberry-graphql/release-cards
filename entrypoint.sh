#!/bin/sh -l

npm run build
time=$(date)
echo "::set-output name=time::$time"
