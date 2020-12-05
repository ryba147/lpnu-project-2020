from django.shortcuts import render
from django.http import HttpResponse
from .models import *


# Create your views here.
def events(request):
    events_list = Event.objects.all()
    return render(request, 'events/view_events.html', {'events_list': events_list})
