from django.db import models
# Create your models here.

class Employee(models.Model):
    class Meta():
        db_table = 'employee'

    id = models.AutoField(primary_key=True)
    ename = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=3)
    birthdate = models.DateField(null=True)
    mobile = models.CharField(max_length=13)
    email = models.EmailField()
    marital_status = models.CharField(max_length=10)
    address = models.TextField()
    role = models.IntegerField()
    designation = models.CharField(max_length=20)
    joining_date = models.DateField()
    qualification = models.CharField(max_length=225)