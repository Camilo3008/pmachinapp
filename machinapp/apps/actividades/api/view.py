from rest_framework import viewsets
from apps.actividades.models import Actividad
from apps.actividades.api.serializer import ActividadesSerializer

from rest_framework.permissions import IsAuthenticated

class ActividadModelViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Actividad.objects.all()
    serializer_class = ActividadesSerializer
    http_method_names = ['post', 'get', 'put']