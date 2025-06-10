from django.shortcuts import render
from usuarios.models import CustomersUsers
from especialidad.models import Especialidad
from doctor.models import DoctorModel
from direccion.models import DireccionModel
from usuarios.serializers import CustomUserSerializer
from direccion.serializers import DireccionSerializer
from comuna_clinica.models import ComunaClinicaModel
from comuna_clinica.serializers import ComunaClinicaSerializer
from paciente.models import PacienteModel
from paciente.serializers import PacienteSerializer
from reserva.models import ReservaModel
from reserva.serializers import ReservaSerializer
from historial_clinico.models import HistorialClinicoModel
from historial_clinico.serializers import HistorialClinicoSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.core import serializers
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
# Crear un código de Venta.
import uuid
# Objeto tiempo.
from datetime import datetime, timedelta
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
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_paciente(request):
    try:
        # Obtener el grupo por nombre
        grupo = Group.objects.get(name='Paciente')
        #print(grupo)
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        datos = []
        for users in usuarios:
            user_paciente = users.username + ' ' + users.email
            print(user_paciente)
            # Serializar los datos
            paciente = PacienteModel.objects.filter(fk_user=users.id)
            for pac in paciente:
                print("Doctor")
                serializer_dir = DireccionModel.objects.filter(fk_paciente=pac.id)
                for dir in serializer_dir:
                    print(dir.comuna)
                    datos.append({'id_usuario': users.id, 'username':users.username,'email':users.email, 'id_paciente': pac.id, 'primer_nombre': pac.primer_nombre, 'segundo_nombre': pac.segundo_nombre, 'ap_paterno': pac.ap_paterno, 'ap_materno': pac.ap_materno, 'edad': pac.edad, 'sexo': pac.sexo, 'rut': pac.rut, 'fono': pac.fono, 'paciente_uuid':pac.paciente_uuid, 'region': dir.region, 'comuna': dir.comuna, 'vivienda': dir.vivienda, 'num_vivienda': dir.num_vivienda})
        print(datos)
        print("---------------------///****//")
        return Response({'pacientes':datos},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

# Crear Paciente Panel ADMIN
@api_view(['POST'])
@permission_classes([AllowAny])
def crear_paciente(request):
    try:
        #print("Prueba")
        res = []
        #print(request.data)
        # Hacer una copia mutable de request.data
        # Esto se hace para poder agregar mas data al array de objetos.
        data = request.data.copy()
        username = data.get("username")
        password = data.get("password")
        hashed_password = make_password(password)
        primer_nombre = data.get("primer_nombre")
        segundo_nombre = data.get("segundo_nombre")
        ap_paterno = data.get("ap_paterno")
        ap_materno = data.get("ap_materno")
        email = data.get("email")
        edad = data.get("edad")
        rut = data.get("rut")
        print(rut)
        fono = data.get("fono")
        sexo = data.get("sexo")
        vivienda = data.get("vivienda")
        region = data.get("region")
        comuna = data.get("comuna")
        num_vivienda = data.get("num_vivienda")
        #res.append({'fecha_reserva': fecha_reserva, })
        usuario_uuid = str(uuid.uuid4())
        data['usuario_uuid'] = usuario_uuid
        paciente_uuid = str(uuid.uuid4())
        print(data)
        dato_user = {
            'username': username,
            'password': hashed_password,
            'email': email,
            'usuario_uuid': usuario_uuid
        }
        #
        if not all([username, password, primer_nombre, segundo_nombre, ap_paterno, ap_materno, email, edad, rut, fono, sexo, vivienda, region, comuna, num_vivienda]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        if PacienteModel.objects.filter(rut=rut).exists():
            return Response({'error': 4}, status=status.HTTP_400_BAD_REQUEST)
        dato_serializado = CustomUserSerializer(data=dato_user)
        if dato_serializado.is_valid():
            usuario = dato_serializado.save()
            print(usuario.id)
            usuario_id = CustomersUsers.objects.get(pk=usuario.id)
            print("Pasamos - 1")
            # Insertar el Paciente.
            paciente_data = {
                'primer_nombre': primer_nombre,
                'segundo_nombre':segundo_nombre,
                'edad': edad,
                'sexo': sexo,
                'rut': rut,
                'fono': fono,
                'paciente_uuid': paciente_uuid,
                'fk_user': usuario_id.id,
                'ap_materno': ap_materno,
                'ap_paterno': ap_paterno,
            }
            #
            paciente = PacienteSerializer(data=paciente_data)
            if paciente.is_valid():
                paciente_instancia = paciente.save()
                group = Group.objects.get(name='Paciente')
                usuario.groups.add(group)
                paciente_id = PacienteModel.objects.get(pk=paciente_instancia.id)
                print(paciente_id)
                data_direccion = {
                    'vivienda':vivienda,
                    'region':region,
                    'comuna':comuna,
                    'num_vivienda':num_vivienda,
                    'fk_paciente' : paciente_id.id
                }
                direccion_dato_serializado = DireccionSerializer(data=data_direccion)
                #print(direccion_dato_serializado)
                if direccion_dato_serializado.is_valid():
                    direccion_dato_serializado.save()
                    # Obtener el grupo por nombre
                    grupo = Group.objects.get(name='Paciente')
                    #print(grupo)
                    # Obtener todos los usuarios del grupo
                    usuarios = grupo.user_set.all()
                    datos = []
                    for users in usuarios:
                        user_paciente = users.username + ' ' + users.email
                        print(user_paciente)
                        # Serializar los datos
                        paciente = PacienteModel.objects.filter(fk_user=users.id)
                        for pac in paciente:
                            print("Doctor")
                            serializer_dir = DireccionModel.objects.filter(fk_paciente=pac.id)
                            for dir in serializer_dir:
                                print(dir.comuna)
                                datos.append({'id_usuario': users.id, 'username':users.username,'email':users.email, 'id_paciente': pac.id, 'primer_nombre': pac.primer_nombre, 'segundo_nombre': pac.segundo_nombre, 'ap_paterno': pac.ap_paterno, 'ap_materno': pac.ap_materno, 'edad': pac.edad, 'sexo': pac.sexo, 'rut': pac.rut, 'fono': pac.fono, 'paciente_uuid':pac.paciente_uuid, 'region': dir.region, 'comuna': dir.comuna, 'vivienda': dir.vivienda, 'num_vivienda': dir.num_vivienda})
                    print(datos)
                    print("---------------------///****//")
                    return Response({'pacientes':datos},
                                    # Específicamos el status.
                                    status=status.HTTP_200_OK)
                else:
                    print("Errores de validación:", dato_serializado.errors)
                    return Response({'error': 2, 'details': dato_serializado.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=status.HTTP_400_BAD_REQUEST)
#
@api_view(['GET'])
@permission_classes([AllowAny])
def historial_user_paciente(request, id_usuario):
    try:
        print(id_usuario)
        print(id_usuario)
        res = []
        # Obtener la instancia de User.
        fk_user_id = CustomersUsers.objects.get(pk=id_usuario)
        nombre_paciente = fk_user_id.first_name + ' ' + fk_user_id.last_name
        # Obtener Todas las Reservas del Paciente.
        reservas = ReservaModel.objects.filter(fk_usuario=fk_user_id.id)
        # Serializar las reservas.
        reservas_serializadas = ReservaSerializer(reservas, many=True)
        # Modificar los datos directamente a partir de los datos serializados.
        res = [
            {
                'fecha_reserva': reserv['fecha_reserva'],
                'especialidad': reserv['especialidad'],
                'nombre_doctor': reserv['nombre_doctor'],
                'tipo_pago': reserv['tipo_pago'],
                'reserva_uuid': reserv['reserva_uuid'],
                'comuna_clinica': reserv['comuna_clinica'],
                'fk_usuario': reserv['fk_usuario'],
                'direccion_clinica': reserv['direccion_clinica'],
                'nombre_clinica': reserv['nombre_clinica'],
                'hora_inicio': reserv['hora_inicio'],
                'hora_termino': reserv['hora_termino'],
                'nombre_paciente': nombre_paciente
            }
            for reserv in reservas_serializadas.data
        ]
        print(res)
        return Response({'pacientes':res},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['PUT'])
@permission_classes([AllowAny])
def update_paciente(request, id):
    try:
        print(id)
        # Hacer una copia mutable de request.data
        # Esto se hace para poder agregar mas data al array de objetos.
        data = request.data.copy()
        username = data.get("username")
        print(username)
        password = None
        password = data.get("password")
        if password == 0:
            password = None
        if password != 0:
            password = make_password(password)
        hashed_password = make_password(password)
        email = data.get("email")
        primer_nombre = data.get("primer_nombre")
        segundo_nombre = data.get("segundo_nombre")
        ap_paterno = data.get("ap_paterno")
        ap_materno = data.get("ap_materno")
        
        edad = data.get("edad")
        rut = data.get("rut")
        fono = data.get("fono")
        sexo = data.get("sexo")
        vivienda = data.get("vivienda")
        region = data.get("region")
        comuna = data.get("comuna")
        num_vivienda = data.get("num_vivienda")
        # Validaciones.
        if not all([username, password, primer_nombre, segundo_nombre, ap_paterno, ap_materno, email, edad, rut, fono, sexo, vivienda, region, comuna, num_vivienda]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        # Creamos e array de objetos para actualizar el usuario.
        dato_user = {
            'username': username,
            'password': password,
            'email': email
        }
        # 
        user = CustomersUsers.objects.get(pk=id)
        # Validar y actualizar datos
        serializer = CustomUserSerializer(user, data=dato_user, partial=True)
        print("-----------------------------------------------------------------")
        if serializer.is_valid():
            # Actualizar campos adicionales
            serializer.save()
            # Creamos el array de objetos de los deatos a actual del paciente.
            paciente_dato = {
                'primer_nombre':primer_nombre,
                'segundo_nombre':segundo_nombre,
                'edad':edad,
                'rut':rut,
                'fono':fono,
                'sexo':sexo,
                'ap_materno':ap_materno,
                'ap_paterno':ap_paterno,
            }
            paciente = PacienteModel.objects.get(fk_user=user.id)
            update_paciente = PacienteSerializer(paciente, data=paciente_dato, partial=True)
            if update_paciente.is_valid():
                id_pac = update_paciente.save()
                # Buscar la instancia de la dirección existente
                direccion = DireccionModel.objects.filter(fk_paciente=id_pac.id).first()
                # Creamos el array de objeto de DIRECCIÓN.
                direcc_datos = {
                    'vivienda': vivienda,
                    'region': region,
                    'comuna': comuna,
                    'num_vivienda': num_vivienda,
                }
                direccion_serializer = DireccionSerializer(direccion, data=direcc_datos, partial=True)
                if direccion_serializer.is_valid():
                    direccion_serializer.save()
                    print("Pasamos")
                    # Obtener el grupo por nombre
                    grupo = Group.objects.get(name='Paciente')
                    #print(grupo)
                    # Obtener todos los usuarios del grupo
                    usuarios = grupo.user_set.all()
                    datos = []
                    for users in usuarios:
                        user_paciente = users.username + ' ' + users.email
                        print(user_paciente)
                        # Serializar los datos
                        paciente = PacienteModel.objects.filter(fk_user=users.id)
                        for pac in paciente:
                            print("Doctor")
                            serializer_dir = DireccionModel.objects.filter(fk_paciente=pac.id)
                            for dir in serializer_dir:
                                print(dir.comuna)
                                datos.append({'id_usuario': users.id, 'username':users.username,'email':users.email, 'id_paciente': pac.id, 'primer_nombre': pac.primer_nombre, 'segundo_nombre': pac.segundo_nombre, 'ap_paterno': pac.ap_paterno, 'ap_materno': pac.ap_materno, 'edad': pac.edad, 'sexo': pac.sexo, 'rut': pac.rut, 'fono': pac.fono, 'paciente_uuid':pac.paciente_uuid, 'region': dir.region, 'comuna': dir.comuna, 'vivienda': dir.vivienda, 'num_vivienda': dir.num_vivienda})
                    print(datos)
                    print("---------------------///****//")
                    return Response({'pacientes':datos},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
                else:
                    return Response(direccion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_paciente(request, id):
    try:
        user = CustomersUsers.objects.get(pk=id)
        #direccion = CustomersUsers.objects.get(pk=user.id)
        #direccion.delete()
        user.delete()
        # Obtener el grupo por nombre
        grupo = Group.objects.get(name='Paciente')
        #print(grupo)
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        datos = []
        for users in usuarios:
            user_paciente = users.username + ' ' + users.email
            print(user_paciente)
            # Serializar los datos
            paciente = PacienteModel.objects.filter(fk_user=users.id)
            for pac in paciente:
                print("Doctor")
                serializer_dir = DireccionModel.objects.filter(fk_paciente=pac.id)
                for dir in serializer_dir:
                    print(dir.comuna)
                    datos.append({'id_usuario': users.id, 'username':users.username,'email':users.email, 'id_paciente': pac.id, 'primer_nombre': pac.primer_nombre, 'segundo_nombre': pac.segundo_nombre, 'ap_paterno': pac.ap_paterno, 'ap_materno': pac.ap_materno, 'edad': pac.edad, 'sexo': pac.sexo, 'rut': pac.rut, 'fono': pac.fono, 'paciente_uuid':pac.paciente_uuid, 'region': dir.region, 'comuna': dir.comuna, 'vivienda': dir.vivienda, 'num_vivienda': dir.num_vivienda})
        print(datos)
        print("---------------------///****//")
        return Response({'pacientes':datos},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def reserva_paciente(request):
    try:
        #
        arr = []
        id_clinica = request.data["id_clinica"]
        id_especialidad = request.data["id_especialidad"]
        id_usuario = request.data["id_usuario"]
        
        #
        nombre_clinica = ComunaClinicaModel.objects.get(pk=id_clinica)
        print(nombre_clinica.nombre_clinica)
        #
        especialidad = Especialidad.objects.get(pk=id_especialidad)
        print(especialidad.nombre_especialidad)
        arr.append({'especialidad': especialidad.nombre_especialidad})
        # 
        usuario = CustomersUsers.objects.get(pk=id_usuario)
        print(usuario.first_name)
        #
        print(arr)
        doctor = DoctorModel.objects.get(fk_user=usuario.id)
        #
        datos_reserva = ReservaModel.objects.filter(especialidad= especialidad.id, fk_usuario__id=usuario.id, nombre_clinica=nombre_clinica.nombre_clinica)
        print(datos_reserva)
        for reser in datos_reserva:
            print(reser.reserva_uuid)
            print("Prueba")
            print("-------------------------------")
        return Response({'pacientes':1},
                    # Específicamos el status.
                    status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def reserva_paciente_registrado(request):
    try:
        #
        print("***********************")
        print(request.data)
        print("***********************")
        arr = []
        id_clinica = request.data["id_clinica"]
        print(id_clinica)
        id_especialidad = request.data["id_especialidad"]
        print(id_especialidad)
        id_usuario_doctor = request.data["id_usuario_doctor"]
        print(id_usuario_doctor)
        id_usuario = request.data["id_usuario"]
        print(id_usuario)
        #
        if id_clinica == None or id_clinica == '0' or id_especialidad == None or id_especialidad == '0' or id_usuario_doctor == None or id_usuario_doctor == '0' or id_usuario_doctor == None or id_usuario_doctor == '0' or id_usuario == None or id_usuario == '0':
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        nombre_clinica = ComunaClinicaModel.objects.get(pk=id_clinica)
        print(nombre_clinica)
        #
        especialidad = Especialidad.objects.get(pk=id_especialidad)
        print(especialidad.nombre_especialidad)
        #arr.append({'especialidad': especialidad.nombre_especialidad})
        # 
        usuario = DoctorModel.objects.get(pk=id_usuario_doctor)
        nombre_completo_doctor = usuario.primer_nombre + ' ' + usuario.segundo_nombre + ' ' + usuario.ap_paterno + ' ' + usuario.ap_materno
        #arr.append({'nombre_doctor': nombre_doctor})
        print("Estamos Acá")
        datos_reserva = ReservaModel.objects.filter(especialidad= especialidad.nombre_especialidad, nombre_clinica=nombre_clinica.nombre_clinica, nombre_doctor=nombre_completo_doctor)
        print(datos_reserva)
        res = []
        id = '';
        for datos in datos_reserva:
            print("Entramos")
            id = datos.fk_usuario.id  # Obtenemos directamente el ID del usuario
            print(id)
            res.append({
                'especialidad': especialidad.nombre_especialidad,
                'nombre_doctor': nombre_completo_doctor,
                'fecha_reserva': datos.fecha_reserva,
                'especialidad': datos.especialidad,
                'hora_inicio': datos.hora_inicio,
                'hora_termino': datos.hora_termino,
                'reserva_uuid': datos.reserva_uuid,
            })
            print("Ojo----")
            print(res)
        # Serializar la lista res
        reserva_data = ReservaSerializer(res, many=True)
        print("Contenido de reserva_data:", reserva_data.data)
        # Iterar sobre los datos serializados correctamente
        nueva_data = []
        for reserv in reserva_data.data:
            # Aquí accedemos a .data
            paciente = PacienteModel.objects.get(fk_user=id)  # Si necesitas más datos del usuario
            nombre_paciente = paciente.primer_nombre + " " + paciente.segundo_nombre + " " + paciente.ap_paterno + " " + paciente.ap_materno
            nueva_data.append({
                'title': reserv['especialidad'],  # Usamos 'especialidad' como título del evento
                'start': f"{reserv['fecha_reserva']}T{reserv['hora_inicio']}",  # Fecha y hora de inicio
                'end': f"{reserv['fecha_reserva']}T{reserv['hora_termino']}",  # Fecha y hora de fin
                'reserva_uuid': f"{reserv['reserva_uuid']}",
                'nombre_paciente': nombre_paciente,
            })
        return Response({'pacientes':nueva_data},
                    # Específicamos el status.
                    status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)
#
@api_view(['POST'])
@permission_classes([AllowAny])
def crear_reserva_pac_registrado(request):
    try:
        #print(request.data)
        # Esto se hace para poder agregar mas data al array de objetos.
        data = request.data.copy()
        print("####-----------####")
        print(data)
        print("####-----------####")
        fecha = data.get("fecha_reserva")
        fecha_formateada = fecha.split("T")[0]  # Esto nos dará "2025-04-10"
        data['fecha_reserva'] = fecha_formateada
        id_user_pac = CustomersUsers.objects.get(pk=data.get("fk_usuario"))
        #data.update({'fk_usuario_id': id_user_pac.id})
        list_pac = []
        reserva = str(uuid.uuid4())
        reserva_uuid = reserva
        data['reserva_uuid'] = reserva_uuid
        print(data)
        id_usuario_existe = data['fk_usuario']
        especialidad_existe = data['especialidad']
        fecha_reserva = data['fecha_reserva']
        fecha_reserva = date.fromisoformat(fecha_reserva)
        hoy = date.today()
        verificar = ReservaModel.objects.filter(especialidad=especialidad_existe, fecha_reserva=fecha_reserva,fk_usuario=id_usuario_existe)
        print(verificar.count())
        if verificar.count() > 0:
            return Response({'error':0},
                    # Específicamos el status.
                    status=status.HTTP_400_BAD_REQUEST)
        #
        res = ReservaSerializer(data=data)
        print("Pasamos")
        if res.is_valid():
            res.save()
            id_reserva_insertada = res.instance.id
            print(id_reserva_insertada)
            reserva_user = ReservaModel.objects.filter(fk_usuario=request.data["fk_usuario"])
            print(reserva_user)
            # Obtenemos los datos del paciente.
            pac = PacienteModel.objects.get(fk_user=request.data["fk_usuario"])
            #reserva_user_paciente = ReservaSerializer(reserva_user, many=True)
            # Obtener los datos para el correo.
            reserva_nueva = ReservaModel.objects.get(pk=id_reserva_insertada)
            # Creación del correo.
            subject = "Correo de Verificación de Compras"
            # Crearemos el envío de correos.
            template = render_to_string("pacientes\correo_reserva.html",{
                'nombre_paciente': pac.primer_nombre + ' ' + pac.segundo_nombre,
                'rut_paciente': pac.rut,
                'email_paciente': id_user_pac.email,
                'fono_paciente': pac.fono,
                'fecha_reserva': reserva_nueva.fecha_reserva,
                'especialidad': reserva_nueva.especialidad,
                'nombre_doctor': reserva_nueva.nombre_doctor,
                'reserva_uuid': reserva_nueva.reserva_uuid,
                'comuna_clinica': reserva_nueva.comuna_clinica,
                'direccion_clinica': reserva_nueva.direccion_clinica,
                'nombre_clinica': reserva_nueva.nombre_clinica,
                'hora_inicio': reserva_nueva.hora_inicio,
                'hora_termino': reserva_nueva.hora_termino,
                'fecha_creacion_reserva': reserva_nueva.fecha_creacion_reserva,
            })
            # Generación del nombre de archivo único
            #now = datetime.now()
            #filename = f"Boleta_Compra_{nombre_panel_cliente}_{ap_paterno_panel_cliente}_{ap_materno_panel_cliente}_{now.strftime('%Y-%m-%d_%H-%M-%S')}.pdf"
            # Creación del PDF.
            # Configuración de pdfkit
            #config = pdfkit.configuration(wkhtmltopdf='C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe')
            #options = {'enable-local-file-access': None}
            # Generar el PDF
            # template; Pertenece 
            #pdf = pdfkit.from_string(template, f"C:\\Users\\Plask91\\Documents\\PasteleriaDjango\\Boleta_PDF_CLIENTES\\{filename}", configuration=config, options=options)
            # Envío del mensaje. Debemos pasar el template.
            emailSender = EmailMessage(
                subject, 
                template,
                settings.EMAIL_HOST_USER,
                ["matiasfamilycrew@gmail.com"],
            )
            # print("Creacion del correo ")
            # Formato del mensaje en HTML.
            emailSender.content_subtype = "html"
            emailSender.fail_silently = False
            # # Agregamos el PDF que hemos creado como adjunto al correo.
            #emailSender.attach_file(f"C:\\Users\\Plask91\\Documents\\PasteleriaDjango\\Boleta_PDF_CLIENTES\\{filename}")
            # Enviamos el correo.
            emailSender.send()
        todas_reservas = ReservaModel.objects.all()
        todas_reservas_data = ReservaSerializer(todas_reservas, many=True)
        #
        return Response({'pacientes':todas_reservas_data.data},
                # Específicamos el status.
                status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['POST'])
# Para utilizar; IsAuthenticated
# No olvidar, asi debe venir la peticiondel Front-End; fetch(request_calendar,'Authorization': `Token ${token}`
@permission_classes([IsAuthenticated])
def historial_clinico(request):
    try:
        print(request.data)
        print(request.user.id)
        nombre_paciente = request.data["nombre_paciente"]
        especialidad = request.data["especialidad"]
        cod_reserva = request.data["cod_reserva"]
        sintoma = request.data["sintoma"]
        diagnostico = request.data["diagnostico"]
        observacion = request.data["observacion"]
        #
        fk_usuario = ReservaModel.objects.get(reserva_uuid=cod_reserva)
        print("/*/*/****/**/**/*")
        print(fk_usuario.fk_usuario.id)
        pac = PacienteModel.objects.get(fk_user=fk_usuario.fk_usuario.id)
        #
        dato_historial_pac = {
            'diagnostico': diagnostico,
            'sintoma': sintoma,
            'observacion': observacion,
            'fk_paciente': pac.id,
            'reserva_uuid': cod_reserva,
        }
        #
        historial_clinico = HistorialClinicoSerializer(data=dato_historial_pac)
        if historial_clinico.is_valid():
            historial_cod_reserva = historial_clinico.save()
            cerrar_reserva = ReservaModel.objects.get(reserva_uuid=historial_cod_reserva.reserva_uuid)
            cerrar_reserva.reserva_cerrada = 1  # Modificas el atributo directamente
            cerrar_reserva.save()  # Guardas los cambios en la base de datos
            usuario = CustomersUsers.objects.get(pk=request.user.id)
            #
            doctor = DoctorModel.objects.filter(fk_user=usuario.id)
            for doc in doctor:
                nombre_completo = doc.primer_nombre + ' ' + doc.segundo_nombre + ' ' + doc.ap_paterno + ' ' + doc.ap_materno
                reserva = ReservaModel.objects.filter(nombre_doctor=nombre_completo)
                arr = []
                for res in reserva:
                    arr.append({'id_reserva': res.id,'title': res.especialidad, 'nombre_doctor':res.nombre_doctor,'nombre_clinica': res.nombre_clinica, 'comuna_clinica':res.comuna_clinica, 'direccion_clinica':res.direccion_clinica,'fecha_reserva': res.fecha_reserva,'hora_inicio':res.hora_inicio, 'hora_termino':res.hora_termino, 'fecha_creacion_reserva':res.fecha_creacion_reserva, 'cod_reserva': res.reserva_uuid,'id_usuario': usuario.id, 'nombre_paciente': nombre_paciente})
                return Response({'paciente':arr},
                                # Específicamos el status.
                                status=status.HTTP_200_OK)
        else:
            print("Errores de validación:", historial_clinico.errors)  # Imprime los errores en la consola
            return Response({"error": historial_clinico.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)