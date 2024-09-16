from rest_framework.routers import DefaultRouter
from apps.mantenimientos.api.view import MantenimientoModelViewSet

router_mantenimiento = DefaultRouter()
router_mantenimiento.register(prefix='mantenimiento', basename="Mantenimiento",viewset=MantenimientoModelViewSet)