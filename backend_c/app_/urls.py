from django.urls import path
from . import views


urlpatterns = [
    path(r'^$', views.index, name='index'),
    path(r'^$', views.loc, name="loc"),
#    path("<int:id>", views.loc, name="loc"),
]
