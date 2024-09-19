from django.db import models

# Create your models here.
class TipoEquipo(models.Model):

    class tipoFicha(models.TextChoices):
        EQUIPO = "equipo", "equipo"
        AMBIENTE = "ambiente", "ambiente"


    nombre_equipo = models.CharField(max_length=200)
    tipo_ficha = models.CharField(max_length=20, choices= tipoFicha.choices, default = tipoFicha.EQUIPO)


    def __str__(self):
        return self.nombre_equipo