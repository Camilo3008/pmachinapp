from rest_framework.serializers import ModelSerializer, ValidationError

## model de user 
from apps.user.models import User

##########  serializador que permite registrar los datos de los usuarios ##########
class UserSerializadorPost(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'numero_documento', 'tipo_documento','password', 'fk_rol',]
        
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }

    def update(self, instance ,validated_data):
        instance.username = validated_data.get('username',instance.username)
        instance.email = validated_data.get('email',instance.email)
        instance.first_name = validated_data.get('first_name',instance.first_name)
        instance.last_name = validated_data.get('last_name',instance.last_name)
        instance.tipo_documento = validated_data.get('tipo_documento',instance.tipo_documento)
        # para actualizar un usuario con perfil de tecnico
        instance.empresa = validated_data.get('empresa', instance.empresa)
        instance.especialidad = validated_data.get('especialidad', instance.especialidad)
        instance.fk_rol = validated_data.get('fk_rol', instance.fk_rol)
        password = validated_data.get('password')
        instance.password = validated_data.get('password', instance.password)     

        # encriptar la contraseña 
        if password:
            instance.set_password(instance.password)

        
        instance.save()
        return instance
        
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)            
        # guarda la contraseña encriptada en la base de datos    
        instance.save()          
        # y retornamos la contraseña, para que la view la guarde en la base de datos    
        return instance
    
  
    
############### serializador para el metodo get  ###################
# serializador de roles 
from apps.roles.api.serializador import SerializadorRolUser

class UserSerializadorGet(ModelSerializer):
    fk_rol = SerializadorRolUser()
    class Meta:
        model = User
        fields = ['id', 'username','first_name','last_name','email','numero_documento','tipo_documento','fk_rol','empresa','especialidad' ]
        
        
        
# clase para actualizar los datos del usuario 
class UserUpdateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'numero_documento',
                  'tipo_documento',
                  'password',
                  'fk_rol',
                  'empresa',
                  'especialidad'
                  ]
    
    