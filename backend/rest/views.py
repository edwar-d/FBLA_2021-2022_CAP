
from concurrent.futures import process
import socket
import json
from glob import glob
from textwrap import indent

from django.views import View
from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import HttpResponse, HttpResponseRedirect


from rest_framework.parsers import JSONParser  
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .serializers import InputSerializer, AttractionSerializer
from .models import InputField, Attractions
from utils.process import Process, attractionToDictionary

dT = {}
db = []
# Create your views here.
#@api_view(['GET'])

def dbloc(request):
#    return HttpResponse(dT, content_type='application/json')
    if request.method == 'GET':
        attractions = Attractions.objects.all()
        serializer = AttractionSerializer(attractions, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

@api_view(['GET'])

def Receive(request):

    return HttpResponse(str(db), content_type='application/json')

@api_view(['POST'])

def Call(request):
    global db

    recieved = request.data
    recieved_json = json.dumps(recieved, indent=4)
    recieved_serializer = InputSerializer(data=recieved)
    print(recieved)
    
    if recieved_serializer.is_valid():

        print("--------------------------")
        print("RECIEVED: ",recieved_json)
        print("--------------------------")

        ids = Process(json.loads(recieved_json))
        db = []
    
        for id in ids:
            _  = json.dumps( attractionToDictionary(id) )
            db.append(_)
#            db.append(attractionToDictionary(id),indent=4))

        return HttpResponse(str(db), content_type='application/json')
    

#        return HttpResponse(recieved, content_type='application/json')
#        return JsonResponse(recieved_serializer.data, status=status.HTTP_201_CREATED) 
#        pass
    else:
        return JsonResponse(recieved_serializer.errors, status=status.HTTP_400_BAD_REQUEST)        




#"D:\documents\GitHub\FBLA_2021-2022_CAP\tourism_rest\backend\render_data.json"

def json_rd(request):
    with open("render_data.json") as jd:
        db = json.load(jd, )

    return JsonResponse(db, safe=False)

class InputView(viewsets.ModelViewSet):
    serializer_class = InputSerializer
    queryset = InputField.objects.all()

class AttractionView(viewsets.ModelViewSet):
    serializer_class = AttractionSerializer
    queryset = Attractions.objects.all()