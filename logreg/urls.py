from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.user_api),
    path('user/<str:email>/', views.user_api),
]
