from bs4 import BeautifulSoup
import pandas as pd
import requests

name = []
position = []
minutes = []
minutes_per_game = []
points_per_32 = []
assists_per_32 = []
rebounds_per_32 = []
steals_per_32 = []
blocks_per_32 = []
turnovers_per_32 = []
fouls_per_32 = []

for i in range(11):
    str_i = str(i)
    url = "https://www.maxpreps.com/leaders/basketball-winter-19-20/,per32/stat-leaders-"+str_i+".htm"
    page = requests.get( url )
    soup = BeautifulSoup( page.content , 'html.parser')


    players = soup.find_all('tr')

    for value in players:
        player_name=value.find('th', attrs={'class':'name'})
        pos=value.find('td', attrs={'class':'position dw'})
        mins=value.find('td', attrs={'class':'minutesplayed stat-category dw'})
        mins_p_game=value.find('td', attrs={'class':'minutespergame stat-category dw'})
        pts_p_32=value.find('td', attrs={'class':'pointsper32 sorted stat-category dw'})
        assists_p_32=value.find('td', attrs={'class':'assistsper32 stat-category dw'})
        rebounds_p_32=value.find('td', attrs={'class':'reboundsper32 stat-category dw'})
        steals_p_32=value.find('td', attrs={'class':'stealsper32 stat-category dw'})
        blocks_p_32=value.find('td', attrs={'class':'blocksper32 stat-category dw'})
        turnovers_p_32=value.find('td', attrs={'class':'turnoversper32 stat-category dw'})
        fouls_p_32=value.find('td', attrs={'class':'personalfoulsper32 last stat-category dw'})
    
        if player_name == None:
            name.append('none')
        else:
            name.append(player_name.text)
    
    
        if pos == None:
            position.append('none')
        else:
            position.append(pos.text)
    
        if mins == None:
            minutes.append('none')
        else:
            minutes.append(mins.text)
        
        if mins_p_game == None:
            minutes_per_game.append('none')
        else:
            minutes_per_game.append(mins_p_game.text)
        
        if pts_p_32 == None:
            points_per_32.append('none')
        else:
            points_per_32.append(pts_p_32.text)
        
        if assists_p_32 == None:
            assists_per_32.append('none')
        else:
            assists_per_32.append(assists_p_32.text)
        
        if rebounds_p_32 == None:
            rebounds_per_32.append('none')
        else:
            rebounds_per_32.append(rebounds_p_32.text)
        
        if steals_p_32 == None:
            steals_per_32.append('none')
        else:
            steals_per_32.append(steals_p_32.text)
        
        if blocks_p_32 == None:
            blocks_per_32.append('none')
        else:
            blocks_per_32.append(blocks_p_32.text)
        
        if turnovers_p_32 == None:
            turnovers_per_32.append('none')
        else:
            turnovers_per_32.append(turnovers_p_32.text)
        
        if fouls_p_32 == None:
            fouls_per_32.append('none')
        else:
            fouls_per_32.append(fouls_p_32.text)



df = pd.DataFrame({'Name':name, 'Position': position, 'Minutes': minutes, 'Minutes/Game': minutes_per_game, 'Points/32': points_per_32, 'Assists/32': assists_per_32, 'Rebounds/32': rebounds_per_32, 'Steals/32': steals_per_32, 'turnsover/32': turnovers_per_32, 'Fouls/32': fouls_per_32}) 
df.to_csv('basketball-2.csv', index=False, encoding='utf-8')




