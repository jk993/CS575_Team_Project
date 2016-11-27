from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=20, primary_key=True)
    def __str__(self):
        return str(self.name)

class Item(models.Model):
    item_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    taken = models.BooleanField(default=False)
    def __str__(self):
        return str(self.name)

class List(models.Model):
    listname = models.CharField(max_length=20, primary_key=True)

class Custom_List(models.Model):
    cname = models.ForeignKey(Customer)
    lname = models.ForeignKey(List)

class List_Item(models.Model):
    listname = models.ForeignKey(List)
    item_id = models.ForeignKey(Item)

