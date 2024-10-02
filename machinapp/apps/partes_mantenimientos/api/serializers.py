from rest_framework import serializers
from apps.partes_mantenimientos.models import partes_mantenimiento
from apps.mantenimientos.models import Mantenimiento



class partes_mantenimiento_Serializer(serializers.ModelSerializer):
    par_fk_mantenimientos = serializers.PrimaryKeyRelatedField(queryset=Mantenimiento.objects.all())
    class Meta:
        model = partes_mantenimiento
        fields = ['par_fk_mantenimientos', 'par_nombre_repuesto', 'par_costos']