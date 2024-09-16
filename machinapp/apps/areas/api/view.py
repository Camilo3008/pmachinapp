from rest_framework import viewsets

from apps.areas.api.serializador import AreaSerializador
from apps.areas.models import Area


class AreaviewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = AreaSerializador
    http_method_names = ['get', 'post', 'put']