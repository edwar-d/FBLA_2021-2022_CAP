from rest_framework import serializers
from .models import InputField, Attractions


class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputField
        fields = ('city', 'rating', 'type_c')


class AttractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attractions
        fields = ('name','type','loc','website','open_time','address','number','reviews','star_rating')

