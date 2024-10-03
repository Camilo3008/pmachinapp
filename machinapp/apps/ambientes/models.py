from django.db import models
from apps.areas.models import Area
from apps.tipositio.models import Tipo_sitio

from django.db.models import SET_NULL


class Ambientes(models.Model):
    ambientes = models.CharField(max_length=200)
    img = models.ImageField(null=True, blank=True, upload_to='static/img/ambiente/')
    fk_tipo_sitio = models.ForeignKey( Tipo_sitio , on_delete=SET_NULL, null=True, blank=True)
    fk_area = models.ForeignKey( Area , on_delete=SET_NULL, null=True, blank=True)
    registro = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.ambientes