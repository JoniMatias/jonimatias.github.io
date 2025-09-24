#!/bin/bash

cd "$(dirname "$0")"
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pwd
mkdocs build

sftp jznnwlgc@hotelli14.domainhotelli.fi

open http://127.0.0.1:8000/
mkdocs serve