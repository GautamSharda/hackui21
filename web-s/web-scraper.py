from bs4 import BeautifulSoup
import pandas as pd
import requests

url = "https://www.maxpreps.com/leaders/basketball/,scoring/stat-leaders.htm"
page = requests.get( url )
soup = BeautifulSoup( page.content , 'html.parser')

name = []
position = []
points = []
points_per_game = []

rows = soup.find_all('tr')

for a in rows:
    player_name=a.find('th', attrs={'class':'name'})
    #pos=a.find('td', attrs={'class':'position dw'})
    #pts=a.find('td', attrs={'class':'points stat-category dw'})
    #ppg=a.find('td', attrs={'class':'pointspergame sorted stat-category dw'})
    #position.append(pos.text)
    #points.append(pts.text)
    #points_per_game.append(ppg.text)
    name.append(player_name.text)


print(name)

df = pd.DataFrame({'Name':name}) 
df.to_csv('basketball.csv', index=False, encoding='utf-8')


