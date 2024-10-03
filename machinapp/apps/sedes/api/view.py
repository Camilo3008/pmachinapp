from rest_framework import viewsets

from apps.sedes.api.serializador import SedeSerializador
from apps.sedes.models import Sedes

class SedeModelViewSet(viewsets.ModelViewSet):
    serializer_class = SedeSerializador
    queryset = Sedes.objects.all()
    http_method_names = ['post', 'get', 'put']
    