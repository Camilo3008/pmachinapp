from rest_framework import serializers
from apps.variables.models import Variable

class VariablesSerializador(serializers.ModelSerializer):
    class Meta:
        model = Variable
        fields = ['id','nombre', 'descripcion']