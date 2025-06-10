from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import DoctorModel

# Create your models here.
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorModel
        fields = ['id', 'primer_nombre', 'segundo_nombre', 'ap_paterno','ap_materno','edad', 'sexo','rut', 'fono','fk_user','doctor_uuid']