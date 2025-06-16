from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from historial_clinico.models import HistorialClinicoModel

# Create your models here.
class HistorialClinicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialClinicoModel
        fields = ['fecha_creacion_historial','fk_paciente', 'diagnostico', 'sintoma', 'observacion', 'reserva_uuid']