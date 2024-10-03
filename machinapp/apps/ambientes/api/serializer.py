from rest_framework import serializers
from apps.ambientes.models import Ambientes

from apps.tipositio.api.serializador import Tipo_sitioSerializador
from apps.areas.api.serializador import AreaSerializador, AreaSerializadorImport


""" serializador para traer informacion de otros serializadores """
class AmbienteSerializador(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = ['id', 'ambientes','img','fk_tipo_sitio', 'fk_area']

        
""" serializador para metodo get """        
class AmbienteGetSerializador(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = ['id','ambientes', 'img','fk_tipo_sitio','fk_area']
        
    