from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.http import request


# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Schedule(models.Model):
    section = models.CharField(max_length=16)
    day = models.CharField(max_length=256)
    time = models.CharField(max_length=256)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    timestamp = models.DateTimeField(default=timezone.now)
    description = models.TextField()
    schedules = models.ManyToManyField(Schedule, related_name='schedules')
    requested = models.ManyToManyField(User, related_name='requested')