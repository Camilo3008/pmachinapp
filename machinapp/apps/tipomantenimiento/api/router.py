from rest_framework.routers import DefaultRouter

from django.urls import path, include


from apps.tipomantenimiento.api.view import TipoMantenimientoviewSet


router_tMantenimiento = DefaultRouter()
router_tMantenimiento.register('tipomantenimiento', TipoMantenimientoviewSet)

urlpatterns = [
    path('', include(router_tMantenimiento.urls))
]