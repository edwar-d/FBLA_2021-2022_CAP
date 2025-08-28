import pandas as pd
import csv
import time
from rest.models import Attractions

def run():
    df = pd.read_csv("./utils/data.csv").to_dict()
#name,type,loc,website,open_time,address,number,reviews,star_rating,tour,review_category

    for i in range(74):
        name              = df['name'][i]
        type_s            = df['type'][i]
        loc               = df['loc'][i]
        website           = df['website'][i]
        open_time         = df['open_time'][i]
        address           = df['address'][i]
        number            = df['number'][i]
        reviews           = df['reviews'][i]
        star_rating       = df['star_rating'][i]
        tour              = df['tour'][i]
        review_category   = df['review_category'][i]
        img_url           = df['img'][i]
        gmaps             = df['gmaps'][i]

        
        if("y" in tour or "Y" in tour):
            tour = True
        else:
            tour = False

        a = Attractions(

            name=name,
            type_of=type_s,
            loc=loc,
            website=website,
            open_time=open_time,
            address=address,
            number=number,
            reviews=reviews,
            star_rating=star_rating,
            tour = tour,
            review_category =  review_category,
            img_url = img_url,
            gmaps = gmaps

        )

        a.save()    

        print("------------------------------------")
        print("FINISHED : ", i+1)
        print( name,type_s,loc,website,open_time,address,number,reviews,star_rating,tour,review_category,img_url,gmaps)
        print("------------------------------------")
        

#         a = Attractions(name=name,type=type_s,loc=loc,website=website,open_time=open_time,address=address,number=number,reviews=reviews,star_rating=star_rating)

# "Flavia","Tourist Attractions","Berkeley, CA","http://www.flaviaosteria.com,11:30 AM - 3:00 AM (Next day)","1511 Shattuck Ave Berkeley, CA 94709","(510) 629-2030",76, 4 


def add_row():
    count = Attractions.objects.count()
    df = pd.read_csv("./utils/datawithimg.csv").to_dict()

    for i in range(count):
        img_url = df['img'][i]

        attraction = Attractions.objects.get(pk=i)
        attraction.img_url = img_url
        
        attraction.save()
        print("Added Entry: "+str(i)+"; ")
    

    


        

