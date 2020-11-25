from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserView),
    path('user/<str:email>/', views.UserView),
]
