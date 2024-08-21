from rest_framework.routers import DefaultRouter
from apps.centros.api.view import CentroModelView
from django.urls import path, include

router_centro = DefaultRouter()
router_centro.register('centros', CentroModelView)


urlpatterns = [
    path('', include(router_centro.urls))
]