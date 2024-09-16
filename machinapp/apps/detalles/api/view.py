from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from apps.detalles.models import Detalle
from apps.detalles.api.serializer import DetalleSerializador




#registrar un detalle.
class RegisterUpdateDetalle(viewsets.ModelViewSet): 

    serializer_class = DetalleSerializador
    queryset = Detalle.objects.all()
    http_method_names = ['post', 'put', 'get']



#registrar varios detalles. 
class RegistrarDetalle(APIView):
    
    def post(self, request, *args, **kwargs):
        
        serializer = DetalleSerializador(data=request.data, many=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'detalles registrados'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


""" class DetalleModelViewSet(viewsets.ModelViewSet):
    serializer_class = DetalleSerializador
    queryset = Detalle.objects.all()
    http_method_names = ['post', 'get', 'put'] 
"""


########### detalle de una ficha con sus variables y detalles de (variavle)

""" class DetalleModelViewSet(APIView):
    
    def get(self,request, id= None):
        detalle = Detalle.objects.filter(fk_ficha=id)
        serializador = DetalleSerializador(detalle, many=True)
        if not serializador.data:



            return Response(status=status.HTTP_404_NOT_FOUND, data={"mensaje" : "no se encontro la ficha"})
        return Response(status=status.HTTP_200_OK, data=serializador.data)

 """
