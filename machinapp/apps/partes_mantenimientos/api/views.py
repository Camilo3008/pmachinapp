from rest_framework.viewsets import ModelViewSet
from apps.partes_mantenimientos.api.serializers import partes_mantenimiento_Serializer
from apps.partes_mantenimientos.models import partes_mantenimiento


class partes_mantenimiento_ModelViewSet(ModelViewSet):
    serializer_class = partes_mantenimiento_Serializer
    queryset = partes_mantenimiento.objects.all()
    http_method_names = ['post', 'get', 'put']