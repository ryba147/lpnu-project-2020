import json
from datetime import datetime

from django.core.paginator import Paginator, EmptyPage
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import *
from .serializers import EventSerializer


def paginate(request, object_list):
    # receiving the params using query
    q_page = request.GET.get('page', 1)
    q_page_size = request.GET.get('show', 3)

    # paging
    paginator = Paginator(object_list, q_page_size)
    events = paginator.get_page(q_page)
    events_serializer = EventSerializer(events, many=True)

    # events variable has a page type
    return ({
        "page": q_page,
        "count": len(events),  # or (events.end_index - events.start_index) + 1
        "num_pages": paginator.num_pages,
        "has_next": events.has_next(),
        "has_previous": events.has_previous(),
        "results": events_serializer.data
    })


def search(request):
    events = Event.objects.all()
    query = request.GET.get('q', None)
    if query is not None:
        events = Event.objects.all().filter(
            Q(event_name__icontains=query.lower()) |
            Q(event_description__icontains=query.lower())
        )
    try:
        response = paginate(request, events)
    except EmptyPage:
        return JsonResponse({"results": ""}, status=404)

    return JsonResponse(response)
    # return render(request, 'events/view_events.html', {'events': events})


def filter_events(request):
    events = Event.objects.all()
    q_type = request.GET.get('type', None)

    if q_type == 'location':
        query_location = request.GET.get('q')
        events = Event.objects.all().filter(
            Q(event_location__icontains=query_location)
        )
    """
        увага! час може вказуватись у таких форматах:
        2012-09-04 06:00
        2012-09-04 06:00:00
        2012-09-04 06:00:00.000000
         
        w/ optional TZ as timezone.
        2012-09-04 06:00Z  # utc
        2012-09-04 06:00:00+0800  # ТАКИЙ ДАЄ ПОМИЛКУ!
        2012-09-04 06:00:00.000000-08:00
    """
    if q_type == 'timerange':
        query_datetime_begin = request.GET.get('from', None)
        query_datetime_end = request.GET.get('to', None)

        if query_datetime_begin is not None and query_datetime_end is not None:
            events = Event.objects.all().filter(
                Q(event_datetime_begin__gte=query_datetime_begin) &
                Q(event_datetime_end__lte=query_datetime_end)
            )
        print(query_datetime_begin, query_datetime_end)
    try:
        response = paginate(request, events)
    except EmptyPage:
        return JsonResponse({"results": ""}, status=404)

    return JsonResponse(response)
    # return JsonResponse(events_serializer.data, safe=False)


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
            events_per_page = 3

            paginator = Paginator(events, events_per_page)
            query_page = request.GET.get('page')
            events_page = paginator.get_page(query_page)

            events_serializer = EventSerializer(events_page, many=True)  # отримую джсонки з сторіночки

            # return JsonResponse(events_serializer.data, safe=False)
            return JsonResponse({
                # 'count': paginator.count,
                'count': events_per_page,
                'num_pages': paginator.num_pages,
                'results': events_serializer.data
            })
        else:
            event = Event.objects.get(id=event_id)
            print(event)
            if event is None:
                return self.make_response(json.dumps({'event': '', 'status': 'not found'}), 404)
            event_serializer = EventSerializer(event)
            return JsonResponse(event_serializer.data, safe=False)
            # return self.make_response(json.dumps({'user': event_serializer.data, 'status': 'found'}))

    def post(self, request):
        event_data = JSONParser().parse(request)
        event_serializer = EventSerializer(data=event_data)

        if event_serializer.is_valid():
            event_serializer.save()
            return JsonResponse(event_serializer.data, safe=False)
        return self.make_response(json.dumps({'event': '', 'status': '?'}))

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
