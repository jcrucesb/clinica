from django.shortcuts import render
from comuna_clinica.models import ComunaClinicaModel
# Serializar las clínicas
from comuna_clinica.serializers import ComunaClinicaSerializer
from usuarios.models import CustomersUsers
from especialidad.models import Especialidad
from .models import DoctorModel
from .serializers import DoctorSerializer
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
        # Serializar los usuarios del grupo 'Doctor'
        grupo = Group.objects.get(name='Doctor')
        usuarios = grupo.user_set.all()
        arr = []  # Mover fuera del bucle para acumular todos los registros
        for user in usuarios:
            usuario_doctor = CustomersUsers.objects.filter(username=user).values("id", "username", "email")
            if usuario_doctor.exists():  # Verificar si hay datos antes de acceder
                # Obtener datos
                username = usuario_doctor[0]["username"]
                email = usuario_doctor[0]["email"]
                print(email)
                print("------/--------")
                # Filtrar doctores asociados
                doctor = DoctorModel.objects.filter(fk_user=usuario_doctor[0]["id"])
                for doctores in doctor:
                    arr.append({
                        'id_doctor': doctores.id,
                        'username': username,
                        'email': email,
                        'primer_nombre': doctores.primer_nombre,
                        'segundo_nombre': doctores.segundo_nombre,
                        'ap_paterno': doctores.ap_paterno,
                        'ap_materno': doctores.ap_materno,
                        'edad': doctores.edad,
                        'sexo': doctores.sexo,
                        'rut': doctores.rut,
                        'fono': doctores.fono,
                        'doctor_uuid': doctores.doctor_uuid
                    })
        return Response({'list_doctor': arr}, status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=status.HTTP_400_BAD_REQUEST)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def crear_doctor(request):
    try:
        # Extraer campos del request
        username = request.data["username"]
        password = request.data["password"]
        hashed_password = make_password(password)
        primer_nombre = request.data["primer_nombre"]
        segundo_nombre = request.data["segundo_nombre"]
        ap_paterno = request.data["ap_paterno"]
        ap_materno = request.data["ap_materno"]
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
        # Data User.
        data_user = {
            'username': username,
            'password': password,
            'email': email,
            'usuario_uuid': usuario_uuid,
        }
        # Validar campos obligatorios
        if not all([username, password, primer_nombre, segundo_nombre, ap_paterno, ap_materno,email, edad, rut, fono, sexo, especialidad_ids]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si ya existe un usuario con el mismo RUT
        if DoctorModel.objects.filter(rut=rut).exists():
            return Response({'error': 4}, status=status.HTTP_400_BAD_REQUEST)

        # Crear usuario
        dato_serializado = CustomUserSerializer(data=data_user)
        if dato_serializado.is_valid():
            usuario = dato_serializado.save(password=hashed_password)
            group = Group.objects.get(name='Doctor')
            usuario.groups.add(group)  # Añadir usuario al grupo 'Doctor'
            especialidad = None
            # Asignar las especialidades al doctor usando add()
            for especialidad_id in especialidad_ids:  # Iterar sobre la lista de IDs
                especialidad = Especialidad.objects.get(pk=especialidad_id)
            # Data Doctor.
            data_doctor = {
                'fk_user': usuario.id,
                'primer_nombre': primer_nombre,
                'segundo_nombre': segundo_nombre,
                'edad': edad,
                'sexo': sexo,
                'rut': rut,
                'fono': fono,
                'doctor_uuid': usuario_uuid,
                'ap_materno': ap_materno,
                'ap_paterno': ap_paterno, 
            }
            # Crear instancia de DoctorModel y asignar especialidades
            doctor_serializer  = DoctorSerializer(data=data_doctor)
            if doctor_serializer.is_valid():
                doctor = doctor_serializer.save()
                # Relacionar especialidades al doctor
                doctor.especialidades.add(especialidad)
                # Guardamos los datos en la tabla relacional.
                clinica = ComunaClinicaModel.objects.get(pk=id_clinica)  # Recuperar instancia de ComunaClinicaModel
                doctor.doctor_clinica.add(clinica)
            else:
                print("Errores del serializador:", doctor_serializer.errors)
            # Serializar los usuarios del grupo 'Doctor'
        grupo = Group.objects.get(name='Doctor')
        usuarios = grupo.user_set.all()
        arr = []  # Mover fuera del bucle para acumular todos los registros
        for user in usuarios:
            usuario_doctor = CustomersUsers.objects.filter(username=user).values("id", "username", "email")
            if usuario_doctor.exists():  # Verificar si hay datos antes de acceder
                # Obtener datos
                username = usuario_doctor[0]["username"]
                email = usuario_doctor[0]["email"]
                print(email)
                print("------/--------")
                # Filtrar doctores asociados
                doctor = DoctorModel.objects.filter(fk_user=usuario_doctor[0]["id"])
                for doctores in doctor: 
                    arr.append({
                        'id_doctor': doctores.id,
                        'username': username,
                        'email': email,
                        'primer_nombre': doctores.primer_nombre,
                        'segundo_nombre': doctores.segundo_nombre,
                        'ap_paterno': doctores.ap_paterno,
                        'ap_materno': doctores.ap_materno,
                        'edad': doctores.edad,
                        'sexo': doctores.sexo,
                        'rut': doctores.rut,
                        'fono': doctores.fono,
                        'doctor_uuid': doctores.doctor_uuid
                    })
            return Response({'list_doctor': arr}, status=status.HTTP_200_OK)
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
        #
        dato_user = {}
        dato_doc = {}
        data = request.data.copy()
        # Obtener datos básicos
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")
        #
        if password is not None and password.strip():
            print("Entramos a Pass")
            password_hash = make_password(password)
            dato_user = {
                'username': username,
                'email': email,
                'password': password_hash
            }
        #
        if password is None:
            print("Entramos is None")
            dato_user = {
                'username': username,
                'email': email,
            }
        # Validaciones
        primer_nombre = data.get("primer_nombre")
        segundo_nombre = data.get("segundo_nombre")
        ap_paterno = data.get("ap_paterno")
        ap_materno = data.get("ap_materno")
        edad = data.get("edad")
        rut = data.get("rut")
        fono = data.get("fono")
        sexo = data.get("sexo")
        # Pasamos los datos al array para realizar el UPDATE del doctor.
        dato_doc["primer_nombre"] = primer_nombre
        dato_doc["segundo_nombre"] = segundo_nombre
        dato_doc["ap_paterno"] = ap_paterno
        dato_doc["ap_materno"] = ap_materno
        dato_doc["edad"] = edad
        dato_doc["rut"] = rut
        dato_doc["fono"] = fono
        dato_doc["sexo"] = sexo
        # Validamos que ls datos no se encuentre vacíos.
        if not all([username, primer_nombre, segundo_nombre, email, edad, rut, fono, sexo, ap_paterno, ap_materno]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)

        # Obtener al doctor y su usuario asociado
        user_doctor = DoctorModel.objects.get(pk=id)
        user = CustomersUsers.objects.get(username=user_doctor.fk_user)

        # Validar y actualizar datos del usuario
        serializer = CustomUserSerializer(user, data=dato_user, partial=True)
        if serializer.is_valid():
            serializer.save()
        # Validar y actualizar datos del Doctor.
        serializers_doc = DoctorSerializer(user_doctor, data=dato_doc, partial=True)
        if serializers_doc.is_valid():
            serializers_doc.save()
        # Serializar los usuarios del grupo "Doctor"
        grupo = Group.objects.get(name='Doctor')
        usuarios = grupo.user_set.all()
        arr = []  # Lista acumuladora
        #
        for user in usuarios:
            usuario_doctor = CustomersUsers.objects.filter(username=user).values("id", "username", "email")

            if usuario_doctor.exists():
                username = usuario_doctor[0]["username"]
                email = usuario_doctor[0]["email"]
                #
                doctor = DoctorModel.objects.filter(fk_user=usuario_doctor[0]["id"])
                #
                for doctores in doctor:
                    arr.append({
                        'id_doctor': doctores.id,
                        'username': username,
                        'email': email,
                        'primer_nombre': doctores.primer_nombre,
                        'segundo_nombre': doctores.segundo_nombre,
                        'ap_paterno': doctores.ap_paterno,
                        'ap_materno': doctores.ap_materno,
                        'edad': doctores.edad,
                        'sexo': doctores.sexo,
                        'rut': doctores.rut,
                        'fono': doctores.fono,
                        'doctor_uuid': doctores.doctor_uuid
                    })
        return Response({'list_doctor': arr}, status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=status.HTTP_400_BAD_REQUEST)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def esp_doc_list(request, id):
    try:
        # Obtener el doctor relacionado con el usuario
        doctor = DoctorModel.objects.get(pk=id)  # Obtener el objeto DoctorModel relacionado con el usuario
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
        user = DoctorModel.objects.get(pk=id)
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
        user = DoctorModel.objects.get(pk=id)
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
        user_doc = DoctorModel.objects.get(pk=id)
        usuario = CustomersUsers.objects.get(username=user_doc.fk_user)
        usuario.delete()
        # Serializar los usuarios del grupo 'Doctor'
        grupo = Group.objects.get(name='Doctor')
        usuarios = grupo.user_set.all()
        arr = []  # Mover fuera del bucle para acumular todos los registros
        for user in usuarios:
            usuario_doctor = CustomersUsers.objects.filter(username=user).values("id", "username", "email")
            if usuario_doctor.exists():  # Verificar si hay datos antes de acceder
                # Obtener datos
                username = usuario_doctor[0]["username"]
                email = usuario_doctor[0]["email"]
                print(email)
                print("------/--------")
                # Filtrar doctores asociados
                doctor = DoctorModel.objects.filter(fk_user=usuario_doctor[0]["id"])
                for doctores in doctor:
                    arr.append({
                        'id_doctor': doctores.id,
                        'username': username,
                        'email': email,
                        'primer_nombre': doctores.primer_nombre,
                        'segundo_nombre': doctores.segundo_nombre,
                        'ap_paterno': doctores.ap_paterno,
                        'ap_materno': doctores.ap_materno,
                        'edad': doctores.edad,
                        'sexo': doctores.sexo,
                        'rut': doctores.rut,
                        'fono': doctores.fono,
                        'doctor_uuid': doctores.doctor_uuid
                    })
        return Response({'list_doctor': arr}, status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_clinica_doc(request, id):
    try:
        # Obtener el doctor relacionado con el usuario
        doctor = DoctorModel.objects.get(pk=id)  # Obtener el objeto DoctorModel relacionado con el usuario
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
        doctor = DoctorModel.objects.get(pk=id)
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
        doctor = DoctorModel.objects.get(pk=id)
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

#
@api_view(['GET'])
@permission_classes([AllowAny])
def esp_doc_list_reserva_panel_adm(request):
    try:
        # Obtener los datos enviados como parámetros en la URL
        id_clinica = request.GET.get("id_clinica")  # Accede al ID de la clínica
        print(id_clinica)
        id_especialidad = request.GET.get("id_especialidad")  # Accede al ID de la especialidad
        print(id_especialidad)
        # Validar que los parámetros existen
        if not id_clinica or not id_especialidad:
            return Response({'error': 'Faltan parámetros id_clinica o id_especialidad'}, status=status.HTTP_400_BAD_REQUEST)
        # Filtrar doctores relacionados con la clínica y la especialidad
        doctores = DoctorModel.objects.filter(doctor_clinica__id=id_clinica, especialidades__id=id_especialidad)
        print("----------------")
        print(doctores)
        print("----------------")
        # Crear una lista para almacenar los resultados
        datos = []
        for doctor in doctores:
            print(doctor.doctor_uuid)
            # Obtener información del usuario asociado al doctor (fk_user)
            usuario = CustomersUsers.objects.get(username=doctor.fk_user)
            print(doctor.fk_user)
            datos.append({
                'id_doc_user': doctor.id,
                'primer_nombre': doctor.primer_nombre,
                'segundo_nombre': doctor.segundo_nombre,
                'ap_paterno': doctor.ap_paterno,
                'ap_materno': doctor.ap_materno,
                'especialidad': Especialidad.objects.get(pk=id_especialidad).nombre_especialidad,
                'clinica': ComunaClinicaModel.objects.get(pk=id_clinica).nombre_clinica
            })
            print(datos)
        # Retornar la lista de doctores con su especialidad y clínica
        return Response({'doctores': datos}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_datos_doctor(request, username):
    try:
        print(request.user.id)
        datos = []
        dato_doctor = CustomersUsers.objects.get(pk=request.user.id)
        doctor = DoctorModel.objects.get(fk_user=request.user.id)
        datos.append({
            'id_usuario': request.user.id,
            'username': dato_doctor.username,
            'email': dato_doctor.email,
            'primer_nombre': doctor.primer_nombre,
            'segundo_nombre': doctor.segundo_nombre,
            'ap_paterno': doctor.ap_paterno,
            'ap_materno': doctor.ap_materno,
            'edad': doctor.edad,
            'sexo': doctor.sexo,
            'rut': doctor.rut,
            'fono': doctor.fono,
        })
        #print(dato_doctor_data.data)
        # Retornar la lista de doctores con su especialidad y clínica
        return Response({'dato_doctor': datos}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
#
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_panel_doctor(request, id):
    try:
        print(id)
        dato_user = {}
        dato_doc = {}
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        if password == "0":
            print("Pass 1")
            dato_user = {
                'username': username,
                'email': email,
            }
        if password != "0":
            print("Pass 2")
            dato_user = {
                'username': username,
                'password': make_password(password),
                'email': email,
            }
        # 
        primer_nombre = request.data['primer_nombre']
        segundo_nombre = request.data['segundo_nombre']
        ap_paterno = request.data['ap_paterno']
        ap_materno = request.data['ap_materno']
        edad = request.data['edad']
        sexo = request.data['sexo']
        rut = request.data['rut']
        fono = request.data['contacto']
        usuario_doctor = CustomersUsers.objects.get(pk=id)
        print("Verificar")
        print(dato_user)
        update_user = CustomUserSerializer(usuario_doctor, data=dato_user, partial=True)
        if update_user.is_valid():
            print("Entramos")
            id_update = update_user.save()
            doctor = DoctorModel.objects.get(fk_user=id_update.id)
            # Creamos el array de objeto.
            dato_doc = {
                'primer_nombre': primer_nombre,
                'segundo_nombre': segundo_nombre,
                'edad': edad,
                'sexo': sexo,
                'rut': rut,
                'fono': fono,
                'ap_materno': ap_materno,
                'ap_paterno': ap_paterno,
            }
            dato_doc = DoctorSerializer(doctor, data=dato_doc, partial=True)
            arr = []
            arr.append({
                'id': id_update.id,
                'username': username,
                'email': email,
                'primer_nombre': primer_nombre,
                'segundo_nombre': segundo_nombre,
                'edad': edad,
                'sexo': sexo,
                'rut': rut, 
                'fono': fono,
                'ap_materno': ap_materno,
                'ap_paterno': ap_paterno,
            })
        # Retornar la lista de doctores con su especialidad y clínica
        return Response({'dato_doctor':arr}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_doctor(request):
    try:
       # Serializar los usuarios del grupo 'Doctor'
        grupo = Group.objects.get(name='Doctor')
        usuarios = grupo.user_set.all()
        arr = []  # Mover fuera del bucle para acumular todos los registros
        for user in usuarios:
            usuario_doctor = CustomersUsers.objects.filter(username=user).values("id", "username", "email")
            if usuario_doctor.exists():  # Verificar si hay datos antes de acceder
                # Obtener datos
                username = usuario_doctor[0]["username"]
                email = usuario_doctor[0]["email"]
                # Filtrar doctores asociados
                doctor = DoctorModel.objects.filter(fk_user=usuario_doctor[0]["id"])
                for doctores in doctor:
                    # Obtener las clínicas del doctor
                    clinicas = doctores.doctor_clinica.all().values("id", "nombre_clinica", "comuna_clinica", "direccion_clinica")
                    print(clinicas)
                    # Obtener las especialidades del doctor
                    especialidades = doctores.especialidades.all().values("id", "nombre_especialidad")
                    arr.append({
                        'id_doctor': doctores.id,
                        'username': username,
                        'email': email,
                        'primer_nombre': doctores.primer_nombre,
                        'segundo_nombre': doctores.segundo_nombre,
                        'ap_paterno': doctores.ap_paterno,
                        'ap_materno': doctores.ap_materno,
                        'edad': doctores.edad,
                        'sexo': doctores.sexo,
                        'rut': doctores.rut,
                        'fono': doctores.fono,
                        'doctor_uuid': doctores.doctor_uuid,
                        'clinicas': list(clinicas),
                        'especialidad': list(especialidades)
                    })
        return Response({'list_doctor': arr}, status=status.HTTP_200_OK)
    except DoctorModel.DoesNotExist:
        return Response({'error': 'Doctor no encontrado'}, status=status.HTTP_404_NOT_FOUND)