from django.db import models

# Create your models here.


class Review(models.Model):
    rating = models.IntegerField()

