#!/bin/bash

echo "running";

if [ ! -f ".env" ]; then
    cp .env.example .env
fi
echo "copied";
npm install
echo "installed";
npm run start:dev
echo "running";