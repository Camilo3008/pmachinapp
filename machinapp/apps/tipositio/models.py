from django.db import models

# Create your models here.

class Tipo_sitio(models.Model):
    tipo_sitio = models.CharField(max_length=200)
    
    def __str__(self):
        return self.tipo_sitio