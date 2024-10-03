from rest_framework import serializers
from apps.mantenimientos.models import Mantenimiento
from apps.fichas.models import Ficha
from apps.tipomantenimiento.models import TipoMantenimiento


class MantenimientoSerializer(serializers.ModelSerializer):
    fk_ficha = serializers.PrimaryKeyRelatedField(queryset=Ficha.objects.all())
    fk_tipo_mantenimiento = serializers.PrimaryKeyRelatedField(queryset=TipoMantenimiento.objects.all())
    class Meta:
        model = Mantenimiento
        fields = ['id','codigo','descripcion','estado','fecha_proxima', 'descripcion', 'ficha_soporte', 'costo_final', 'fk_ficha', 'fk_tipo_mantenimiento']
        