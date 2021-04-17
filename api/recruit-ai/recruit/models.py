from django.db import models

# Create your models here.

class College_Player(models.Model):
    rank = models.PositiveIntegerField
    name = models.CharField(max_length = 64)
    college = models.CharField(max_length = 32)
    games = models.PositiveIntegerField
    min_per_game = models.FloatField
    reb_per_game = models.FloatField
    ass_per_game = models.FloatField
    ste_per_game = models.FloatField
    blo_per_game = models.FloatField
    poi_per_game = models.FloatField
    year = models.PositiveIntegerField
