def decreasing_name (name):
  letters = list(name)
  for index in range(len(letters)):
    print(''.join(letters[0: len(letters) - index]))
    # letters = [f_letter for f_letter in letters if f_letter != letter]

# decreasing_name('PEDRO')

import json
import csv

with open('data.json') as file:
  book_data = json.load(file)

def total_categories(data):
  categories = {}
  for book in data:
    for category in book['categories']:
      if not categories.get(category):
        categories[category] = 0
      categories[category] += 1
  return categories

def percentage_of_total(total, categories):
  return [
    [category, c_count / total]
    for category, c_count in categories.items()
  ]

save_data = percentage_of_total(len(book_data), total_categories(book_data))

def write_csv_report(file, header, rows):
  writer = csv.writer(file)
  writer.writerow(header)
  writer.writerows(rows)

with open('result.csv', 'w') as file:
  write_csv_report(file, ['categoria', 'percentagem'], save_data)