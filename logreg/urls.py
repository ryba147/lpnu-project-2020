from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='log'),
    path('signup/', views.signup, name='reg'),
]
