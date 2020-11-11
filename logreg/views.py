from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def signup(request):
    return HttpResponse('Hello world! This is registration page')


def login(request):
    return HttpResponse('Hello world! This is login page')
