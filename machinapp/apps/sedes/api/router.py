from rest_framework.routers import DefaultRouter

from apps.sedes.api.view import SedeModelViewSet


router_sede = DefaultRouter()
router_sede.register('sede', SedeModelViewSet, basename="sede")



""" r'sede', SedeModelViewSet, basename='rol' """