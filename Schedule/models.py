from django.db import models
from Employee.models import Employee
from HMS import settings

# Create your models here.5
class Schedule(models.Model):
    class Meta:
        db_table = 'schedule'

    id = models.AutoField(primary_key=True)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    fees = models.IntegerField()
    week_day = models.CharField(max_length=20)
    start_time = models.TimeField(settings.TIME_INPUT_FORMATS)
    end_time = models.TimeField(settings.TIME_INPUT_FORMATS)

