#! /bin/bash

curl -X PUT http://localhost:3000/profiles/99966a6c-ccbf-42a9-8789-94ea1a6dd274 \
-d '{"name": "Modified Doe", "description": "I am a software developer"}'