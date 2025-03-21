from django.shortcuts import render
from comuna_clinica.models import ComunaClinicaModel
from usuarios.models import CustomersUsers
from especialidad.models import Especialidad
from .models import DoctorModel
from direccion.models import DireccionModel
from usuarios.serializers import CustomUserSerializer
from direccion.serializers import DireccionSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.core import serializers
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
# Crear un código de Venta.
import uuid
#
from django.contrib.auth.hashers import make_password  # ¡Añade esta importación!
# El token de DRF.
from rest_framework.authtoken.models import Token
# Cerrar la session del usuario actual.
from django.contrib.auth import logout
# Importamos el status.
from rest_framework import status
#
from django.contrib.auth.models import Group
#
import os
# Verificar si el usuario existe con este import, en caso de no, envía ERROR.
from django.shortcuts import get_object_or_404 
# En Django REST Framework (DRF), los decoradores authentication_classes y 
# permission_classes se utilizan para configurar y aplicar las políticas de autenticación y 
# permisos a las vistas de la API.
# permission_classes; Este decorador se utiliza para especificar las clases de permisos que se 
# deben usar para una vista específica. Los permisos determinan si un usuario tiene el derecho 
# de realizar una acción específica en la API. Algunas de las clases de permisos comunes en DRF incluyen:
# AllowAny: Permite acceso sin restricciones, tanto a usuarios autenticados como no autenticados.
# IsAuthenticated: Permite acceso solo a usuarios autenticados.
# IsAdminUser: Permite acceso solo a usuarios administradores (donde user.is_staff es True).
# IsAuthenticatedOrReadOnly: Permite a los usuarios autenticados realizar cualquier solicitud, 
# y a los usuarios no autenticados solo realizar solicitudes de lectura (GET, HEAD, OPTIONS)
from rest_framework.decorators import authentication_classes, permission_classes, api_view
# La clase IsAuthenticated es un permiso en DRF que verifica si el usuario que realiza la solicitud está autenticado.
# Cuando se establece IsAuthenticated como permiso para una vista, solo los usuarios autenticados podrán acceder a esa vista. Los usuarios no autenticados no tendrán permiso para realizar la solicitud
from rest_framework.permissions import IsAuthenticated, AllowAny
# Proceso de Autenticación
# Obtención del Token: Cuando un usuario se autentica, intercambia su nombre de usuario y 
# contraseña por un token único. Este token se genera y almacena en la base de datos asociado al usuario.
# Uso del Token: En solicitudes subsiguientes, el cliente debe incluir este token en el encabezado 
# Authorization de la solicitud HTTP. El formato típico es Authorization: Token <token_value>
from rest_framework.authentication import TokenAuthentication
#from rest_framework.decorators import 
from datetime import datetime, date
# render_to_string; Sirve para enviar el HTML del correo.-------------------
from django.template.loader import render_to_string 
# Mensaje del E-mail.
from django.core.mail import EmailMessage
#
from django.conf import settings
#----- Librería para crear PDF -------------------------------------------------
import pdfkit 
#----- Fin Librería para crear PDF ---------------------------------------------

