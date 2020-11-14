from django.urls import path
from . import views

urlpatterns = [
    path('events-list/', views.events, name='ev_list'),
]
