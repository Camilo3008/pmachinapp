from rest_framework import serializers

from apps.areas.models import Area
from apps.sedes.api.serializador import SedeSerializador


#
from apps.sedes.models import Sedes

class AreaSerializador(serializers.ModelSerializer):
    fk_sede =serializers.PrimaryKeyRelatedField(queryset=Sedes.objects.all())
    class Meta:
        model = Area
        fields = ['area','fk_sede', 'id']
        
        
    """ def create(self, validated_data):
        fk_sede_data = validated_data.pop['fk_sede']
        
        creacion = Area.objects.create(
            fk_sede=fk_sede_data,
            **validated_data
        )
        
        return creacion """




class AreaSerializadorImport(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['fk_sede','area']