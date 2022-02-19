from django.urls import path
from . import views

urlpatterns = [
    path('dbloc', views.dbloc, name='dbloc'),
    path('api/v1/json/call', views.Call, name='Call'), 
    path('api/v1/json/json_rd', views.json_rd, name='json_rd'),   
  
    #path('dbSend', views.dbSend, name='dbSend'),   

]

