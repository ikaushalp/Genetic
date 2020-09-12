from django.db import models

# Create your models here.

class Patient(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=150)
    gender = models.CharField(max_length=100)
    birthdate = models.CharField(max_length=8)
    age = models.IntegerField()
    matarial_status = models.CharField(max_length=10)
    mobile = models.CharField(max_length=13)
    email = models.EmailField()
    category = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=3)
    blood_pressure = models.IntegerField()
    height = models.IntegerField()
    weight = models.IntegerField()
    address = models.TextField()
    image = models.ImageField(upload_to='patient/profile')
    guardian = models.CharField(max_length=150)
    relationship = models.CharField(max_length=50)
    guardian_mobile = models.CharField(max_length=13)