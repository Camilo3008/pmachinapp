from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

#permisos
from apps.fichas.api.permisos import IsAdmin
from rest_framework.permissions import IsAuthenticated
#fin de permisos

### modelo y serializadores
from apps.fichas.models import Ficha
from apps.fichas.api.serializer import FichaSerializerAmb, FichaSerializerDetalle, FichaSerializerRegisterUpdate, FichaLisar
 


import qrcode


#registrar  una ficha tecnica.
# url //http://127.0.0.1:8000/api/ficha/2/
class FichaRegisterUpdate(viewsets.ModelViewSet):

    serializer_class = FichaSerializerRegisterUpdate
    queryset = Ficha.objects.all()
    http_method_names = [ 'put']
    parser_classes = [MultiPartParser, FormParser]


class FichaRegistrar(APIView):

    def post(self, request):
        serializer = FichaSerializerRegisterUpdate(data = request.data)

        if serializer.is_valid():
            instance = serializer.save()
            qr_code_url = self.generate_qr_code(instance.id)

            instance.codigoQR = qr_code_url
            instance.save()
            return Response({'id': instance.id, 'qr_code_path': qr_code_url}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_qr_code(self, object_id):
        # Genera el código QR
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        linkPagina =  f'http//{object_id}'
        qr.add_data(linkPagina)
        qr.make(fit=True)
        # Guarda el código QR en un archivo
        img = qr.make_image(fill_color="black", back_color="white")
        codigoQR = f'{object_id}.png'  
        img.save(codigoQR)
        return codigoQR












#listar todas las  fichas
class FichaListar(viewsets.ModelViewSet):

    serializer_class = FichaLisar
    queryset = Ficha.objects.all()
    http_method_names = ['get']


# fichas buscadadas por el id del ambiente
#http://127.0.0.1:8000/api/fichas/ambiente/{id} 
class FichasAmbienteGet(APIView):
    #permission_classes = [IsAuthenticated]
    def get(self, request, id=None):
        ficha = Ficha.objects.filter(fk_ambiente=id)
        serializar = FichaSerializerAmb(ficha, many= True)
        
        if not serializar.data:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"error": "No se encontraron fichas para este ambiente"})
        
        return Response(status=status.HTTP_200_OK, data=serializar.data)





""" -------------------------------------------------------------------- """
# crear un nuevo registro de la ficha tecnica de una maquina o equipo
class FichasPostSet(viewsets.ModelViewSet):
    permission_classes = [IsAdmin]
    serializer_class = FichaSerializerDetalle
    queryset = Ficha.objects.all()
    http_method_names = ['post', 'put']
    parser_classes = [MultiPartParser,]




# detalle de la fichas
class FichasModelViewSet(APIView): 
    #permission_classes = [IsAuthenticated]
    def get(self, request, id=None):
        if id:
            ficha = Ficha.objects.filter(id=id)
            serializar = FichaSerializerDetalle(ficha, many= True)
            
        return Response(status=status.HTTP_200_OK, data=serializar.data)
