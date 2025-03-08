from django.db import models
from django.conf import settings

# Create your models here.
class ReservaModel(models.Model):
    fecha_reserva = models.DateField()
    hora_reserva = models.TimeField()
    especialidad = models.CharField(null=True, max_length=200)
    nombre_doctor = models.CharField(null=True, max_length=250)
    tipo_pago = models.CharField(null=True, max_length=250)
    fk_usuaro = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, unique=True)
    usuario_uuid = models.CharField(null=True, max_length=250)
    reserva_uuid = models.CharField(null=True, max_length=250)