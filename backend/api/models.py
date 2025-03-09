from django.db import models

class Registeruser(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    email = models.EmailField(max_length=254)
    contact = models.CharField(max_length=12)
    place = models.CharField(max_length=50)

# Create your models here.
