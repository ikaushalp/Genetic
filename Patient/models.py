from django.db import models
from django.conf import settings
# Create your models here.

class Patient(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    gender = models.CharField(max_length=100)
    birthdate = models.DateField()
    age = models.IntegerField()
    marital_status = models.CharField(max_length=10)
    mobile_no = models.CharField(max_length=13)
    email = models.EmailField()
    category = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=3)
    blood_pressure = models.IntegerField()
    height = models.IntegerField()
    weight = models.IntegerField()
    address = models.TextField()
    image = models.ImageField(upload_to='patient/profile')
    guardian_name = models.CharField(max_length=150)
    relationship = models.CharField(max_length=50)
    guardian_mobile_no = models.CharField(max_length=13)

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=60)