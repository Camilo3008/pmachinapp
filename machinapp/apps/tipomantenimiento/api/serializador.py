from rest_framework import serializers

from apps.tipomantenimiento.models import TipoMantenimiento

class TipoMantenimientoSerialidador (serializers.ModelSerializer):
    class Meta:
        model = TipoMantenimiento
        fields = '__all__'