from rest_framework import serializers
from apps.tipositio.models import Tipo_sitio

class Tipo_sitioSerializador(serializers.ModelSerializer):
    class Meta:
        model = Tipo_sitio
        fields = '__all__'