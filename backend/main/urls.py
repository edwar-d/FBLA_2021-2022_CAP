from django.urls import path

from . import views
urlpatterns = [
    path('main', views.index, name='index'),
    path('search', views.search, name='search'),
    path('loc', views.loc, name='loc'),

    path('debug', views.debug, name='debug'),
]

