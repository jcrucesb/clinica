from rest_framework import serializers
# Hacemos el llamado a la clase donde agregamos mas cmpos a la tabla User.
from .models import DoctorModel

# Create your models here.
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorModel
        fields = ['id', 'fk_user','doctor_uuid']