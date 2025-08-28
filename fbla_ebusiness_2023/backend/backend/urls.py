"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest import views

router = routers.DefaultRouter()
router.register(r'booking', views.BookingView)
# router.register(r'guest', views.GuestView)
router.register(r'roomtypes', views.RoomView)
# router.register(r'cookies', views.CookieView)
version = '1.0.1'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v'+version+'/json/', include(router.urls)),

    path('', include('rest.urls')),
]
