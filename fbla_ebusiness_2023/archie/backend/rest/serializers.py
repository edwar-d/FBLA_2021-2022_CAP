from rest_framework import serializers
from .models import *

'''
Guest
Booking
'''
class GuestSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = (
            'id', 'fname', 'lname', 'address', 'phone', 'email', 'password', 'otp_code', 'email_verified', 'created_at', 'updated_at'

        )


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = (
             'id', 'isexpired', 'room_id', 'guest_id', 'check_in', 'check_out', 'nights', 'amount_due'
        )



class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'id', 'room_type_id', 'room_status_id', 'room_no', 'price'
        )



class CookieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cookie
        fields = (
            'id', 'guest', 'expiration', 'is_valid'
        )