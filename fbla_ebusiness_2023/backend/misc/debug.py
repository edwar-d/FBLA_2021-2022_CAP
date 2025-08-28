import datetime


s_x1 = "2023-02-01"
s_y1 = "2023-02-05"

s_x2 = "2023-02-03"
s_y2 = "2023-02-06"



x1 = datetime.datetime.strptime(s_x1, "%Y-%m-%d").date()
y1 = datetime.datetime.strptime(s_y1, "%Y-%m-%d").date()
x2 = datetime.datetime.strptime(s_x2, "%Y-%m-%d").date()
y2 = datetime.datetime.strptime(s_y2, "%Y-%m-%d").date()

#x1 = x1-datetime.timedelta(days=1)
#x2 = x2-datetime.timedelta(days=1)
y1 = y1-datetime.timedelta(days=1)
y2 = y2-datetime.timedelta(days=1)

print(y1<x2)

if (y1<x2 and x1<x2) or (y1>y2 and x1>y2):
    print("avalible")
else:
    print("not avalible")

print("x1: ", x1, ", y1: ", y1)
print("x2: ", x2, ", y2: ", y2)