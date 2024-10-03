from rest_framework.routers import DefaultRouter

from apps.partes_mantenimientos.api.views import partes_mantenimiento_ModelViewSet

router_partes_mantenimiento = DefaultRouter()
router_partes_mantenimiento.register(prefix = 'partes_mantenimiento', basename = 'partes_mantenimiento', viewset = partes_mantenimiento_ModelViewSet)