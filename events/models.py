from django.db import models
from logreg.models import User


# Create your models here.
class Event(models.Model):
    event_name = models.CharField(max_length=30, blank=True, null=True)
    event_description = models.TextField(blank=True, null=True)
    event_photo = models.ImageField(blank=True, null=True, upload_to='media/events')
    event_date = models.DateTimeField(blank=True, null=True)
    event_rating = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.event_name


class Comment(models.Model):
    event = models.ForeignKey(Event, blank=False, null=True, on_delete=models.CASCADE)
    author = models.ForeignKey(User, blank=False, null=True, editable=False, on_delete=models.CASCADE)
    comment_text = models.CharField(blank=False, null=True, max_length=200)
    pub_date = models.DateTimeField()

    def __str__(self):
        return self.comment_text
