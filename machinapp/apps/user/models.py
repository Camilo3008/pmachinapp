from django.contrib.auth.models import AbstractUser
from django.db import models
from apps.roles.models import Rol


from django.db.models import SET_NULL

class User(AbstractUser):
    class Tipo_documento (models.TextChoices):
        CEDULA = 'cedula', 'cedula'
        TARJETA_IDENTIDAD = 'tarjeta_identidad', 'tarjeta_identidad'

    numero_documento = models.PositiveBigIntegerField(null=True, blank=True)
    tipo_documento = models.CharField(max_length=20,choices=Tipo_documento.choices, default=Tipo_documento.TARJETA_IDENTIDAD)
    especialidad = models.CharField(max_length=150,null=True ,blank=True)
    empresa = models.CharField(max_length=150, null=True ,blank=True)
    
    email = models.EmailField(unique=True)

    # llave foranea
    fk_rol = models.ForeignKey(Rol, on_delete=SET_NULL, null=True, blank=True)

    #fecha de registro
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
    
    # configaramos para que el usuario inicie sesion con el correo electronico
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['-fecha_registro']

