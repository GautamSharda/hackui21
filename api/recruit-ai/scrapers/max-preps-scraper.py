from bs4 import BeautifulSoup
import pandas as pd
import requests

name = []
school = []
games = []
points = []
assists = []
rebounds = []
steals = []
blocks = []

for i in range(1, 11):
    url = "https://www.maxpreps.com/leaders/basketball-winter-19-20/,scoring/stat-leaders-" + str(i) + ".htm"
    page = requests.get( url )
    soup = BeautifulSoup( page.content , 'html.parser')


    players = soup.find_all('tr')

    for value in players:
        player_name=value.find('th', attrs={'class':'name'})
    
        print(player_name.text)
       



