import requests
import json

x = requests.get('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams')

with open('teams.json', 'w') as datafile:
    json.dump(x.json(), datafile)
