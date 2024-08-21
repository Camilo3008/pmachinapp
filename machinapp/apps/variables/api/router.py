from rest_framework.routers import DefaultRouter
from apps.variables.api.view import VariableModelViewSet

from django.urls import path, include

router_variable = DefaultRouter()
router_variable.register('variable', VariableModelViewSet)

urlpatterns = [
    path('', include(router_variable.urls))
]