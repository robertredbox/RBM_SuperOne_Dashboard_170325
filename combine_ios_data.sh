#!/bin/bash

# This script prepares iOS download data
# It either uses a pre-combined file or combines multiple part files

# Set file permissions if needed
chmod +x "$0"

echo "Starting iOS data preparation..."

# Define input and output file names
INPUT_FILE="superone ios countries downloads.csv"
OUTPUT_FILE="ios_downloads.csv"

# Check if the ios_downloads.csv file was already provided
if [ -f "$OUTPUT_FILE" ]; then
  echo "Using existing iOS download data file: $OUTPUT_FILE"
  exit 0
fi

# Check if the original file with country data exists
if [ -f "$INPUT_FILE" ]; then
  echo "Found original iOS data with country breakdown: $INPUT_FILE"
  # No need to process further as the component now reads this file directly
  echo "The PlatformDownloads component will read the country data directly."
  exit 0
fi

# Check if the combined file exists
if [ -f "ios_downloads_combined.csv" ]; then
  # If combined file exists, use it directly
  cp ios_downloads_combined.csv "$OUTPUT_FILE"
  echo "Using pre-combined iOS download data."
  exit 0
fi

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
  mv ios_downloads_temp.csv "$OUTPUT_FILE"
  
  # Optional: Remove part files after combining
  # rm -f ios_downloads_part*.csv 2>/dev/null
  
  echo "Combined multiple iOS download data files."
else
  echo "Warning: No iOS download data files found."
  # Create an empty structure for iOS downloads if needed
  echo "Name,Super.One Fan Battle" > "$OUTPUT_FILE"
  echo "Created empty iOS data structure."
fi

echo "iOS download data preparation complete."
