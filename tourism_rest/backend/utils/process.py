from attr import attr
from rest.models import Attractions

def Process(data):
    # city = data["city"]
    # rating = data["rating"]
    # type_c = data["type_c"]
    P = Attractions.objects.all().filter(loc= (data["city"]+", CA"))

    if(float(data["rating"]) > 2.0):
        T = list(P.filter(type=data["type_c"]).order_by('star_rating'))
    else:
        T = list(P.filter(type=data["type_c"]))

    ids = []
    for i in range(len(T)):
        ids.append(T[i].id)

    return ids


def attractionToDictionary(id):

    dictionary = {}
    attraction = Attractions.objects.get(pk =id)

    if attraction == None:
        return None

    dictionary["name"] = attraction.name
    dictionary["type"] = attraction.type
    dictionary["loc"] = attraction.loc
    dictionary["website"] = attraction.website
    dictionary["open_time"] = attraction.open_time
    dictionary["address"] = attraction.address
    dictionary["number"] = attraction.number
    dictionary["reviews"] = str(attraction.reviews)
    dictionary["star_rating"] = str(attraction.star_rating)

    # if("\\u2026" in attraction.website):
    #     if(attraction.website)

    return dictionary
