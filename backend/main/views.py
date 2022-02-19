from django.shortcuts import render
from django.http import HttpResponse

from utils.statics import *
from .models import *

from django.conf import settings
from django.urls import URLPattern, URLResolver

urlconf = __import__(settings.ROOT_URLCONF, {}, {}, [''])

def list_urls(lis, acc=None):
    if acc is None:
        acc = []
    if not lis:
        return
    l = lis[0]
    if isinstance(l, URLPattern):
        yield acc + [str(l.pattern)]
    elif isinstance(l, URLResolver):
        yield from list_urls(l.url_patterns, acc + [str(l.pattern)])
    yield from list_urls(lis[1:], acc)


def index(request):
    

    return HttpResponse("Hello, world. You're at the polls index.")


def debug(request):
    routes = []
    for p in list_urls(urlconf.urlpatterns):
        for r in p:
            routes.append(r)

    debug = {
        'log':routes
    }

    return render(request,pages_html+"debug.html" ,{"debug":debug}); 





def search(request):
    return HttpResponse("Not Done")


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

    return render(request,pages_html+"loc.html" ,{"context":context}); 
