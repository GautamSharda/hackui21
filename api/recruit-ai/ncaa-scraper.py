from bs4 import BeautifulSoup
import pandas as pd
import requests


def get_data():

    url = "https://www.ncaa.com/stats/basketball-men/d1/current/individual/600/p"
    page = requests.get(url)
    soup = BeautifulSoup(page.content , 'html.parser')

    array = soup.find_all('tr')

    rank = []
    first_name = []
    last_name = []
    team = []
    position = []
    point = []

    for i in range(1, 8):
        page = requests.get(url + str(i))
        soup = BeautifulSoup(page.content , 'html.parser')

        array = soup.find_all('tr')

        if len(array) > 0:
            for i in range(1, len(array)):
                data = array[i].text.strip().split()
                rank.append(data[0])
                first_name.append(data[1])
                last_name.append(data[2])
                team.append(data[3])
                position.append(data[5])
                rank.append(data[9])


    df = pd.DataFrame({'Rank':rank, 'First Name': first_name, 'Last Name': last_name, 'College': team, 'Position': position, 'Points': point})
    df.to_csv('points.csv', index=False, encoding='utf-8')


