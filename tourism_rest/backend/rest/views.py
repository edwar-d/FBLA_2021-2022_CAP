from concurrent.futures import process
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


@api_view(['POST'])

def Call(request):
    recieved = request.data
    recieved_json = json.dumps(recieved, indent=4)
    recieved_serializer = InputSerializer(data=recieved)

    if recieved_serializer.is_valid():
        print("--------------------------")
        print("RECIEVED: ",recieved)
        print("--------------------------")

        ids = Process(recieved)
        db = []

        for id in ids:
            _  = json.dumps( attractionToDictionary(id) )
            db.append(_)
#            db.append(attractionToDictionary(id),indent=4))

        print(db)
        # db = json.dumps( db , indent=4)
        # print(type(db))
        # with open('json_data.json', 'w') as outfile:
        #     outfile.write(db)

        # print(db)
        
        return HttpResponse(str(db), content_type='application/json')

#        return HttpResponse(recieved, content_type='application/json')
#        return JsonResponse(recieved_serializer.data, status=status.HTTP_201_CREATED) 
#        pass
    else:
        return JsonResponse(recieved_serializer.errors, status=status.HTTP_400_BAD_REQUEST)        



class InputView(viewsets.ModelViewSet):
    serializer_class = InputSerializer
    queryset = InputField.objects.all()

class AttractionView(viewsets.ModelViewSet):
    serializer_class = AttractionSerializer
    queryset = Attractions.objects.all()