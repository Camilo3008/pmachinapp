from rest_framework.routers import DefaultRouter

from apps.actividades.api.view import ActividadModelViewSet

from django.urls import path,include


router_actividades = DefaultRouter()
router_actividades.register('actividades', ActividadModelViewSet)

urlpatterns = [
    path('', include(router_actividades.urls))
]