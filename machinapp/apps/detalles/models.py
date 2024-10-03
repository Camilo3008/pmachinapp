from django.db import models

# Create your models here.
from apps.fichas.models import Ficha
from apps.variables.models import Variable


class Detalle(models.Model):
    valor = models.CharField(max_length=250)
    fk_variable = models.ForeignKey(Variable, on_delete=models.SET_NULL, null= True, blank=True)
    fk_ficha = models.ForeignKey(Ficha, on_delete=models.SET_NULL, null= True, blank=True)
    
    
    def __str__(self) -> str:
        return self.valor