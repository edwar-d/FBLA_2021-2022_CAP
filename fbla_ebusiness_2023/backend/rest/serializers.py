from rest_framework import serializers
from .models import *

'''
Guest
Booking
'''

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = (
             'id', 'fname', 'lname', 'address', 'phone', 'email',
             'isexpired', 'room_id', 'check_in', 'check_out', 'nights', 'amount_due'
        )

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'id', 'room_no', 'price'
        )