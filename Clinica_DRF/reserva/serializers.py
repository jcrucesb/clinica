from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import ReservaModel

# Create your models here.
class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservaModel
        fields = ['id', 'fecha_reserva', 'especialidad','nombre_doctor', 'tipo_pago', 'reserva_uuid', 'comuna_clinica', 'fk_usuario','direccion_clinica', 'nombre_clinica', 'hora_inicio','hora_termino']