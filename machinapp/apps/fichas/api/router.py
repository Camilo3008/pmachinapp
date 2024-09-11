from rest_framework.routers import DefaultRouter
from django.urls import path, include
from apps.fichas.api.view import FichasModelViewSet, FichasAmbienteGet, FichasPostSet, FichaRegisterUpdate, FichaListar


router_ficha = DefaultRouter()
router_ficha.register(prefix='registrar', basename='registrar', viewset=FichaRegisterUpdate)
router_ficha.register( prefix='listFichas', basename='listFichas', viewset=FichaListar)




urlpatterns = [
    path('fichas/',FichasModelViewSet.as_view()),
    path('fichas/detalle/<int:id>',FichasModelViewSet.as_view()),
    path('fichas/ambiente/<int:id>', FichasAmbienteGet.as_view()),
    path('fichas/', include(router_ficha.urls))
]


""" 
router_ficha = DefaultRouter()
router_ficha.register('fichas', viewset=FichasPostSet) """