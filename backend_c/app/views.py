from django.shortcuts import render, redirect
from django.http import HttpResponse
from utils.statics import *

from .models import *

#from .forms import *

# def index(request):

#     return render(request, index_html); 

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def search(request):
    pass

def loc(request):
    context = {
        'name': 'Beyond Van Gogh',
        'website': 'https://vangoghsanjose.com',
        'open_time': '10:00 AM - 10:00 PM',
        'address': '435 S Market St San Jose, CA 95113',
        'number': '(800) 441-0819',
        'reviews': '26',
        'star_rating': '2.5 star rating'
    }

    return render(request, pages_html+"loc.html" ,context); 


# Create your views here.

