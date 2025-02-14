from django.db import models

# Create your models here.
class Consulta(models.Model):
    nombre = models.TextField(max_length=250, null=True)
    ap_paterno = models.TextField(max_length=100, null=True)
    ap_materno = models.TextField(max_length=100, null=True)
    email = models.TextField(max_length=100, null=True)
    consulta = models.TextField(blank=False, null=True)