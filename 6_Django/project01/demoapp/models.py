from django.db import models

# Create your models here.
class Blog(models.Model):
    article_name = models.CharField(max_length=30)
    description = models.CharField(max_length=200)