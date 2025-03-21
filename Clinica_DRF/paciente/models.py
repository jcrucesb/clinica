from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class PacienteModel(models.Model):
    fk_user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    paciente_uuid = models.CharField(max_length=250, null=True)