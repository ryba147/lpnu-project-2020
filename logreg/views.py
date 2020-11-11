from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def login(request):
    return render(request, 'logreg/login.html')


def signup(request):
    return render(request, 'logreg/reg.html')
    # return HttpResponse('Hello world! This is registration page')
