from bs4 import BeautifulSoup
import pandas as pd
import requests

def get_top_players(year):

    player = []
    rank = []
    team = []
    gp = []
    mpg = []
    rpg = []
    apg = []
    spg = []
    bpg = []
    ppg = []
    years = []
    
    for i in range(1, 25):
        url = "https://basketball.realgm.com/ncaa/stats/" + year + "/Averages/Qualified/All/Season/All/points/desc/"
        page = requests.get(url + str(i))
        soup = BeautifulSoup(page.content , 'html.parser')

        if soup.table is not None and soup.table.find_all('tr') is not None and len(soup.table.find_all('tr')) > 0:
            for tr in soup.table.find_all('tr'):

                tds = tr.find_all('td')

                if len(tds) > 0: 
                    rank.append(tds[0].string)
                    player.append(tds[1].string)
                    team.append(tds[2].string)
                    gp.append(tds[3].string) 
                    mpg.append(tds[4].string)
                    rpg.append(tds[18].string) 
                    apg.append(tds[19].string) 
                    spg.append(tds[20].string)  
                    bpg.append(tds[21].string)    
                    ppg.append(tds[22].string)  
                    years.append(year)  
                

    df = pd.DataFrame({'Rank':rank, 'Player': player, 'College': team, 'Games': gp, 'Minitues Per Game': mpg, 'Rebounds Per Game': rpg, "Assists Per Game": apg, "Steals Per Game": spg, "Blocks Per Game": bpg, "Points Per Game": bpg, "Year": years})
    df.to_csv('players' + year+ '.csv', index=False, encoding='utf-8')   

# for i in range(14, 21):
#     get_top_players("20" + str(i))
