from rest_framework.routers import DefaultRouter
from django.urls import path, include
from apps.tipoequipo.api.view import TipoEquipoModelViewSet



router_tipoequipo = DefaultRouter()
router_tipoequipo.register('tipoequipo',TipoEquipoModelViewSet) 


urlpatterns = [
    path('', include(router_tipoequipo.urls))
]