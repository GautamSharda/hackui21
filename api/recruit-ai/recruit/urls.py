from django.urls import path

from . import views

urlpatterns = [
    path('year/<int:year>', views.query_year, name='query_year'),
    path('name/<str:name>', views.query_name, name='query_name'),
    path('college/<str:college>', views.query_college, name='query_college'),
    path('', views.index, name='index'),
]

