import requests
import json

def getTeams():
    data = requests.get('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams')

    with open('teams.json', 'w') as datafile:
        json.dump(data.json(), datafile)

def getRoster():
    file = open('teams.json')

    teams = json.load(file)

    teams = teams['sports'][0]['leagues'][0]['teams']

    # for team in teams:
    #     print(team['team']['links'][1]['href'])

    for i in range(100):
        if i == 1:
            data = requests.get('http://www.espn.com/mens-college-basketball/team/roster/_/id/9')
            print(data.json())

