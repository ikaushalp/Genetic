from django.db import models
from Patient.models import Patient


# Create your models here.
class Appointment(models.Model):
    class Meta:
        db_table = 'appointment'

    id = models.AutoField(primary_key=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.CharField(max_length=100)
    appointment_date = models.DateField()
    time_slot = models.CharField(max_length=50)
    fees = models.IntegerField()
    status = models.CharField(max_length=15)
