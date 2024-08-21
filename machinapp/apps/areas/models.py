from django.db import models

from apps.sedes.models import Sedes

from django.db.models import SET_NULL


class Area(models.Model):
    area = models.CharField(max_length=200)
    fk_sede = models.ForeignKey(Sedes, on_delete=SET_NULL, null=True, blank=True)


    def __str__(self):
        return self.area
