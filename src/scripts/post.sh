#! /bin/bash

curl -X POST http://localhost:3000/profiles \
-H "Content-Type: application/json" \
-d '{"name": "Maya", "description": "I am a software engineer"}'

#bash post.sh