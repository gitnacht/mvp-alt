#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_5b76d4a8d6f2_key -iv $encrypted_5b76d4a8d6f2_iv -in chathappens_deploy.enc -out chathappens_deploy -d
rm chathappens_deploy.enc # Don't need it anymore
chmod 600 chathappens_deploy
mv chathappens_deploy ~/.ssh/id_rsa
