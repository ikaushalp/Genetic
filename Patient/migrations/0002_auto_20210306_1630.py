# Generated by Django 3.1.1 on 2021-03-06 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Patient', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='blood_group',
            field=models.CharField(max_length=3),
        ),
        migrations.AlterField(
            model_name='patient',
            name='category',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='patient',
            name='gender',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='patient',
            name='guardian_mobile_no',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='patient',
            name='guardian_name',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='patient',
            name='marital_status',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='patient',
            name='mobile_no',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='patient',
            name='name',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='patient',
            name='relationship',
            field=models.CharField(max_length=50),
        ),
    ]
