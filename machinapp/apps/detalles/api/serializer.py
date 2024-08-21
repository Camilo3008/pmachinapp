from rest_framework import serializers
from apps.detalles.models import Detalle
from collections import defaultdict

######### serializadores de otros modelos ###########
from apps.variables.api.serializer import VariablesSerializador
from apps.fichas.api.serializer import FichaSerializerDetalle
### fin'


#### todo los datos de diferentes tablas
class DetalleSerializador(serializers.ModelSerializer):
    fk_variable = VariablesSerializador()
    fk_ficha = FichaSerializerDetalle()
    class Meta:
        model = Detalle
        fields = [ 'valor', 'fk_variable', 'fk_ficha' ]
    
                    
    """ def to_representation(self, instance):
        data = super().to_representation(instance)

        result = []
        for detalle in data:
            if isinstance(detalle, dict) and 'fk_ficha' in detalle:
                fk_ficha = detalle.pop('fk_ficha')
                detalles = [detalle]
                result.append({'fk_ficha': fk_ficha, 'detalles': detalles})

        return result """