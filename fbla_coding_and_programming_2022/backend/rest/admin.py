from django.contrib import admin
from .models import InputField, Attractions

# Register your models here.
class InputFieldsAdmin(admin.ModelAdmin):
    list_input = ('city', 'rating', 'type_c')

class AttractionsAdmin(admin.ModelAdmin):
    list_input = ('name','type','loc','website','open_time','address','number','reviews','star_rating')

admin.site.register(InputField, InputFieldsAdmin)
admin.site.register(Attractions, AttractionsAdmin)
