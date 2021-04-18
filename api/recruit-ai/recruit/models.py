from django.db import models
import pandas as pd

# Create your models here.

class College_Player(models.Model):
    rank = models.PositiveIntegerField(default = None)
    name = models.CharField(max_length = 64)
    college = models.CharField(max_length = 32)
    games = models.PositiveIntegerField(default=0)
    min_per_game = models.FloatField(default=0)
    reb_per_game = models.FloatField(default=0)
    ass_per_game = models.FloatField(default=0)
    ste_per_game = models.FloatField(default=0)
    blo_per_game = models.FloatField(default=0)
    poi_per_game = models.FloatField(default=0)
    year = models.PositiveIntegerField(default=0)


    def append_data(dataFrame):
        objs = []
        
        for i in range(len(dataFrame)):
            print(dataFrame.Rank[i])
            objs.append(
                College_Player(
                    rank=dataFrame.Rank[i],
                    games=dataFrame.Games[i],
                    name=dataFrame.Player[i],
                    college=dataFrame.College[i],
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

# class High_School_Player(models.Model):


# College_Player.append_data(pd.read_csv('C:\\Users\\Omkar Yadav\\Documents\\GitHub\\Data Structures\\hackui21\\api\\recruit-ai\\players2020.csv'))

