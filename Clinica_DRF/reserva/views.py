from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import authentication_classes, permission_classes, api_view
from usuarios.models import CustomersUsers
from usuarios.serializers import CustomUserSerializer
from especialidad.models import Especialidad
from especialidad.serializers import EspecialidadSerializers
# Crear un código de Venta.
import uuid
# Importamos el status.
from rest_framework import status
from .models import ReservaModel
from .serializers import ReservaSerializer
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from django.contrib.auth.models import Group



# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_esp_index(request):
    try:
        print("Ingresamos")
        # Obtener el grupo por nombre
        especialidad = Especialidad.objects.all()
        especialidad_Serializers = EspecialidadSerializers(especialidad, many=True)
        print(especialidad_Serializers.data)
        # Obtener todos los usuarios del grupo
        #usuarios = grupo.user_set.all()
        # Serializar los datos
        #serializer = CustomUserSerializer(usuarios, many=True)
        #print(serializer.data)
        return Response({'especialidad':especialidad_Serializers.data},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_doc_index(request, id_especialidad):
    try:
        #print(id_especialidad)
        # Obtener el grupo por nombre
        especialidad = Especialidad.objects.get(pk=id_especialidad)
        #print(especialidad.id)
        # 2. Filtrar usuarios que tienen esta especialidad (usando el nombre correcto de la relación)
        usuarios = CustomersUsers.objects.filter(especialidades=especialidad)
        # 3. Serializar los usuarios
        serializer = CustomUserSerializer(usuarios, many=True)
        arr = []
        for ser in serializer.data:
            nombre_completo = ser["first_name"] + ' ' + ser["last_name"]
            arr.append(nombre_completo)
        return Response({'especialidad':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)