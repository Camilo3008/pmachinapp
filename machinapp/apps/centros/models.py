from django.db import models

# Create your models here.


class Centros(models.Model):
    centro = models.CharField(max_length=200)
    descripcion = models.TextField()
    regional = models.CharField(max_length=200)
    municipio = models.CharField(max_length=200)
    sub_director = models.CharField(max_length=200)


    def __str__(self) -> str:
        return self.centro