from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import User
from .serializers import UserSerializer


class UserView(View):
    allowed_methods = ["options", "get", "put", "post", "delete"]

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(UserView, self).dispatch(request, *args, **kwargs)

    def options(self, request, id):
        response = HttpResponse()
        response["allow"] = ",".join([self.allowed_methods])
        return response

    def get(self, request, email=""):
        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    def put(self, request, email=""):
        user_data = JSONParser().parse(request)
        user = User.objects.get(email=user_data["email"])  # щоб знати конкретного юзера, інфу якого змінюватимемо
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("User information was updated successfully", safe=False)
        else:
            return JsonResponse("Failed to update user information", safe=False)

    def post(self, request, email=""):
        if email == "":
            user_data = JSONParser().parse(request)
            user_serializer = UserSerializer(data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse("New user was created successfully", safe=False)
            else:
                return JsonResponse("Failed to create user", safe=False)

        else:
            # search the specified email and return data in json
            try:
                user = User.objects.get(email=email)
                user_serializer = UserSerializer(user, many=False)
                print(user_serializer.data)
                return JsonResponse(user_serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("User does not exists", safe=False)

    def delete(self, request, email=""):
        user = User.objects.get(email=email)
        user.delete()
        return JsonResponse("User account was deleted successfully", safe=False)
