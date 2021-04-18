from django.urls import path

from . import views

urlpatterns = [
    path('year/<int:year>', views.query_year, name='query_year'),
    path('name/<str:name>', views.query_name, name='query_name'),
    path('college/<str:college>', views.query_college, name='query_college'),
    path('comparison/<str:name>', views.get_player_comparison, name='get_player_comparison'),
    path('all', views.all, name = 'all'),
    path('', views.index, name='index'),
]

