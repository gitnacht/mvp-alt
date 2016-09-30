#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    # Initialize a new git repo in _site, and push it to our server.
    cd site
    git init

    git remote add deploy "deploy@159.203.82.27:/www/"
    git config user.name "Travis CI"
    git config user.email "jonas@steps.fm"

		git status
    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
