from rest_framework import serializers
from.models import Consulta
class ConsultaSerializers(serializers.ModelSerializer):
    nombre = serializers.CharField(max_length=250)
    ap_paterno = serializers.CharField(max_length=100)
    ap_materno = serializers.CharField(max_length=100)
    email = serializers.CharField(max_length=100)
    consulta = serializers.CharField(max_length=500)
    class Meta:
        model = Consulta
        fields = ['nombre', 'ap_paterno', 'ap_materno', 'email', 'consulta']