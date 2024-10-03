from rest_framework import serializers
from apps.centros.models import Centros



class CentroSerializador(serializers.ModelSerializer):
   
    class Meta:
        model = Centros
        fields = ['centro']