# Create your views here.
#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_doctor_admin(request):
    try:
        # Obtener el grupo por nombre
        grupo = Group.objects.get(name='Doctor')
        print(grupo)
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        # Serializar los datos
        serializer = CustomUserSerializer(usuarios, many=True)
        print(serializer.data)
        return Response({'list_doctor':serializer.data},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def crear_doctor(request):
    try:
        # Extraer campos del request
        username = request.data["username"]
        password = request.data["password"]
        hashed_password = make_password(password)
        first_name = request.data["first_name"]
        last_name = request.data["last_name"]
        email = request.data["email"]
        edad = request.data["edad"]
        rut = request.data["rut"]
        fono = request.data["fono"]
        sexo = request.data["sexo"]
        especialidad_ids = request.data["especialidad"]  # Debería ser una lista de IDs
        id_clinica = request.data["comunaclinicamodelid"]
        # Generar UUID para el doctor
        usuario_uuid = str(uuid.uuid4())
        request.data.update({'doctor_uuid': usuario_uuid})
        request.data.pop("especialidad", None)  # Remover 'especialidad' del diccionario
        request.data.pop("comunaclinicamodelid", None)
        print(request.data)
        # Validar campos obligatorios
        if not all([username, password, first_name, last_name, email, edad, rut, fono, sexo, especialidad_ids]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si ya existe un usuario con el mismo RUT
        if CustomersUsers.objects.filter(rut=rut).exists():
            return Response({'error': 4}, status=status.HTTP_400_BAD_REQUEST)

        # Crear usuario
        dato_serializado = CustomUserSerializer(data=request.data)
        if dato_serializado.is_valid():
            usuario = dato_serializado.save(password=hashed_password)
            group = Group.objects.get(name='Doctor')
            usuario.groups.add(group)  # Añadir usuario al grupo 'Doctor'

            # Crear instancia de DoctorModel y asignar especialidades
            doctor = DoctorModel.objects.create(fk_user=usuario, doctor_uuid=usuario_uuid)

            # Asignar las especialidades al doctor usando add()
            for especialidad_id in especialidad_ids:  # Iterar sobre la lista de IDs
                especialidad = Especialidad.objects.get(pk=especialidad_id)
                # Relacionar especialidades al doctor
                doctor.especialidades.add(especialidad)
                # Guardamos los datos en la tabla relacional.
                clinica = ComunaClinicaModel.objects.get(pk=id_clinica)  # Recuperar instancia de ComunaClinicaModel
                doctor.doctor_clinica.add(clinica) 
            # Serializar los usuarios del grupo 'Doctor'
            grupo = Group.objects.get(name='Doctor')
            usuarios = grupo.user_set.all()
            serializer = CustomUserSerializer(usuarios, many=True)

            return Response({'list_doctor': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 2, 'details': dato_serializado.errors}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3, 'details': str(err)}, status=status.HTTP_400_BAD_REQUEST)

#
@api_view(['PUT'])
@permission_classes([AllowAny])
def update_doctor(request, id):
    try:
        # Hacer una copia mutable de request.data
        # Esto se hace para poder agregar mas data al array de objetos.
        data = request.data.copy()
        username = data.get("username")
        print(username)
        password = data.get("password")
        print(password)
        hashed_password = make_password(password)
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        edad = data.get("edad")
        rut = data.get("rut")
        fono = data.get("fono")
        sexo = data.get("sexo")
        # Validaciones.
        if not all([username, password, first_name, last_name, email, edad, rut, fono, sexo]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        user = CustomersUsers.objects.get(pk=id)
        # Validar y actualizar datos
        serializer = CustomUserSerializer(user, data=request.data, partial=True)
        #
        if serializer.is_valid():
            # Hashear contraseña si se proporciona
            if 'password' in request.data:
                password = request.data['password']
                serializer.validated_data['password'] = make_password(password)
                # Actualizar campos adicionales
                serializer.save()
                # Obtener el grupo por nombre
                grupo = Group.objects.get(name='Doctor')
                # Obtener todos los usuarios del grupo
                usuarios = grupo.user_set.all()
                # Serializar los usuarios del grupo "Doctor"
                usuarios_serializer = CustomUserSerializer(usuarios, many=True)  # Serializamos múltiples usuarios
                print(usuarios)
                return Response({'list_doctor': usuarios_serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def esp_doc_list(request, id):
    try:
        # Obtener el doctor relacionado con el usuario
        doctor = DoctorModel.objects.get(fk_user=id)  # Obtener el objeto DoctorModel relacionado con el usuario
        print("Doctor:", doctor)

        # Obtener todas las especialidades asociadas al doctor
        especialidades = doctor.especialidades.all()  # Obtener las especialidades relacionadas
        print("Especialidades:", especialidades)

        # Preparar los datos para la respuesta
        especialidades_list = [
            {
                'id': especialidad.id,
                'nombre_especialidad': especialidad.nombre_especialidad
            }
            for especialidad in especialidades
        ]

        # Devolver la respuesta con las especialidades
        return Response({'especialidades': especialidades_list}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 'Error interno del servidor'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def nueva_esp_doctor_admin(request, id):
    try:
        print(id)
        user = DoctorModel.objects.get(fk_user=id)
        print(user)
        print("-------- 1")
        especialidad_id = request.data["especialidad_id"]
        print(especialidad_id)
        #
        especialidad = Especialidad.objects.get(pk=especialidad_id)
        user.especialidades.add(especialidad)
        # Obtener todas las especialidades del usuario
        especialidades_doc = user.especialidades.all()
        arr = {}
        especialidades = []
        # especialidades_list = [esp for esp in especialidades_doc]
        for esp in especialidades_doc:
            print(esp.id)
            print(esp.nombre_especialidad)
            arr = {
                'id': esp.id,
                'especialidad': esp.nombre_especialidad,
            }
            especialidades.append(arr)
        #print(especialidades)
        return Response({'especialidades': especialidades}, status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)

#
@api_view(['DELETE'])
@permission_classes([AllowAny])
def borrar_esp_doctor(request, id):
    try:
        #print(id)
        id_especialidad = request.query_params.get('id_especialidad')
        #print(id_especialidad)
        user = DoctorModel.objects.get(fk_user=id)
        especialidad = Especialidad.objects.get(pk=id_especialidad)
        #print("Pasamos")
        user.especialidades.remove(especialidad)
        # Obtener todas las especialidades del usuario
        especialidades_doc = user.especialidades.all()
        especialidades = []
        for esp in especialidades_doc:
            #print(esp.id)
            #print(esp.nombre_especialidad)
            arr = {
                'id': esp.id,
                'especialidad': esp.nombre_especialidad,
            }
            especialidades.append(arr)
        #print(especialidades)
        return Response({'especialidades': especialidades}, status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)

#
@api_view(['DELETE'])
@permission_classes([AllowAny])
def borrar_doctor(request, id):
    try:
        print(id)
        usuario = CustomersUsers.objects.get(pk=id)
        usuario.delete()
        # Obtener el grupo por nombre
        grupo = Group.objects.get(name='Doctor')
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        # Serializar los datos
        serializer = CustomUserSerializer(usuarios, many=True)
        return Response({'list_doctor':serializer.data},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_clinica_doc(request, id):
    try:
        # Obtener el doctor relacionado con el usuario
        doctor = DoctorModel.objects.get(fk_user=id)  # Obtener el objeto DoctorModel relacionado con el usuario
        print(doctor.doctor_uuid)
        # Obtener las clínicas relacionadas al doctor (a través de la relación ManyToMany)
        clinicas = doctor.doctor_clinica.filter(doctormodel=doctor.id)  # Acceder al campo ManyToMany 'doctor_clinica'
        #
        clinicas_list = [
            {
                'id': clinica.id,
                'nombre_clinica': clinica.nombre_clinica,
                'comuna_clinica': clinica.comuna_clinica,
                'direccion_clinica': clinica.direccion_clinica,
            }
            for clinica in clinicas
        ]
        print(clinicas_list)
        print("------------------------------------------------------------")
        # Devolver la respuesta con las clínicas relacionadas
        return Response({'clinicas': clinicas_list}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 'Error interno del servidor'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def doctor_nueva_clinica(request, id):
    try:
        # Obtener el doctor relacionado con el usuario
        print(request.data["id_clinica"])
        print(id)
        print("------------------------------")
        #
        doctor = DoctorModel.objects.get(fk_user=id)
        print("------------------------------")
        print(doctor)
        #
        id_clinica = request.data["id_clinica"]
        # Validar si ya existe la asociación entre el doctor y la clínica
        if doctor.doctor_clinica.filter(pk=id_clinica).exists():
            return Response({'error': 2}, status=status.HTTP_400_BAD_REQUEST)
        # Guardamos los datos en la tabla relacional.
        clinica = ComunaClinicaModel.objects.get(pk=id_clinica)  # Recuperar instancia de ComunaClinicaModel
        doctor.doctor_clinica.add(clinica)
        clinicas = doctor.doctor_clinica.filter(doctormodel=doctor.id)  # Acceder al campo ManyToMany 'doctor_clinica'
        #
        clinicas_list = [
            {
                'id': clinica.id,
                'nombre_clinica': clinica.nombre_clinica,
                'comuna_clinica': clinica.comuna_clinica,
                'direccion_clinica': clinica.direccion_clinica,
            }
            for clinica in clinicas
        ]
        print(clinicas_list)
        # Devolver la respuesta con las clínicas relacionadas
        return Response({'list_clinica': clinicas_list}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 0}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 'Error interno del servidor'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#
@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_clinica_doctor(request, id):
    try:
        print(id)
        print(request.data)
        doctor = DoctorModel.objects.get(fk_user=id)
        id_clinica = request.query_params.get("comunaclinicamodel_id")  # Obtener el parámetro de consulta
        if not id_clinica:
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        print(id_clinica)
        # Removimos al doctor donde se encuentra el id de la clínica.
        doctor.doctor_clinica.remove(id_clinica)
        # Obtener las clínicas relacionadas al doctor (a través de la relación ManyToMany)
        clinicas = doctor.doctor_clinica.filter(doctormodel=doctor.id)  # Acceder al campo ManyToMany 'doctor_clinica'
        #
        clinicas_list = [
            {
                'id': clinica.id,
                'nombre_clinica': clinica.nombre_clinica,
                'comuna_clinica': clinica.comuna_clinica,
                'direccion_clinica': clinica.direccion_clinica,
            }
            for clinica in clinicas
        ]
        print(clinicas_list)
        return Response({'clinicas_list':clinicas_list},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 2}, status=400)