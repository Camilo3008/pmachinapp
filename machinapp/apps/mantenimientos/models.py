from django.db import models

# Create your models here.

from apps.fichas.models import Ficha
from apps.tipomantenimiento.models import TipoMantenimiento


from django.db.models import SET_NULL

class Mantenimiento(models.Model):
   class Estado(models.TextChoices):
      REPARACION = 'reparacion','reparacion'
      FINALIZADO = 'finalizado','finalizado'
      PROXIMO = 'proximo', 'proximo'

   codigo = models.CharField(max_length=100)
   descripcion = models.TextField()
   estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.FINALIZADO)
   fecha_realizacion =  models.DateTimeField(auto_now_add=True)
   fecha_proxima = models.DateField(auto_now=True, null=True, blank=True)

   #### llaves foraneas #######
   fk_ficha = models.ForeignKey(Ficha, on_delete=models.SET_NULL,  null=True, blank=True)
   fk_tipo_mantenimiento = models.ForeignKey(TipoMantenimiento, on_delete=models.SET_NULL,  null=True, blank=True)


   def __str__(self):
      return self.codigo
        