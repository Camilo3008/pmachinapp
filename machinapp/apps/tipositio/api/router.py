from rest_framework.routers import DefaultRouter
from django.urls import path, include
from apps.tipositio.api.view import Tipo_sitioviewSet


router_tipo = DefaultRouter()
router_tipo.register('tipositio', Tipo_sitioviewSet)

urlpatterns = [
    path('', include(router_tipo.urls))
]
