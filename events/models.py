from django.db import models
from logreg.models import User


# Create your models here.
class Event(models.Model):
    # id = models.IntegerField(primary_key=True)
    event_name = models.CharField(max_length=255, blank=False, null=True)
    event_description = models.TextField(blank=True, null=True)
    event_photo = models.ImageField(blank=True, null=True, upload_to='media/events')
    event_datetime_begin = models.DateTimeField(blank=False, null=True)
    event_datetime_end = models.DateTimeField(blank=False, null=True)
    event_rating = models.FloatField(blank=True, null=True)
    event_location = models.CharField(max_length=255, blank=False, null=True)
    event_organizer = models.CharField(max_length=255, blank=False, null=True)

    def __str__(self):
        return self.event_name


class EventToUser(models.Model):
    event_id = models.ForeignKey(Event, blank=False, null=True, on_delete=models.CASCADE)
    user_email = models.ForeignKey(User, blank=False, null=True, on_delete=models.CASCADE)

    STATUS_CHOICES = (
        ('event_organizer', 'Organizer'),
        ('to_visit', 'To visit'),
        ('visited', 'Visited'),
    )
    status = models.CharField(max_length=20, blank=False, null=True, choices=STATUS_CHOICES)


class Comment(models.Model):
    event = models.ForeignKey(Event, blank=False, null=True, on_delete=models.CASCADE)
    author = models.ForeignKey(User, blank=False, null=True, editable=False, on_delete=models.CASCADE)
    comment_text = models.CharField(blank=False, null=True, max_length=200)
    pub_date = models.DateTimeField()

    def __str__(self):
        return self.comment_text
