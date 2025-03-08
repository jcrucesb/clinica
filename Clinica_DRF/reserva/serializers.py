from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import ReservaModel

# Create your models here.
class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaModel
        fields = ['id', 'fecha_reserva', 'hora_reserva', 'especialidad','nombre_doctor', 'tipo_pago', 'usuario_uuid', 'reserva_uuid']