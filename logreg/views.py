from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import json
from .models import User
from .serializers import UserSerializer


class UserView(View):
    allowed_methods = ["options", "get", "put", "post", "delete"]

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(UserView, self).dispatch(request, *args, **kwargs)

    def make_response(self, body):
        response = HttpResponse(body)
        response['Access-Control-Allow-Origin'] = '*'
        response[
            'Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers"
        response['Content-Type'] = 'application/json'
        response['allow'] = ",".join(self.allowed_methods)
        return response

    def options(self, request, email=""):
        return self.make_response('')

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

    # use user = User.objects.get(email=user_data["email"]) to get field value from url -> see the urls.py (<str:email>)

    # query_email = request.GET.get('email', None) - initializing var with value from query parameters
    # use user = User.objects.get(email=query_email) to get field from query parameters -> /user/?email=...&password=...

    def post(self, request, email=""):
        query_password = request.GET.get('password', None)  # ?password=...
        query_email = request.GET.get('email', None)  # ?email=...

        if query_email is None:
            print("Creating user using POST")
            user_data = JSONParser().parse(request)
            user_serializer = UserSerializer(data=user_data)

            if user_serializer.is_valid():
                user_serializer.save()
                user = User.objects.get(email=user_data["email"])
                return self.make_response(json.dumps({'email': user.email}))  # user was created. return the email
                # return JsonResponse("New user was created successfully", safe=False)
            else:
                return JsonResponse("Failed to create user", safe=False)
        else:
            try:
                print("q_email:", query_email)
                user = User.objects.get(email=query_email)  # search user with specified email
                if user.password == query_password:
                    print("YES. LINE 84!")
                user_serializer = UserSerializer(user, many=False)
                return self.make_response(json.dumps({'user': user_serializer.data}))  # user was found. let him log in
            except ObjectDoesNotExist:
                return self.make_response(json.dumps({'user': ''}))  # user was not found

    def delete(self, request, email=""):
        user = User.objects.get(email=email)
        user.delete()
        return JsonResponse("User account was deleted successfully", safe=False)
