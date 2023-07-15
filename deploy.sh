#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

# Build the app
npm run build

# Go to the build directory
cd build

# Create a new git repository
git init

# Add all files to the new repository
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push the changes to the gh-pages branch of the remote repository
git push --force "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages