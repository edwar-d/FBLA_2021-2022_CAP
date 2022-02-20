#name	type	loc	website	open_time	address	number	reviews	star_rating
from django.db import models
# Create your models here.

# name
# type
# loc
# website
# open_time
# address
# number
# reviews
# star_rating

class Attractions(models.Model):
    name        = models.TextField()
    type        = models.CharField(max_length=100)
    loc         = models.CharField(max_length=200)
    website     = models.URLField(max_length = 500)
    open_time   = models.CharField(max_length=100)
    address     = models.CharField(max_length=100)
    number      = models.CharField(max_length=100)
    reviews     = models.IntegerField()
    star_rating = models.DecimalField(max_digits=10, decimal_places=5)

    def _str_(self):
        return self.name

class InputField(models.Model):
    city = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=10, decimal_places=5)
    type_c = models.CharField(max_length=100)

    def _str_(self):
        return self.name




#(name,type,loc,website,open_time,address,number,reviews,star_rating)