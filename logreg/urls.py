from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserView.as_view()),
    # path('user/<str:email>/', views.user_view),
]
