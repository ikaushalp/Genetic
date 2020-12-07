from typing import ChainMap
from django.db import models
from django.db.models.fields import AutoField, BooleanField, CharField, DateField, EmailField

# Create your models here.
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    ename = models.CharField(max_length=50)
    gender = models.CharField(max_length=11)
    blood_group = models.CharField(max_length=3)
    birthdate = models.DateField()
    mobile = models.CharField(max_length=13)
    email = models.EmailField()
    matarial_status = models.CharField(max_length=10)
    address = models.TextField()
    profile_picture = models.ImageField(upload_to='employee/profile/')
    role = models.IntegerField()
    designation = models.CharField(max_length=20)
    department = models.CharField(max_length=20)
    joining_date = models.DateField()
    qualification = models.CharField(max_length=225)