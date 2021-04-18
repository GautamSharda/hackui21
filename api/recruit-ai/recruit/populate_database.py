from models import College_Player
import pandas as pd


def append_data(dataFrame):
    objs = []
    for i in range(len(dataFrame)):
        objs.append(
            College_Player(
                rank=dataFrame.Rank[i],
                games=dataFrame.Games[i],
                min_per_game=dataFrame['Minitues Per Game'][i],
                reb_per_game=dataFrame['Rebounds Per Game'][i],
                ass_per_game=dataFrame['Assists Per Game'][i],
                ste_per_game=dataFrame['Steals Per Game'][i],
                blo_per_game=dataFrame['Blocks Per Game'][i],
                poi_per_game=dataFrame['Points Per Game'][i],
                year=dataFrame.Year[i]
            )
        )
    

    msg = College_Player.objects.bulk_create(objs=objs)


append_data(pd.read_csv('api/recruit-ai/players2014.csv'))