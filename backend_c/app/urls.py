from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('', views.loc, name="loc"),
#    path("<int:id>", views.loc, name="loc"),
]

