#! /bin/bash

curl -X PUT http://localhost:3000/profiles/3434f0e1-bd73-49d0-a16e-0089df5bba742 \
-H "Content-Type: application/json" \
-d '{"name": "Modified Doe", "description": "I am a software developer"}'