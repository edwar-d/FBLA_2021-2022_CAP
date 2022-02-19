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


    
# def IDtoJson(ids):
#     attracion = Attractions.objects.get(pk=ids[0])

