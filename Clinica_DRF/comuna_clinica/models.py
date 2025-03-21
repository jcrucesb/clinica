from django.db import models

# Create your models here.
class ComunaClinicaModel(models.Model):
    nombre_clinica = models.TextField(max_length=250, blank=True, null=True)
    comuna_clinica = models.TextField(max_length=250, blank=True, null=True)
    direccion_clinica = models.TextField(blank=True, null=True)