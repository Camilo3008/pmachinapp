from rest_framework.serializers import ModelSerializer
from apps.roles.models import Rol


class SerializadorRol(ModelSerializer):
    class Meta:
        model = Rol
        fields = ['nombre', 'descripcion']




# clase de serializador para ser llamado desde la app de usuarios
class SerializadorRolUser(ModelSerializer):
    class Meta:
        model = Rol
        fields = ['nombre',]