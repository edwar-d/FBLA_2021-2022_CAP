from django.urls import path
from . import views

urlpatterns = [
    path('dbloc', views.dbloc, name='dbloc'),
    path('api/v1/json/call', views.Call, name='Call'),   
    #path('dbSend', views.dbSend, name='dbSend'),   

]

