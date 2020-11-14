from django.db import models


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    password = models.CharField(max_length=30, blank=True, null=True)
    sex = models.IntegerField(blank=True, null=True)
    family_status = models.IntegerField(default=0, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    email = models.EmailField(blank=False, null=False, primary_key=True)

    organizer = models.BooleanField(default=False, blank=False, null=False)

    class Meta:
        verbose_name = 'User'
