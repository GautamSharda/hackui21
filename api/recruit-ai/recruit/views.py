from django.shortcuts import render
from .models import College_Player
from django.http import JsonResponse
from django.http import HttpResponse

# Create your views here.

def query_year(request, year):
    players = list(College_Player.objects.filter(year=year).values())
    return JsonResponse(players, safe=False)

def query_name(request, name):
    players = list(College_Player.objects.filter(name=name).values())
    return JsonResponse(players, safe=False)

def query_college(request, college):
    players = list(College_Player.objects.filter(college=college).values())
    return JsonResponse(players, safe=False)

def index(request):
    return HttpResponse("You're looking at question 12")