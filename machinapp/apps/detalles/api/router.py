from rest_framework.routers import DefaultRouter
from django.urls import path, include
from apps.detalles.api.view import DetalleModelViewSet


urlpatterns = [
    path('ficha/<int:id>',DetalleModelViewSet.as_view())
]