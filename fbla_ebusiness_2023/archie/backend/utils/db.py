from django.db import models
from rest.models import *
from .compu import *
from django.contrib.auth.hashers import check_password

def rmv_entry_from_email(model, email):
    model.objects.filter(email=email).delete()

def save_unique_entry(Model, model):
    _ = list(Model.objects.filter(id=model.id))
    if not (len(_) > 0):
        model.save()
        print("saved: ",model)
    

def insert_db_rooms(type, price, beds, info, room_no, cur_price):
    rt = RoomType(
        id=uuid4(),
        type=type,
        price=price,
        numBeds=beds
    )

    save_unique_entry(RoomType, rt);

    rs = RoomStatus(
        id = uuid4(),
        status=info,
    )

    
    save_unique_entry(RoomStatus, rs);

    r = Room(
        id=uuid4(),
        room_type_id=rt,
        room_status_id=rs,
        room_no=room_no,
        price=cur_price,
    )

    save_unique_entry(Room, r);

def auth(email, password):
    registered = Guest.objects.filter(email=email).exists();
    if(registered):
        user = Guest.objects.filter(email=email).first()
        if(check_password(password, user.password)):
            return user
        else:
            return "password-incorrect"
    
    return "not-registered"


def available_rooms(check_in, check_out):
    open_books = Booking.objects.filter(isexpired = False)
    all_rooms= list(Room.objects.all())

    #print(all_rooms)

    #print(open_books)

    for book in open_books:
        if not available(check_in, check_out, book.check_in, book.check_out):
            rm = Room.objects.filter(room_no=book.room_id.room_no).first()
            
            if rm in all_rooms:
                all_rooms.remove(rm)
    
    return all_rooms

        


#insert_db_rooms()