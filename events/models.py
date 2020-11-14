from django.db import models


# Create your models here.
class Event(models.Model):
    event_name = models.CharField(max_length=30, blank=True, null=True)
    event_description = models.TextField(blank=True, null=True)
    event_photo = models.ImageField(blank=True, null=True, upload_to='media/events')
    event_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.event_name
