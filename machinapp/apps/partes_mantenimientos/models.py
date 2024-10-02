from django.db import models
from django.db.models import SET_NULL
from apps.mantenimientos.models import Mantenimiento

class partes_mantenimiento(models.Model):
    par_fk_mantenimientos = models.ForeignKey(Mantenimiento, on_delete = SET_NULL, null=True)
    par_nombre_repuesto = models.CharField(max_length=50)
    par_costos = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.par_nombre_repuesto