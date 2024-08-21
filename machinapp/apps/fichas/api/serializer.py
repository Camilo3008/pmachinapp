from rest_framework import serializers

from apps.fichas.models import Ficha

from apps.ambientes.api.serializer import AmbienteGetSerializador


############ datos al momento de que la ficha sea llamada ############ 
############ por medio de el id del ambiente              ############
class FichaSerializer(serializers.ModelSerializer):
   # variable = serializers.CharField(source = 'tipoequipo.nombre_equipo', read_only = True)
    fk_ambiente = AmbienteGetSerializador()
    class Meta: 
        model = Ficha
        fields = ['id', 'placa_sena', 'imagen', 'estado', 'fk_ambiente']
        
  
        
############ detalle de una ficha ############
class FichaSerializerDetalle(serializers.ModelSerializer):
    class Meta:
        model = Ficha
        fields = ('id', 
                  'placa_sena',
                  'serial',
                  'fecha_adquisicion',
                  'fecha_inicio_garantia',
                  'descripcion',
                  'estado',
                  'imagen',
                  'fecha_registro',
                  'fk_ambiente',
                  'fk_tipo_equipo'
                  )
        
        def create(self, request, *args, **kwargs):
            imagen = request.FILE.get('imagen')
            print(imagen)
                  
                  
                  
class ImageSerializer(serializers.Serializer):
    img_url = serializers.SerializerMethodField()
    def get_img_url(self, obj):
        request = self.context.get('request')
        img_path = 'static/img'