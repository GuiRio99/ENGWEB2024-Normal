import csv
import json

csv_file_path = 'contratos2024.csv'  # Path to your CSV file
json_file_path = 'contratos2024.json'  # Path to save the JSON file

data = []

# Read CSV file and convert to JSON
with open(csv_file_path, 'r', encoding='utf-8-sig') as csv_file:  # Open the CSV file in 'utf-8-sig' encoding to handle BOM
    csv_reader = csv.reader(csv_file, delimiter=';')
    headers = next(csv_reader)  # Read the first row as headers
    for row in csv_reader:
        item = {}
        for i in range(len(headers)):
            item[headers[i]] = row[i]
        data.append(item)

# Write JSON data to file
with open(json_file_path, 'w', encoding='utf-8') as json_file:  # Open the JSON file with 'utf-8' encoding
    json.dump(data, json_file, indent=4, ensure_ascii=False)

