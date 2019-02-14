#!/bin/bash
# Note: do not do set -x or the passwords will leak!
set -e

echo "Doing a release..."
git config credential.helper store
echo "https://${GH_USERNAME}:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials

npm config set "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" -q
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
npm prune

git config --global user.email "patternfly-build@redhat.com"
git config --global user.name "patternfly-build"
git config --global push.default simple

# helpful for debugging any lerna EUNCOMMIT errors
git status --short;
yarn run lerna changed
yarn run lerna:publish