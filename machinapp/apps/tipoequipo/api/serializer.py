from rest_framework import serializers

from apps.tipoequipo.models import TipoEquipo



class TipoEquipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoEquipo
        fields = ('nombre_equipo', 'id')
