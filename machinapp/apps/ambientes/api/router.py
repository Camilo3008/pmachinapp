from rest_framework.routers import DefaultRouter
from apps.ambientes.api.view import AmbienteViewSet, AmbienteViewSetPost

from django.urls import path, include

""" router_ambiente = DefaultRouter()
router_ambiente.register('ambiente', AmbienteViewSet)

urlpatterns = [
    path('', include(router_ambiente.urls))
]
 """
 
router_ambiente = DefaultRouter()
router_ambiente.register('ambiente', AmbienteViewSetPost)
 
 
app_name = 'ambientes'



urlpatterns = [
    path('',AmbienteViewSet.as_view()),
    path('', include(router_ambiente.urls)),
    path('<int:id>/', AmbienteViewSet.as_view())
]