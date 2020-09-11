from operator import mod
from pyexpat import model
from django.db import models
from django.db.models.signals import ModelSignal
from django.utils.timezone import now
# Create your models here.

class Global(models.Model):
    sno = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    favicon = models.ImageField(upload_to='global/favicon')
    logo = models.ImageField(upload_to='global/logo')
    phone = models.IntegerField()
    address = models.TextField()
    footer_text = models.CharField(max_length=100)
    facebook_url = models.CharField(max_length=300)
    twitter_url = models.CharField(max_length=300)
    youtube_url = models.CharField(max_length=300)
    instagram_url = models.CharField(max_length=300)
    timestamp = models.DateTimeField(auto_now_add=True)