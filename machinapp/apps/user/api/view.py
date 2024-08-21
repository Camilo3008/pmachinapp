from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.user.models import User
from rest_framework.permissions import IsAuthenticated
# importamos el serializador
from apps.user.api.serializer import UserSerializadorPost, UserSerializadorGet, UserUpdateSerializer

# clase que permite crear un nuevo registro en la Base de Datos, en la tabla de usuarios
class UserRegisterView(APIView):
    def post(self, request):
        serialiando = UserSerializadorPost(data=request.data)
        if serialiando.is_valid(raise_exception=True):
            serialiando.save()
            return Response(serialiando.data, status=status.HTTP_201_CREATED)
        return Response(serialiando.error, status=status.HTTP_400_BAD_REQUEST)    
    

    
class UserApiGet(APIView):
    permission_classes = [IsAuthenticated]  
    def get(self, request):
        serializer = UserSerializadorGet(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request):
        user = User.objects.get(id=request.user.id)
        serializar_data_user = UserUpdateSerializer(user, data=request.data)
        if serializar_data_user.is_valid(raise_exception=True):
            serializar_data_user.save()
            return Response(serializar_data_user.data)
        
        return Response(serializar_data_user.errors, status=status.HTTP_400_BAD_REQUEST)
       
    