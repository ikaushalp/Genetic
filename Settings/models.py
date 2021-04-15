from django.db import models


# Create your models here.

class Global(models.Model):
    class Meta:
        db_table = 'Global_settings'

    id = models.AutoField(primary_key=True)
    hospital = models.CharField(max_length=60)
    visible = models.CharField(max_length=10)
    contact = models.CharField(max_length=13)
    email = models.EmailField()
    address = models.TextField(null=True)
    link1 = models.CharField(max_length=60)
    link2 = models.CharField(max_length=60)
    link3 = models.CharField(max_length=60)
    modified_date = models.DateTimeField(auto_now=True)
