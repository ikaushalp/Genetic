# Generated by Django 3.1.1 on 2021-03-11 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('ename', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=10)),
                ('blood_group', models.CharField(max_length=3)),
                ('birthdate', models.DateField()),
                ('mobile', models.CharField(max_length=13)),
                ('email', models.EmailField(max_length=254)),
                ('marital_status', models.CharField(max_length=10)),
                ('address', models.TextField()),
                ('role', models.IntegerField()),
                ('designation', models.CharField(max_length=20)),
                ('department', models.CharField(max_length=20)),
                ('joining_date', models.DateField()),
                ('qualification', models.CharField(max_length=225)),
            ],
            options={
                'db_table': 'employee',
            },
        ),
    ]
