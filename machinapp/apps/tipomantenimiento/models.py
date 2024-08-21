from django.db import models


class TipoMantenimiento(models.Model):
    tipoMantenimiento = models.CharField(max_length=200)


    def __str__(self):
        return self.tipoMantenimiento