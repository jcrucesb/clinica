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

#
@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_pac_reserva(request, fk_usuario):
    try:
        res_uuid = request.data.get('res_uuid')
        print(res_uuid)
        print(fk_usuario)
        #
        user = CustomersUsers.objects.get(pk=fk_usuario)
        nombre_paciente = user.first_name + ' ' + user.last_name
        #
        datos = []
        # Serializar los datos
        reserva = ReservaModel.objects.filter(reserva_uuid=res_uuid)
        reserva.delete()
        res_pac = ReservaModel.objects.filter(fk_usuario=user.id)
        print(reserva)
        for res in res_pac: 
            #
            datos.append({'id': fk_usuario, 'nombre_paciente': nombre_paciente,'fecha_reserva': res.fecha_reserva, 'especialidad': res.especialidad, 'nombre_doctor': res.nombre_doctor, 'tipo_pago': res.tipo_pago, 'cod_reserva': res.reserva_uuid, 'comuna_clinica': res.comuna_clinica, 'direccion_clinica': res.direccion_clinica, 'nombre_clinica': res.nombre_clinica, 'hora_inicio': res.hora_inicio, 'hora_termino': res.hora_termino})
        return Response({'reserva':datos},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def historial_reserva(request):
    try:
        arr = []
        reserva = ReservaModel.objects.all()
        for res in reserva:
            nombre_usuario = CustomersUsers.objects.get(pk=res.fk_usuario.id)
            nombre_paciente = nombre_usuario.first_name + ' ' + nombre_usuario.last_name
            arr.append({'id_reserva': res.id,'fecha_reserva': res.fecha_reserva, 'especialidad': res.especialidad, 'nombre_doctor': res.nombre_doctor, 'tipo_pago': res.tipo_pago, 'reserva_uuid': res.reserva_uuid, 'comuna_clinica': res.comuna_clinica, 'direccion_clinica': res.direccion_clinica, 'nombre_clinica': res.nombre_clinica, 'hora_inicio':res.hora_inicio, 'hora_termino': res.hora_termino, 'fecha_creacion_reserva': res.fecha_creacion_reserva, 'nombre_paciente': nombre_paciente})
        return Response({'reserva':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_paciente_doctor(request, username):
    try:
        # print(username)
        arr = []
        usuario = CustomersUsers.objects.get(username=username)
        nombre_doc = usuario.first_name + ' ' + usuario.last_name
        reserva = ReservaModel.objects.filter(nombre_doctor=nombre_doc)
        arr = []
        for res in reserva:
            print(res.fecha_reserva)
            print(res.nombre_doctor)
            usuario = CustomersUsers.objects.filter(pk=res.fk_usuario.id)
            for user in usuario:
                nombre_paciente = user.first_name + ' ' + user.last_name
                arr.append({'id_usuario': user.id, 'first_name':user.first_name,'last_name': user.last_name, 'email':user.email, 'edad':user.edad,'sexo':user.sexo, 'rut':user.rut, 'fono':user.fono})
        return Response({'reserva':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)


#
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_paciente_historial_doctor(request, id):
    try:
        print(id)
        arr = []
        usuario = CustomersUsers.objects.get(pk=id)
        #
        reserva = ReservaModel.objects.filter(fk_usuario=usuario.id)
        print(reserva)
        arr = []
        for res in reserva:
            print("Entramos")
            arr.append({'id_reserva': res.id,'especialidad': res.especialidad, 'nombre_doctor':res.nombre_doctor,'nombre_clinica': res.nombre_clinica, 'comuna_clinica':res.comuna_clinica, 'direccion_clinica':res.direccion_clinica,'fecha_reserva': res.fecha_reserva,'hora_inicio':res.hora_inicio, 'hora_termino':res.hora_termino, 'fecha_creacion_reserva':res.fecha_creacion_reserva, 'cod_reserva': res.reserva_uuid,'id_usuario': usuario.id})
        return Response({'reserva':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)
