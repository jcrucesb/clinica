from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomersUsers(AbstractUser):
    password = models.CharField(max_length=255, null=True)
    edad = models.IntegerField(null=True)
    sexo = models.CharField(max_length=1, null=True)
    rut = models.TextField(max_length=250, null=True)
    fono = models.TextField(max_length=250, null=True)
    usuario_uuid = models.CharField(max_length=250, null=True)
    # Relación ManyToMany con tabla intermedia, crea una tabla intermedia.
    # RECUERDA, ENTRE RELACIONES DE MUCHOS A MUCHOS, DRF SE ENCARGA DE CREAR UNA TABLA INTERMEDIA.
    # nO ES NECESARIO CREAR LA TABLA INTERMEDIA.
    especialidades = models.ManyToManyField('especialidad.Especialidad')
