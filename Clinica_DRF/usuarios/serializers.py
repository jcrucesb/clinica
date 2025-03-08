from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import CustomersUsers

# Create your models here.
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomersUsers
        fields = ['id', 'username','first_name', 'last_name','email', 'password', 'edad', 'sexo', 'rut', 'fono', 'usuario_uuid', 'password']