from django.db import models

from apps.tipoequipo.models import TipoEquipo

# aceptar datos nullos en las llaves foraneas
from django.db.models import SET_NULL

# Create your models here.
class Variable(models.Model):
    
    # se forma el enum de tipos de datos de las variables
    class TipoDatos(models.TextChoices):
        NUMBER = 'number', 'number'
        TEXT = 'text', 'text'
        DATE = 'date', 'date'
    
    #se forma el enum para las clases de las variables
    class varClase(models.TextChoices):
        OBLIGATORIA = "obligatorias" , "obligatorias"
        ESPECTECNICAS = "especTecnicas", "especTecnicas"
        SECCION = "seccion", "seccion"
        ESPECIFICA = "especifica", "especifica"


    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200, null = True)
    var_clase = models.CharField(max_length=20, choices=varClase.choices, default=varClase.SECCION)
    var_tipoDato = models.CharField(max_length=20, choices=TipoDatos.choices, default=TipoDatos.TEXT)
    fk_tipo_equipo = models.ForeignKey(TipoEquipo, on_delete=SET_NULL, null=True, blank=True)


    def __str__(self):
        return self.nombre