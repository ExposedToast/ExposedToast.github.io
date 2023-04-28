#!/bin/bash

# Force delete DATA.txt if it exists
rm -f json/DATA.txt

# Verify DATA.txt is deleted
if [ -f "json/DATA.txt" ]; then
  echo "DATA.txt was not deleted"
  exit 1
else
  echo "DATA.txt successfully deleted"
fi
