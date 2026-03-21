#!/bin/bash

# Navigate to the directory of this script
cd "$(dirname "$0")"

echo "Checking dependencies..."
npm install

echo "Starting development server..."
npm run dev
