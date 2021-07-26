#!/bin/sh -l

cd /app

DEBUG=pw:api PWDEBUG=console npm run create-card

echo "Card done"

