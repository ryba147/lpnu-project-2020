import json

from django.shortcuts import render
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from .serializers import EventSerializer
from .models import *


def home(request):
    pics = Event.objects.all()
    return render(request, 'events/view_events.html', {'pics': pics})

class EventView(View):
    allowed_methods = ["options", "get", "put", "post", "delete"]

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(EventView, self).dispatch(request, *args, **kwargs)

    def make_response(self, body, status_code=200):
        response = HttpResponse(body)
        response.status_code = status_code
        response['Access-Control-Allow-Origin'] = '*'
        response[
            'Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers"
        response['Content-Type'] = 'application/json'
        response['allow'] = ",".join(self.allowed_methods)
        return response

    def options(self, request, event_id=""):
        return self.make_response('')

    def get(self, request, event_id=None):
        # e = Event(event_name='New event', event_description='super fresh')
        # e.save()
        if event_id is None:
            events = Event.objects.all()
            events_serializer = EventSerializer(events, many=True)
            print("event_id:", event_id)
            return JsonResponse(events_serializer.data, safe=False)
        else:
            event = Event.objects.get(id=event_id)
            print(event)
            if event is None:
                return self.make_response(json.dumps({'event': '', 'status': 'not found'}), 404)
            event_serializer = EventSerializer(event)
            return JsonResponse(event_serializer.data, safe=False)
            # return self.make_response(json.dumps({'user': event_serializer.data, 'status': 'found'}))

    #
    # def put(self, request, email=""):
    #     user_data = JSONParser().parse(request)
    #     user = User.objects.get(email=user_data["email"])  # щоб знати конкретного юзера, інфу якого змінюватимемо
    #     user_serializer = UserSerializer(user, data=user_data)
    #     if user_serializer.is_valid():
    #         user_serializer.save()
    #         return JsonResponse("User information was updated successfully", safe=False)
    #     else:
    #         return JsonResponse("Failed to update user information", safe=False)
    #
    # # use user = User.objects.get(email=user_data["email"]) to get field value from url -> see the urls.py (<str:email>)
    #
    # # query_email = request.GET.get('email', None) - initializing var with value from query parameters
    # # use user = User.objects.get(email=query_email) to get field from query parameters -> /user/?email=...&password=...
    #
    # def post(self, request, email=""):
    #     query_password = request.GET.get('password', None)  # ?password=...
    #     query_email = request.GET.get('email', None)  # ?email=...
    #
    #     if query_email is None:
    #         print("Creating user using POST")
    #         user_data = JSONParser().parse(request)
    #         user_serializer = UserSerializer(data=user_data)
    #
    #         if user_serializer.is_valid():
    #             user_serializer.save()
    #             user = User.objects.get(email=user_data["email"])
    #             return self.make_response(json.dumps({'user': user.data, 'status': 'registered'}),
    #                                       201)  # user was created. return the email
    #             # return JsonResponse("New user was created successfully", safe=False)
    #         else:
    #             return self.make_response(json.dumps({'user': '', 'status': 'email is not unique'}), 403)
    #     else:
    #         try:
    #             print("q_email:", query_email)
    #             user = User.objects.get(email=query_email)  # search user with specified email
    #             if user.password == query_password:
    #                 print("User exists!")
    #                 user_serializer = UserSerializer(user, many=False)
    #                 return self.make_response(
    #                     json.dumps({'user': user_serializer.data, 'status': 'found'}))  # user was found. let him log in
    #             else:
    #                 return self.make_response(json.dumps({'user': '', 'status': 'wrong password'}))
    #         except ObjectDoesNotExist:
    #             return self.make_response(json.dumps({'user': '', 'status': 'not found'}), 404)  # user was not found
    #
    # def delete(self, request, email=""):
    #     user = User.objects.get(email=email)
    #     user.delete()
    #     return JsonResponse("User account was deleted successfully", safe=False)
