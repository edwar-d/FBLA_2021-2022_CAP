import uuid
from django.db import models

# Create your models here.
'''
Calendar:

3pm - 11am : one night

Room #
Type of room
Price
Customer Information:
Fname Lname
email

Check in date - Check out date

'''

class Guest(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    fname = models.CharField("First Name", max_length=255)
    lname = models.CharField("Last Name", max_length=255)
    phone = models.CharField(max_length=20)

    otp_code = models.CharField(max_length=6, unique=True, null=True)
    email_verified = models.BooleanField(default=False)
    
    email = models.EmailField()
    password = models.CharField(max_length=225)

    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.fname


class RoomType(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    type = models.CharField(max_length=30, unique=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)


    numBeds = models.IntegerField()

    created_at = models.DateTimeField("Created At", auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f'Room {self.type} price: {self.price}'

class RoomStatus(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    status = models.CharField(max_length=20, unique=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f'Room {self.status}'
        

class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    room_type_id = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    room_status_id = models.ForeignKey(RoomStatus, on_delete=models.CASCADE)

    room_no = models.IntegerField(max_length=5, unique=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f'Room {self.room_no} price:{self.price} is currently {self.room_status_id}'


class Booking(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    isexpired = models.BooleanField(default=False);
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE, blank=True)
    guest_id = models.ForeignKey(Guest, on_delete=models.CASCADE, blank=True)
    

    check_in = models.DateField()
    check_out = models.DateField()  
    
    nights = models.IntegerField(blank=True)
    amount_due = models.DecimalField(max_digits=7, decimal_places=2, blank=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f'Booking by customer {self.guest_id} for room {self.room_id} from {self.check_in} to {self.check_out}'


class Cookie(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE, blank=True)

    expiration = models.DateField()
    is_valid = models.BooleanField(default=True);
    
    def __str__(self):
        return f'Cookie expires on {self.expiration} for {self.guest.email}'

