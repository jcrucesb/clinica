from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class SecretariaModel(models.Model):
    fk_user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    secretaria_uuid = models.CharField(max_length=250, null=True)