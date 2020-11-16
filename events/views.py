from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view


# Create your views here.
def events(request):
    events_list = Event.objects.all()
    return render(request, 'events/view_events.html', {'events_list': events_list})



schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'^$', schema_view)
]