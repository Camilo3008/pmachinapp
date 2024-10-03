from django.db import models

from apps.centros.models import Centros

from django.db.models import SET_NULL


# Create your models here.

class Sedes(models.Model):
    sede = models.CharField(max_length=200)
    descripcion = models.TextField()
    direccion = models.CharField(max_length=200)
    fk_centro = models.ForeignKey(Centros, on_delete=SET_NULL, null=True, blank=True)


    def __str__(self):
        return self.sede