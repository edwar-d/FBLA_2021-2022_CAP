from numpy import number
from rest.models import Attractions
from rest.models import InputField
from rest.serializers import AttractionSerializer


def Process(data):
    inP = InputField(
        city=data["city"],
        rating=data["rating"],
        guided_tours=data["guided_tours"],
        number_of_reviews=data["number_of_reviews"],
        type_of=data["type_of"]
    )

    inP.save()

    oP = Attractions.objects.all()

    if(data["city"] != "Select"):
        oP = oP.filter(loc = (inP.city+", CA"))

    if(data["number_of_reviews"] != "Select"):
        oP = oP.filter(review_category  =inP.number_of_reviews)

    if(data["type_of"] != "Select"):
        oP = oP.filter(type_of  =inP.type_of)
        
    
    if(data["guided_tours"] != "Select"):

        if(data["guided_tours"] == "No"):
            oP = oP.filter(tour=False)

        elif(data["guided_tours"] == "Yes"):
            oP = oP.filter(tour=True)



    if(data["rating"]=="Sort by Highest"):
        try:
            oP = oP.order_by('star_rating')
        except IndexError:
            pass

    inP.save()

    ids = []

    for i in range(len(oP)):
        ids.append(oP[i].id)

    if(data["rating"]=="Sort by Highest"):
        ids.reverse()   
        ids.append(ids.pop(0))

    return ids



def attractionToDictionary(id):

    dictionary = {}
    attraction = Attractions.objects.get(pk =id)

    if attraction == None:
        return None

    dictionary["name"] = attraction.name
    dictionary["type_of"] = attraction.type_of
    dictionary["loc"] = attraction.loc
    dictionary["website"] = attraction.website
    dictionary["open_time"] = attraction.open_time
    dictionary["address"] = attraction.address
    dictionary["number"] = attraction.number
    dictionary["reviews"] = attraction.reviews
    dictionary["star_rating"] = attraction.star_rating
    dictionary["review_category"] = attraction.review_category
    dictionary["tour"] = str(attraction.tour).lower()
    dictionary["img_url"] = attraction.img_url
    

    # if("\\u2026" in attraction.website):
    #     if(attraction.website)

    return dictionary
