from rest_framework import serializers
from .models import InputField, Attractions


class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputField
        fields = ("city","rating","guided_tours","number_of_reviews","type_of")

class AttractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attractions
        fields = ('name','type_of','loc','website','open_time','address','number','reviews','star_rating','tour','review_category')
