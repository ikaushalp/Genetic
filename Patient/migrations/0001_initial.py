# Generated by Django 3.1.1 on 2021-03-11 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category_name', models.CharField(max_length=60)),
            ],
            options={
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150)),
                ('gender', models.CharField(max_length=100)),
                ('birthdate', models.DateField()),
                ('age', models.IntegerField()),
                ('marital_status', models.CharField(max_length=10)),
                ('mobile_no', models.CharField(max_length=13)),
                ('email', models.EmailField(max_length=254)),
                ('category', models.CharField(max_length=100)),
                ('blood_group', models.CharField(max_length=3)),
                ('blood_pressure', models.IntegerField(null=True)),
                ('height', models.IntegerField(default=0)),
                ('weight', models.IntegerField(null=True)),
                ('address', models.TextField(null=True)),
                ('guardian_name', models.CharField(max_length=150)),
                ('relationship', models.CharField(max_length=50)),
                ('guardian_mobile_no', models.CharField(max_length=13)),
            ],
            options={
                'db_table': 'patient',
            },
        ),
    ]
