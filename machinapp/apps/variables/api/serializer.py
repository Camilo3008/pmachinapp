from rest_framework import serializers
from apps.variables.models import Variable

class VariablesSerializador(serializers.ModelSerializer):
    class Meta:
        model = Variable
        fields = ['id','nombre', 'descripcion', 'var_clase', 'var_tipoDato', 'fk_tipo_equipo']

""" 
class VariableInfoDet(serializers.ModelSerializer):

    class Meta:
        model = Variable
        field """