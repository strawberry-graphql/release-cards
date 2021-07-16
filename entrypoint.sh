#!/bin/sh -l

npm install
npm run dev &

npm run create-card

echo "Card done"

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT
