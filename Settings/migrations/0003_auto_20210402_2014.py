# Generated by Django 3.1.1 on 2021-04-02 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Settings', '0002_auto_20210402_2001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='global',
            name='contact',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='global',
            name='hospital',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='global',
            name='visible',
            field=models.CharField(max_length=10),
        ),
    ]
