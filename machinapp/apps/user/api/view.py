from rest_framework import status
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from apps.user.models import User
from rest_framework.permissions import IsAuthenticated
# importamos el serializador
from apps.user.api.serializer import UserSerializadorPost, UserSerializadorGet, UserUpdateSerializer

# clase que permite crear un nuevo registro en la Base de Datos, en la tabla de usuarios
class UserRegisterView(viewsets.ModelViewSet):
    serializer_class = UserSerializadorPost
    queryset = User.objects.all()
    http_method_names = ['post', 'get','put']   
    
class UserApiGet(APIView):
    permission_classes = [IsAuthenticated]  
    def get(self, request):
        serializer = UserSerializadorGet(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
       


from django.core.mail import send_mail
from django.conf import settings

class UserPostSendMail(APIView):
    def post(self, request):
        numero_documento = request.data.get('numero_documento')
        try:
            user = User.objects.get(numero_documento=numero_documento)
            serializador = UserSerializadorPost(user)
           
            user_serializador = serializador.data  
            new_password = user_serializador['numero_documento']
            user_serializador['password'] = new_password
            update = UserUpdateSerializer(user, user_serializador)
                    
            user_email = user_serializador['email']
    
       
            if update.is_valid(raise_exception=True):          
                user_serializador['email']
                asunto = "Recuperación de contraseña x2"
                mensaje = f"""
                    Estimado usuario,

                    Hemos recibido una solicitud para recuperar su contraseña.
                    
                    Su nueva contraseña es {new_password}

                    Saludos,
                    El equipo de soporte
                    """
                    
                try:
                    send_mail(asunto, mensaje,settings.EMAIL_HOST_USER, [user_email], fail_silently=False)
                    update.save() 
                    return Response(
                            status=status.HTTP_200_OK,
                            data={"mensaje": "Correo enviado exitosamente"}
                        )
                except Exception as e:
                    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data={"mensaje" : "error al enviar el correo {}".format(e) })   
                     
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"mensaje" : "no se pudo"})
        except User.DoesNotExist:
            return Response(
                status=status.HTTP_404_NOT_FOUND,
                data={"mensaje": "No se encontró al usuario identificado con {}".format(numero_documento)}
                )