# Generated by Django 3.1.1 on 2021-04-15 16:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Appointment', '0003_auto_20210415_1445'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='remarks',
        ),
    ]