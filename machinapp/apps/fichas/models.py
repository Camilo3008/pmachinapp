from django.db import models

from apps.ambientes.models import Ambientes
from apps.tipoequipo.models import TipoEquipo

# aceptar datos nullos en las llaves foraneas
from django.db.models import SET_NULL


class Ficha(models.Model):

    class Estado(models.TextChoices):
        OPERACION = 'operacion','operacion'
        FUERA_SERVICIO = 'fuera_servicio','fuera_servicio'
        REPARACION = 'reparacion','reparacion'


    placa_sena = models.CharField(max_length=255, unique=True)
    estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.OPERACION)
    
    #documentos
    imagen = models.ImageField(null=True, blank=True, upload_to='fichas/imagenEquipo/')
    fichaRespaldo = models.FileField(null=True, blank=True, upload_to='fichas/fichaRespaldo')
    codigoQR = models.ImageField(null=True, blank=True, upload_to='fichas/imagenQR/')

    # llaves foraneas
    fk_ambiente = models.ForeignKey(Ambientes, on_delete=SET_NULL, null=True, blank=True)
    fk_tipo_equipo = models.ForeignKey(TipoEquipo, on_delete=SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.placa_sena







""" from django.db import models

from apps.ambientes.models import Ambientes
from apps.tipoequipo.models import TipoEquipo

# aceptar datos nullos en las llaves foraneas
from django.db.models import SET_NULL


class Ficha(models.Model):

    class Estado(models.TextChoices):
        OPERACION = 'operacion','operacion'
        FUERA_SERVICIO = 'fuera_servicio','fuera_servicio'
        REPARACION = 'reparacion','reparacion'


    placa_sena = models.CharField(max_length=255, unique=True)
    serial =  models.CharField(max_length=255, unique=True)
    fecha_adquisicion = models.DateField(auto_now=False, null=True, blank=True)
    fecha_inicio_garantia = models.DateField(auto_now=False, null=True, blank=True)
    fecha_fin_garantia = models.DateField(auto_now=False, null=True, blank=True)
    descripcion = models.TextField()
    estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.OPERACION)
    imagen = models.ImageField(null=True, blank=True, upload_to='fichas/imagen/')
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
    # llaves foraneas
    fk_ambiente = models.ForeignKey(Ambientes, on_delete=SET_NULL, null=True, blank=True)
    fk_tipo_equipo = models.ForeignKey(TipoEquipo, on_delete=SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.placa_sena
 """