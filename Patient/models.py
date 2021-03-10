from django.db import models


# Create your models here.

class Patient(models.Model):
    class Meta():
        db_table = 'patient'

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    gender = models.CharField(max_length=100)
    birthdate = models.DateField(null=True, blank=True)
    age = models.IntegerField()
    marital_status = models.CharField(max_length=10)
    mobile_no = models.CharField(max_length=13)
    email = models.EmailField()
    category = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=3, null=True, blank=True)
    blood_pressure = models.IntegerField(null=True, blank=True)
    height = models.IntegerField(null=True, blank=True)
    weight = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    guardian_name = models.CharField(max_length=150, null=True, blank=True)
    relationship = models.CharField(max_length=50, null=True, blank=True)
    guardian_mobile_no = models.CharField(max_length=13, null=True, blank=True)


class Category(models.Model):
    class Meta():
        db_table = 'category'

    id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=60)
