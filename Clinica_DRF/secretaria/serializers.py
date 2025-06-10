from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import SecretariaModel

# Create your models here.
class SecretariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecretariaModel
        fields = ['id', 'primer_nombre', 'segundo_nombre', 'ap_paterno', 'ap_materno', 'edad', 'sexo', 'rut', 'fono','secretaria_uuid','fk_user']