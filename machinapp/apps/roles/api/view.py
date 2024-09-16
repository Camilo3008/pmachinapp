from rest_framework import viewsets

from .serializador import SerializadorRol
from apps.roles.models import Rol

#permisos
from apps.fichas.api.permisos import IsAdmin
from rest_framework.permissions import IsAuthenticated, IsAdminUser
#fin de permisos


class RolModelViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAdminUser]
    serializer_class = SerializadorRol
    queryset = Rol.objects.all()
    http_method_names = ['post', 'get', 'put']