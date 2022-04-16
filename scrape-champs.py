import csv
import requests
from bs4 import BeautifulSoup


url = 'https://www.ncaa.com/history/basketball-women/d1'
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
html = response.content

soup = BeautifulSoup(html, features="html.parser")
table = soup.find('tbody')

list_of_rows = []
for row in table.find_all('tr'):
    list_of_cells = []
    for cell in row.find_all('td'):
        text = cell.text.strip()
        list_of_cells.append(text)
    list_of_rows.append(list_of_cells)

outfile = open("./ncaa-champs.csv", "w")
writer = csv.writer(outfile)
writer.writerow(["year", "champion_record", "coach", "score", "runner_up", "location"])
writer.writerows(list_of_rows)
