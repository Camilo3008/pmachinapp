from rest_framework import viewsets


from apps.tipositio.api.serializador import Tipo_sitioSerializador
from apps.tipositio.models import Tipo_sitio

class Tipo_sitioviewSet(viewsets.ModelViewSet):
    serializer_class = Tipo_sitioSerializador
    queryset = Tipo_sitio.objects.all()
