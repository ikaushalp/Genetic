from django.db import models
from Employee.models import Employee


# Create your models here.
class Schedule(models.Model):
    class Meta:
        db_table = 'schedule'

    id = models.AutoField(primary_key=True)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    fees = models.IntegerField(max_length=20)
    week_day = models.CharField(max_length=20)
    start_time = models.TimeField()
    end_time = models.TimeField()
