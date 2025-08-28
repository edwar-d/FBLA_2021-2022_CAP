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

class Room(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    room_no = models.IntegerField(unique=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return str(self.room_no)
    
class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
   
    #Personal Information
    
    fname = models.CharField("First Name", max_length=255)
    lname = models.CharField("Last Name", max_length=255)
    
    email = models.EmailField()

    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=20)


    #booking info
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE, blank=True)

    check_in = models.DateField()
    check_out = models.DateField() 

    isexpired = models.BooleanField(default=False);
    
    nights = models.IntegerField(blank=True)
    amount_due = models.DecimalField(max_digits=7, decimal_places=2, blank=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)




    def __str__(self):
        return self.fname

