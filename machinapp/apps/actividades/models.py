from django.db import models

#modelo de matenimientos
from apps.mantenimientos.models import Mantenimiento



class Actividad(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    fecha_realizacion = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=200)
    fk_mantenimiento = models.ForeignKey(Mantenimiento, on_delete=models.SET_NULL,  null=True, blank=True)


    def __str__(self):
        return self.nombre