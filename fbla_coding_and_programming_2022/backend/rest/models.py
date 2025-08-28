#name	type	loc	website	open_time	address	number	reviews	star_rating
from django.db import models
# Create your models here.

#Attraction card Models for SQLite Database
#Contains all of the different fields in the attraction card 
class Attractions(models.Model):
    #Field Values in SQL Database
    name               = models.CharField(max_length=100, default='')
    type_of            = models.CharField(max_length=100, default='')
    loc                = models.CharField(max_length=200, default='')
    website            = models.URLField(max_length =500)
    open_time          = models.CharField(max_length=100, default='')
    address            = models.CharField(max_length=100, default='')
    number             = models.CharField(max_length=100, default='')
    reviews            = models.CharField(max_length=100, default='')
    star_rating        = models.CharField(max_length=100, default='')
#    tour               = models.CharField(max_length=100, default='')
    review_category    = models.CharField(max_length=100, default='')
    tour               = models.BooleanField()
    img_url            = models.URLField(max_length =1000, default='')
    gmaps              = models.URLField(max_length =1000, default='')


    def _str_(self):
        return self.name

class InputField(models.Model):
    city                 = models.CharField(max_length=100, default='')
    number_of_reviews    = models.CharField(max_length=100, default='')
    type_of              = models.CharField(max_length=100, default='')
    rating               = models.CharField(max_length=100, default='')
    guided_tours         = models.CharField(max_length=100, default='')

#    {"city":"San Francisco","rating":"false","guided_tours":"false","number_of_reviews":"1-10","type_of":"Restaurant"}

    def _str_(self):
        return self.name




#(name,type,loc,website,open_time,address,number,reviews,star_rating,tour,review_category)
# name,type,loc,website,open_time,address,number,reviews,star_rating,tour,review_category
