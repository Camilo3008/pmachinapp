from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

from apps.user.api.view import UserRegisterView, UserApiGet,UserPostSendMail


router_usuario = DefaultRouter()
router_usuario.register("user",UserRegisterView)

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('me/', UserApiGet.as_view()),
    path('recuperar/',UserPostSendMail.as_view(), name='recuperar'),
    path('',include(router_usuario.urls))
]



