# Generated by Django 3.1.1 on 2021-03-24 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.IntegerField(),
        ),
    ]