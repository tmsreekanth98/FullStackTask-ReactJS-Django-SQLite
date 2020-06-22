from django.db import models


class DataTable(models.Model):
    Name = models.CharField(max_length=1000,default="",null=True,blank=True)
    Phone = models.CharField(max_length=1000,default="",null=True,blank=True)
    Email = models.CharField(max_length=100,default="",null=True,blank=True) 