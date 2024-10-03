from rest_framework import viewsets


from apps.tipomantenimiento.models import TipoMantenimiento
from apps.tipomantenimiento.api.serializador import TipoMantenimientoSerialidador


class TipoMantenimientoviewSet(viewsets.ModelViewSet):
    serializer_class = TipoMantenimientoSerialidador
    queryset = TipoMantenimiento.objects.all()
