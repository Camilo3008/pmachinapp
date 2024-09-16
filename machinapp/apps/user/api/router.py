from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

from apps.user.api.view import UserRegisterView, UserApiGet,UserPostSendMail


urlpatterns = [
    path('registro/', UserRegisterView.as_view()),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('me/', UserApiGet.as_view()),
    path('recuperar/',UserPostSendMail.as_view(), name='recuperar')
]