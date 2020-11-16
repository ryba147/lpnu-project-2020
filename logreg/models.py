from django.db import models


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30, blank=False, null=True)
    last_name = models.CharField(max_length=30, blank=False, null=True)
    birth_date = models.DateField(blank=True, null=True)
    city = models.CharField(max_length=30, blank=True, null=True)
    password = models.CharField(max_length=30, blank=False, null=True)

    SEX_CHOICES = (
        (0, 'Male'),
        (1, 'Female'),
    )
    sex = models.IntegerField(blank=True, null=True, choices=SEX_CHOICES)

    FAMILY_STATUS = (
        (0, 'Single'),
        (1, 'In relationship'),
        (2, 'Married')
    )
    family_status = models.IntegerField(blank=True, null=True, choices=FAMILY_STATUS)

    pets = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=False, null=False, primary_key=True)
    organizer = models.BooleanField(default=False, blank=False, null=False)

    def __str__(self):
        return self.first_name

    class Meta:
        verbose_name = 'User'
