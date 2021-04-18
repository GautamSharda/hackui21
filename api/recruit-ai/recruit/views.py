from django.shortcuts import render
from .models import College_Player
from django.http import JsonResponse
from django.http import HttpResponse
import numpy as np
import pandas as pd
from random import randrange
import json


# Create your views here.

def query_set_to_list(data):
    res = []

    for obj in data:
        res.append(obj['name'])

    return res

def query_year(request, year):
    players = list(College_Player.objects.filter(year=year).values())
    return JsonResponse(players, safe=False)

def query_name(request, name):
    players = list(College_Player.objects.filter(name=name).values())
    return JsonResponse(players, safe=False)

def query_college(request, college):
    players = list(College_Player.objects.filter(college=college).values())
    return JsonResponse(players, safe=False)

def all(request):
    players = list(College_Player.objects.filter().values())
    return JsonResponse(players, safe=False)

def get_player_comparison(request, name):
    hs_data = pd.read_csv("/Users/omkaryadav/Documents/GitHub/hackui21/api/recruit-ai/ml/data/hs_data_clean.csv").to_numpy()
    print(hs_data.shape)


    names = query_set_to_list(list(College_Player.objects.filter().values('name')))
    

    del_indices  = []
    for i in range(hs_data.shape[0]):

        index = np.searchsorted(names, hs_data[i][0])
        if index >= len(names) or names[index] != hs_data[i][0]:
            del_indices.append(i)

    del_indices = np.array(del_indices)
    for i in del_indices:
        hs_data_made_it = np.delete(hs_data, i, 0)
        del_indices -= 1

    player = []
    best_players = []
    best_score = 1000000000

    for i in range(hs_data.shape[0]):    
        if hs_data[i][0] == name:
            player = hs_data[i]

    if not len(player):
        return hs_data[[randrange(len(hs_data)-1), randrange(len(hs_data)-1),randrange(len(hs_data)-1)]]
    for i in range(1, hs_data_made_it.shape[0]):
        dif = player[2:].astype(np.float) - hs_data[i][2:].astype(np.float)
        score = np.dot(dif, dif)
        if score < best_score:
            best_score = score
            best_players.append(hs_data[i])
    return HttpResponse(best_players[-3:]) 

def index(request):
    return HttpResponse("You're looking at question 12")