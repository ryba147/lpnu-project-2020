from django.db import models


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    birth_date = models.DateField(blank=True, null=True)
    email = models.EmailField()

    class Meta:
        verbose_name = 'Users'
