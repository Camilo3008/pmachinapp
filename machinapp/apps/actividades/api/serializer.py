from rest_framework import serializers
from apps.actividades.models import Actividad


class ActividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = '__all__'