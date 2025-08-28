import requests

version = '1.1.2'
url = 'http://127.0.0.1:8000/api/v'+version+'/json/p/book'
print("url: ", url)

'''
jj_rog.042@gmail.com
fjiewq091
''' 


signup = {
    'fname': 'Josh',
    'lname': 'Rog',
    'email':'jj_rog.042@gmail.com',
    'password':'fjiewq091',
    'phone':'16696519342',
    'address':'784 Lyn Ave',
}

login1 = {
    'email':'jj_rog.042@gmail.com',
    'password':'fjiewq091'
}


login2 = {
    'email':'joedobbs.042@gmail.com',
    'password':'qwertyuiop2'
}

booking = {
    'email':'jj_rog.042@gmail.com',
    'password':'fjiewq091',
    'room_no':2,
    'check_in': '2023-05-01',
    'check_out':'2023-05-10'
}

roomTypes = [
    {
        'type':'',
        'price':'',
        'numBeds':'',
    },
]


get_rooms = {
    "check_in": "2023-02-01",
    "check_out": "2023-02-04"
}

myobj=booking

x = requests.post(url, json = myobj)

print(x.text)