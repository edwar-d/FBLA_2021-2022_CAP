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
#{"city":"San Francisco","rating":"false","guided_tours":"false","number_of_reviews":"1-10","type_of":"Restaurant"}

class Attractions(models.Model):

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
    tour               = models.BooleanField();

    def _str_(self):
        return self.name

class InputField(models.Model):
    city                 = models.CharField(max_length=100, default='')
    number_of_reviews    = models.CharField(max_length=100, default='')
    type_of              = models.CharField(max_length=100, default='')
    rating               = models.BooleanField();
    guided_tours         = models.BooleanField();

#    {"city":"San Francisco","rating":"false","guided_tours":"false","number_of_reviews":"1-10","type_of":"Restaurant"}

    def _str_(self):
        return self.name




#(name,type,loc,website,open_time,address,number,reviews,star_rating,tour,review_category)
# name,type,loc,website,open_time,address,number,reviews,star_rating,tour,review_category
