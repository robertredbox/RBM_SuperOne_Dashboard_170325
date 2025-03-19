#!/bin/bash

# This script prepares iOS download data
# It either uses a pre-combined file or combines multiple part files

# Set file permissions if needed
chmod +x "$0"

# Check if the ios_downloads.csv file was provided directly
if [ -f "ios_downloads.csv" ]; then
  echo "Using provided iOS download data file."
  exit 0
fi

# Check if the combined file exists
if [ -f "ios_downloads_combined.csv" ]; then
  # If combined file exists, use it directly
  cp ios_downloads_combined.csv ios_downloads.csv
  echo "Using pre-combined iOS download data."
else
  # Try to combine parts if they exist
  if [ -f "ios_downloads_part1.csv" ]; then
    # Create header from first file
    head -n 1 ios_downloads_part1.csv > ios_downloads_temp.csv
    
    # Combine all the data parts, skipping the headers
    for part in ios_downloads_part*.csv; do
      if [ -f "$part" ]; then
        echo "Appending $part"
        tail -n +2 "$part" >> ios_downloads_temp.csv
      fi
    done
    
    # Move combined file to replace original
    mv ios_downloads_temp.csv ios_downloads.csv
    
    # Optional: Remove part files after combining
    # rm -f ios_downloads_part*.csv 2>/dev/null
    
    echo "Combined multiple iOS download data files."
  else
    echo "Warning: No iOS download data files found."
    # Create an empty structure for iOS downloads if needed
    echo "Name,Super.One Fan Battle" > ios_downloads.csv
  fi
fi

echo "iOS download data preparation complete."
