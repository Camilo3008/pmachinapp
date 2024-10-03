from rest_framework.routers import DefaultRouter
from apps.roles.api.view import RolModelViewSet


router_rol = DefaultRouter()
router_rol.register(prefix='rol',basename= 'rol',viewset=RolModelViewSet) 