from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Customer(models.Model):
    uid = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    age = models.IntegerField()

class Items(models.Model):
    item_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    category = models.CharField(max_length=20)
    price = models.IntegerField()

class Shopping(models.Model):
    item_id = models.ForeignKey(Customer)
    uid = models.ForeignKey(Items)
    amount = models.IntegerField()

