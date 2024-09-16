from rest_framework import viewsets

from apps.centros.api.serializador import CentroSerializador
from apps.centros.models import Centros

class CentroModelView(viewsets.ModelViewSet):
    serializer_class = CentroSerializador
    queryset = Centros.objects.all()
    http_method_names = ['get', 'post', 'put']