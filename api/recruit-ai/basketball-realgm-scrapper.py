from bs4 import BeautifulSoup
import pandas as pd
import requests

def get_top_players():

    player = []
    gp = []
    mpg = []
    fgm = []
    spg = []
    bpg = []
    ppg = []
    year = []
    
    for i in range(1, 25):
        url = "https://basketball.realgm.com/ncaa/stats/2011/Averages/Qualified/All/Season/All/points/desc/"
        page = requests.get(url + str(i))
        soup = BeautifulSoup(page.content , 'html.parser')

        # if len(array) > 0:
        for tr in soup.table.find_all('tr'):
            print(tr)
            tds = tr.find_all('td')
            # tds = tr.find_all('td')
            # print(tds[0].text, tds[1].text, tds[2].text)

        

    
get_top_players()
