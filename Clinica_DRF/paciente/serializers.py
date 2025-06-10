from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import PacienteModel

# Create your models here.
class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PacienteModel
        fields = ['primer_nombre', 'segundo_nombre', 'edad', 'sexo', 'rut', 'fono','paciente_uuid','fk_user', 'ap_materno','ap_paterno']