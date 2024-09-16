from rest_framework import serializers
from apps.sedes.models import Sedes
from apps.centros.api.serializador import CentroSerializador

from apps.centros.models import Centros


class   SedeSerializador(serializers.ModelSerializer):    
  
    class Meta:
        model = Sedes
        fields = ['id','sede']



