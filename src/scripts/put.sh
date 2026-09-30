#! /bin/bash

curl -X PUT http://localhost:3000/profiles/c3dfc31f-dad7-4f66-82d3-882927c43641 \
-H "Content-Type: application/json" \
-d '{"name": "Modified Doe", "description": "I am a software developer"}'