from django.db import models
from django.core.exceptions import ValidationError
from apps.fichas.models import Ficha
from apps.tipomantenimiento.models import TipoMantenimiento
from django.db.models import SET_NULL

def validate_pdf(value):
   import os
   ext = os.path.splitext(value.name)[1] 
   if not ext.lower() == '.pdf':
      raise ValidationError('Solo se permiten archivos PDF.')

class Mantenimiento(models.Model):
   class Estado(models.TextChoices):
      REPARACION = 'reparacion', 'reparacion'
      FINALIZADO = 'finalizado', 'finalizado'
      PROXIMO = 'proximo', 'proximo'

   codigo = models.CharField(max_length=100)
   estado = models.CharField(max_length=20, choices=Estado.choices, default=Estado.FINALIZADO)
   fecha_proxima = models.DateField(auto_now=True, null=True, blank=True)
   descripcion = models.TextField()
   ficha_soporte = models.FileField(upload_to='mantenimiento/Pdfs/', null=True, blank=True,validators=[validate_pdf]
   )
   costo_final = models.CharField(max_length=45)
   
   # llaves foraneas
   fk_ficha = models.ForeignKey(Ficha, on_delete=models.SET_NULL, null=True, blank=True)
   fk_tipo_mantenimiento = models.ForeignKey(TipoMantenimiento, on_delete=models.SET_NULL, null=True, blank=True)

   def __str__(self):
      return self.codigo