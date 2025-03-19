#!/bin/bash

# Check if the combined file exists
if [ -f "ios_downloads_combined.csv" ]; then
  # If combined file exists, use it directly
  cp ios_downloads_combined.csv ios_downloads.csv
  echo "Using pre-combined iOS download data."
else
  # Try to combine parts if they exist
  if [ -f "ios_downloads.csv" ]; then
    # Create header from first file
    head -n 5 ios_downloads.csv > ios_downloads_temp.csv
    
    # Combine all the data parts, skipping the headers
    tail -n +6 ios_downloads.csv >> ios_downloads_temp.csv
    
    # Try to append part files if they exist
    for part in ios_downloads_part*.csv; do
      if [ -f "$part" ]; then
        cat "$part" >> ios_downloads_temp.csv
      fi
    done
    
    # Move combined file to replace original
    mv ios_downloads_temp.csv ios_downloads.csv
    
    # Optional: Remove part files after combining
    rm -f ios_downloads_part*.csv 2>/dev/null
    
    echo "Combined multiple iOS download data files."
  else
    echo "Warning: No iOS download data files found."
  fi
fi

echo "iOS download data preparation complete."
