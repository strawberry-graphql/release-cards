#!/bin/sh -l

pwd
ls -la

npm run start &
npm run create-card

echo "Card done"

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT
