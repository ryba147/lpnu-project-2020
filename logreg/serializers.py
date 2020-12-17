from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name',
                  'last_name',
                  'password',
                  'sex',
                  'family_status',
                  'birth_date',
                  'email',
                  'organizer'
                  )
