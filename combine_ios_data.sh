#!/bin/bash

# Create header from first file
head -n 5 ios_downloads.csv > ios_downloads_combined.csv

# Combine all the data parts, skipping the headers
tail -n +6 ios_downloads.csv >> ios_downloads_combined.csv
cat ios_downloads_part2.csv >> ios_downloads_combined.csv
cat ios_downloads_part3.csv >> ios_downloads_combined.csv
cat ios_downloads_part4.csv >> ios_downloads_combined.csv
cat ios_downloads_part5.csv >> ios_downloads_combined.csv
cat ios_downloads_part6.csv >> ios_downloads_combined.csv

# Move combined file to replace original
mv ios_downloads_combined.csv ios_downloads.csv

# Optional: Remove part files after combining
rm ios_downloads_part*.csv

echo "iOS download data combined successfully."
