#!/bin/bash

cd "$(dirname "$0")"
pip install -r requirements.txt
pwd
mkdocs build
open http://127.0.0.1:8000/
mkdocs serve