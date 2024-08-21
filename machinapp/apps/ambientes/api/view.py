from apps.ambientes.models import Ambientes
from rest_framework import viewsets

# serializadores para las clases
from apps.ambientes.api.serializer import AmbienteSerializador,AmbienteGetSerializador

class AmbienteViewSetPost(viewsets.ModelViewSet):
    queryset = Ambientes.objects.all()
    serializer_class = AmbienteSerializador
    http_method_names = ['post']
    
    

""" ######################## APIVIEW  ######################## """
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView 

class AmbienteViewSet(APIView):
    def get(self,request, id=None):
        if id:
            ambiente = Ambientes.objects.filter(fk_area=id)
            serializador = AmbienteGetSerializador(ambiente, many=True)
        else:
            serializador = AmbienteSerializador(Ambientes.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data=serializador.data)   
