from django.db import models


# Create your models here.
class Variable(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200)


    def __str__(self):
        return self.nombre