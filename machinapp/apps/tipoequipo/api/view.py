from rest_framework import viewsets


from apps.tipoequipo.api.serializer import TipoEquipoSerializer
from apps.tipoequipo.models import TipoEquipo


class TipoEquipoModelViewSet(viewsets.ModelViewSet):
    serializer_class = TipoEquipoSerializer
    queryset = TipoEquipo.objects.all()