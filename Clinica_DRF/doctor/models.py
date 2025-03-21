from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

class DoctorModel(models.Model):
    fk_user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    doctor_uuid = models.CharField(max_length=250, null=True)
    # Relación ManyToMany con tabla intermedia, crea una tabla intermedia.
    # RECUERDA, ENTRE RELACIONES DE MUCHOS A MUCHOS, DRF SE ENCARGA DE CREAR UNA TABLA INTERMEDIA.
    # nO ES NECESARIO CREAR LA TABLA INTERMEDIA.
    especialidades = models.ManyToManyField('especialidad.Especialidad')
    doctor_clinica = models.ManyToManyField('comuna_clinica.ComunaClinicaModel')