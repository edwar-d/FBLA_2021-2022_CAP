import json
from textwrap import indent

from django.views import View
from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import HttpResponseNotAllowed
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse

from rest_framework.parsers import JSONParser  
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets


from .serializers import *
from .models import *

from utils import compu, db
import datetime
from datetime import date


# Create your views here.


class BookingView(viewsets.ModelViewSet):

    serializer_class = BookingSerializer
    queryset = Book.objects.all();
    # b = Booking.objects.get(id="3018ba00-1ebd-4e44-9606-5c5e9c68764e")
    # b.delete()

class RoomView(viewsets.ModelViewSet):
    serializer_class = RoomSerializer;
    queryset = Room.objects.all();

# def dbloc(request):
    
#     if request.method == 'GET':

#         booking = Booking.objects.all()
#         serializer = BookingSerializer(booking, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  


@api_view(['POST'])

def book(request):
    #http://127.0.0.1:8000/api/v1/json/call

    recieved = request.data
    recieved_json = json.dumps(recieved, indent=4)

    print(recieved)
    rbooking_s = BookingSerializer(data=recieved)
    #datetime.datetime.strptime(s, "%Y-%m-%d").date() ex:s = "2014-04-07"


    if rbooking_s.is_valid():
        if(Room.objects.filter(room_no=recieved["room_no"]).exists()):

            check_in = datetime.datetime.strptime(recieved["check_in"], "%Y-%m-%d").date();
            check_out = datetime.datetime.strptime(recieved["check_out"], "%Y-%m-%d").date()

            room_id = Room.objects.filter(room_no=recieved["room_no"]).first()
            nights = (check_out - check_in).days

            arooms = db.available_rooms(recieved["check_in"], recieved["check_out"])
            print(arooms)

            if(room_id in arooms):
                _book = Book(
                    id=compu.uuid4(),
                    fname = recieved['fname'],
                    lname = recieved['lname'],
                    email = recieved['email'],
                    address= recieved['address'],
                    phone = recieved['phone'],
                    room_id = room_id,
                    check_in=check_in,
                    check_out=check_out,
                    nights = nights,
                    amount_due=room_id.price*nights
                )

                _book.save()
                print()
                #print("saved booking: ", _book)
                print()
                return JsonResponse({'response':"success"}, safe=False)
            else:
                print()
                print("time not avalible")
                print()
                return JsonResponse({'response':"Not avalible"}, safe=False)

    
    else:
        return JsonResponse({'response':"request failed, missing information"}, safe=False)

    return JsonResponse({'response':"Sucess"}, safe=False)


@api_view(['POST'])

def get_avalible_rooms(request):
    recieved = request.data
    print(recieved) #DEBUG
    arooms = db.available_rooms(recieved["check_in"], recieved["check_out"])

    room_an = []
    for room in arooms:
        room_an.append(room.room_no)

    print(room_an) #DEBUG

    return JsonResponse({'rooms':room_an}, safe=False)


# @api_view(['POST'])

# def signup(request):
#     #http://127.0.0.1:8000/api/v1/json/call

#     recieved = request.data
#     recieved_json = json.dumps(recieved, indent=4)

#     signup_request = GuestSignUpSerializer(data=recieved)
#     opt_code = compu.rand_N_digit_int(5);
    
#     print(recieved)

#     if signup_request.is_valid():
#         #Guest.objects.filter(email="joedobbs.042@gmail.com").delete()
#         guest = list(Guest.objects.filter(email=recieved['email']))

#         if len(guest) < 1:

#             guest = Guest(
    #             id=compu.uuid4(), 
    #             fname = recieved['fname'],
    #             lname = recieved['lname'],
    #             phone = recieved['phone'],
    #             email = recieved['email'],
    #             password = make_password(recieved['password']),
    #             address = recieved['address'],
    #             otp_code = compu.rand_N_digit_int(5),
    #         )

    #         guest.save();

    #         return JsonResponse({'response':"success"}, safe=False)
    #     else:
    #         return JsonResponse({'response':"email already used, aborting"}, safe=False)


    # else:
    #     return JsonResponse({'response':"response not valid"}, safe=False)

    # #db.rmv_entry_from_email(Guest, recieved['email'])

    # return JsonResponse({'response':"success"}, safe=False)



# @api_view(['POST'])

# def login(request):

#     recieved = request.data
#     recieved_json = json.dumps(recieved, indent=4)

#     print(recieved)
    
#     registered = Guest.objects.filter(email=recieved['email']).exists();

#     if(registered):
#         user = Guest.objects.filter(email=recieved['email']).first()
        
#         if(check_password(recieved['password'], user.password)):
#             cookie = Cookie(
#                 id = compu.uuid4(),
#                 guest=user,
#                 expiration= date.today() + datetime.timedelta(days=4),
#             )

#             cookie.save();
#             return JsonResponse({'user': recieved['email'], "auth-cookie":cookie.id}, safe=False)
#         else:
#             return JsonResponse({'user':"invalid"}, safe=False)

#     else:
#         return JsonResponse({'user':"gmail not found in database"}, safe=False)
