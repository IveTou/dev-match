#! /bin/bash

curl -X PUT http://localhost:3000/profiles/c7c4a9ef-4897-419d-b2bd-23ba1aa7e4c1 \
-d '{"name": "Modified Doe", "description": "I am a software developer"}'