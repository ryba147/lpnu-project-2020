from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        # fields = (
        #     'event_name',
        #     'event_description',
        #     'event_date'
        # )
