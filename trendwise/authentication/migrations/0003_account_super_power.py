# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-22 20:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20161121_0722'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='super_power',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]
