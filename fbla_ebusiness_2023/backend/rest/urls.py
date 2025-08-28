from django.urls import path
from utils.static import version
from . import views


urlpatterns = [
    # path('dbloc', views.dbloc, name='dbloc'),
    path('api/v'+version+'/json/p/book', views.book, name='book'),
    # path('api/v'+version+'/json/p/signup', views.signup, name='signup'),
    # path('api/v'+version+'/json/p/login', views.login, name='login'),
    path('api/v'+version+'/json/p/gar', views.get_avalible_rooms, name='gar'),

    # path('api/v1/json/receive', views.Receive, name='Receive'), 
    # path('api/v1/json/json_rd', views.json_rd, name='json_rd'),   
  
    #path('dbSend', views.dbSend, name='dbSend'),   

]