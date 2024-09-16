from rest_framework.viewsets import ModelViewSet
from apps.mantenimientos.api.serializer import MantenimientoSerializer
from apps.mantenimientos.models import Mantenimiento


class MantenimientoModelViewSet(ModelViewSet):
    serializer_class = MantenimientoSerializer
    queryset = Mantenimiento.objects.all()
    http_method_names = ['post', 'get', 'put']