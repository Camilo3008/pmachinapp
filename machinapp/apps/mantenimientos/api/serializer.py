from rest_framework import serializers
from apps.mantenimientos.models import Mantenimiento
from apps.fichas.models import Ficha


class MantenimientoSerializer(serializers.ModelSerializer):
    fk_ficha = serializers.PrimaryKeyRelatedField(queryset=Ficha.objects.all())
    class Meta:
        model = Mantenimiento
        fields = ['id','codigo','descripcion','estado','fecha_realizacion', 'fk_ficha']
    
    
    def create(self, validated_data):
        fk_ficha_data = validated_data.pop("fk_ficha")
        fk_ficha = Ficha.objects.create(**fk_ficha_data)
        parte = Mantenimiento.objects.create(fk_ficha=fk_ficha,**validated_data)

        return parte