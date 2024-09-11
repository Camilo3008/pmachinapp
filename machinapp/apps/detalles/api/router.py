from rest_framework.routers import DefaultRouter
from django.urls import path, include
from apps.detalles.api.view import RegisterUpdateDetalle, RegistrarDetalle


router_detalle = DefaultRouter()

router_detalle.register(prefix='detalle', basename='detalle', viewset= RegisterUpdateDetalle)

urlpatterns = [
    path('registrarDet/', RegistrarDetalle.as_view(), name="registrar_detalles" ), 
    path('', include(router_detalle.urls))
]

"""  path('ficha/<int:id>',DetalleModelViewSet.as_view()), """