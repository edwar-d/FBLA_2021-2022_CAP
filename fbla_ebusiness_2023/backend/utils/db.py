#python manage.py migrate --run-syncdb

from django.db import models
from rest.models import *
from .compu import *

def rmv_entry_from_email(model, email):
    model.objects.filter(email=email).delete()

def save_unique_entry(Model, model):
    _ = list(Model.objects.filter(id=model.id))
    if not (len(_) > 0):
        model.save()
        print("saved: ",model)
    

def insert_db_rooms(room_no, cur_price):

    r = Room(
        id=uuid4(),
        room_no=room_no,
        price=cur_price,
    )

    _ = list(Room.objects.filter(room_no=r.room_no))

    if not (len(_) > 0):
        r.save()
        print("saved: ",r.room_no)
    else:
        print("room num already taken")


def available_rooms(check_in, check_out):
    open_books = Book.objects.filter(isexpired = False)
    all_rooms= list(Room.objects.all())

    #print(all_rooms)

    #print(open_books)

    for book in open_books:
        if not available(check_in, check_out, book.check_in, book.check_out):
            rm = Room.objects.filter(room_no=book.room_id.room_no).first()
            
            if rm in all_rooms:
                all_rooms.remove(rm)
    
    return all_rooms

        


# insert_db_rooms(1,110)
# insert_db_rooms(2,150)
# insert_db_rooms(3,165)
# insert_db_rooms(4,220)