from django.shortcuts import render
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import User
from .serializers import UserSerializer


# # Create your views here.
# def login(request):
#     return render(request, 'logreg/login.html')
#
#
# def signup(request):
#     return render(request, 'logreg/reg.html')
#     # return HttpResponse('Hello world! This is registration page')


@csrf_exempt
def user_api(request, email="123@example.com"):
    if request.method == "GET":
        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method == "POST":
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("New user was created successfully", safe=False)
        else:
            return JsonResponse("Failed to create user", safe=False)

    elif request.method == "PUT":
        user_data = JSONParser().parse(request)
        user = User.objects.get(email=user_data['email'])  # щоб знати конкретного юзера, інфу якого змінюватимемо
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("User information was updated successfully", safe=False)
        else:
            return JsonResponse("Failed to update user information", safe=False)

    elif request.method == "DELETE":
        user = User.objects.get(email=email)
        user.delete()
        return JsonResponse("User account was deleted successfully", safe=False)

# {
#     "first_name": "Taras",
#     "last_name": "Bmx",
#     "password": "1234",
#     "email": "1@example.com",
#     "sex": 1,
#     "family_status": 0,
#     "organizer": 1
# }
