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
        grupo = Group.objects.get(name='Pacientes')
        #print(grupo)
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        datos = []
        for users in usuarios:
            nombre_paciente = users.first_name + ' ' + users.last_name
            # Serializar los datos
            serializer_dir = DireccionModel.objects.filter(usuario_id=users.id)
            for ser in serializer_dir:
                print(ser.vivienda)
                datos.append({'id': users.id, 'nombre_paciente': nombre_paciente,'username': users.username, 'first_name': users.first_name, 'last_name': users.last_name, 'email': users.email, 'edad': users.edad, 'sexo': users.sexo, 'rut': users.rut, 'fono': users.fono, 'usuario_uuid':users.usuario_uuid, 'password':users.password,'region': ser.region, 'comuna': ser.comuna, 'vivienda': ser.vivienda, 'num_vivienda': ser.num_vivienda, 'usuario_id': ser.usuario_id})
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
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        edad = data.get("edad")
        rut = data.get("rut")
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
        #
        if not all([username, password, first_name, last_name, email, edad, rut, fono, sexo, vivienda, region, comuna, num_vivienda]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        if CustomersUsers.objects.filter(rut=rut).exists():
            return Response({'error': 4}, status=status.HTTP_400_BAD_REQUEST)
        dato_serializado = CustomUserSerializer(data=data)
        if dato_serializado.is_valid():
            usuario = dato_serializado.save(password=hashed_password)
            # Aquí nos aseguramos de actualizar la copia mutable de los datos
            data.update({'usuario': usuario.id})
            # Insertar el Paciente.
            paciente_data = {
                'paciente_uuid': paciente_uuid,
                'fk_user': usuario.id
            }
            # print("--------------------")
            # print(paciente_data)
            # print("--------------------")
            paciente = PacienteSerializer(data=paciente_data)
            if paciente.is_valid():
                paciente.save()
                group = Group.objects.get(name='Pacientes')
                usuario.groups.add(group)
                direccion_dato_serializado = DireccionSerializer(data=data)
                #print(direccion_dato_serializado)
                if direccion_dato_serializado.is_valid():
                    direccion_dato_serializado.save()
                    #Obtener el grupo por nombre
                    grupo = Group.objects.get(name='Pacientes')
                    #print(grupo)
                    # Obtener todos los usuarios del grupo
                    usuarios = grupo.user_set.all()
                    datos = []
                    # Realizamos el insert a la tabla Reserva.
                    #reserva = ReservaSerializer(data=)
                    for users in usuarios:
                        # Serializar los datos
                        serializer_dir = DireccionModel.objects.filter(usuario_id=users.id)
                        for ser in serializer_dir:
                            print(ser.vivienda)
                            datos.append({'id': users.id, 'usuario_uuid':usuario_uuid,'username': users.username, 'first_name': users.first_name, 'last_name': users.last_name, 'email': users.email, 'edad': users.edad, 'sexo': users.sexo, 'rut': users.rut, 'fono': users.fono, 'password': users.password,'region': ser.region, 'comuna': ser.comuna, 'vivienda': ser.vivienda, 'num_vivienda': ser.num_vivienda, 'usuario_id': ser.usuario_id})
                    return Response({'pacientes': datos}, status=status.HTTP_200_OK)
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
        vivienda = data.get("vivienda")
        region = data.get("region")
        comuna = data.get("comuna")
        num_vivienda = data.get("num_vivienda")
        # Validaciones.
        if not all([username, password, first_name, last_name, email, edad, rut, fono, sexo, vivienda, region, comuna, num_vivienda]):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        user = CustomersUsers.objects.get(pk=id)
        # Validar y actualizar datos
        serializer = CustomUserSerializer(user, data=request.data, partial=True)
        print("-----------------------------------------------------------------")
        if serializer.is_valid():
            # Hashear contraseña si se proporciona
            if 'password' in request.data:
                password = request.data['password']
                serializer.validated_data['password'] = make_password(password)
                # Actualizar campos adicionales
                serializer.save()
            # Buscar la instancia de la dirección existente
            direccion = DireccionModel.objects.filter(usuario_id=user.id).first()
            direccion_serializer = DireccionSerializer(direccion, data=request.data, partial=True)
            if direccion_serializer.is_valid():
                direccion_serializer.save()
                # Obtener el grupo por nombre
                grupo = Group.objects.get(name='Pacientes')
                # Obtener todos los usuarios del grupo
                usuarios = grupo.user_set.all()
                datos = []
                for users in usuarios:
                    serializer_dir = DireccionModel.objects.filter(usuario_id=users.id)
                    for ser in serializer_dir:
                        datos.append({'id': users.id, 'username': users.username, 'first_name': users.first_name, 'last_name': users.last_name, 'email': users.email, 'edad': users.edad, 'sexo': users.sexo, 'rut': users.rut, 'fono': users.fono, 'usuario_uuid': users.usuario_uuid, 'password': users.password, 'region': ser.region, 'comuna': ser.comuna, 'vivienda': ser.vivienda, 'num_vivienda': ser.num_vivienda, 'usuario_id': ser.usuario_id})
                
                return Response({'pacientes': datos}, status=status.HTTP_200_OK)
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
        direccion = DireccionModel.objects.get(usuario=user.id)
        direccion.delete()
        user.delete()
        # Obtener el grupo por nombre
        grupo = Group.objects.get(name='Pacientes')
        #print(grupo)
        # Obtener todos los usuarios del grupo
        usuarios = grupo.user_set.all()
        datos = []
        for users in usuarios:
            #print(users.id)
            # Serializar los datos
            serializer_dir = DireccionModel.objects.filter(usuario=users.id)
            for ser in serializer_dir:
                datos.append({'username': users.username, 'first_name': users.first_name, 'last_name': users.last_name, 'email': users.email, 'edad': users.edad, 'sexo': users.sexo, 'rut': users.rut, 'fono': users.fono, 'usuario_uuid':users.usuario_uuid, 'password':users.password,'region': ser.region, 'comuna': ser.comuna, 'vivienda': ser.vivienda, 'num_vivienda': ser.num_vivienda, 'usuario_id': ser.usuario_id})
        print("Estamos Pasando")
        print(datos)
        print("Ya pasamos")
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
        usuario = CustomersUsers.objects.get(pk=id_usuario_doctor)
        print(usuario.first_name + ' ' + usuario.last_name)
        nombre_doctor = usuario.first_name + ' ' + usuario.last_name
        #arr.append({'nombre_doctor': nombre_doctor})
        #print(arr)
        #
        datos_reserva = ReservaModel.objects.filter(especialidad= especialidad.nombre_especialidad, nombre_clinica=nombre_clinica.nombre_clinica, nombre_doctor=nombre_doctor)
        # print(datos_reserva.count())
        res = []
        id = '';
        for datos in datos_reserva:
            id = datos.fk_usuario_id  # Obtenemos directamente el ID del usuario
            res.append({
                'especialidad': especialidad.nombre_especialidad,
                'nombre_doctor': nombre_doctor,
                'fecha_reserva': datos.fecha_reserva,
                'especialidad': datos.especialidad,
                'hora_inicio': datos.hora_inicio,
                'hora_termino': datos.hora_termino,
                'reserva_uuid': datos.reserva_uuid,
            })
        # Serializar la lista res
        reserva_data = ReservaSerializer(res, many=True) 
        print("Contenido de reserva_data:", reserva_data.data)
        # Iterar sobre los datos serializados correctamente
        nueva_data = []
        for reserv in reserva_data.data:  # Aquí accedemos a .data
            paciente = CustomersUsers.objects.get(pk=id)  # Si necesitas más datos del usuario
            nombre_paciente = paciente.first_name + " " + paciente.last_name
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
        print("Pasamos 1")
        print(data)
        print("Pasamos 1")
        id_usuario_existe = data['fk_usuario']
        especialidad_existe = data['especialidad']
        fecha_reserva = data['fecha_reserva']
        fecha_reserva = date.fromisoformat(fecha_reserva)
        hoy = date.today()
        verificar = ReservaModel.objects.filter(especialidad=especialidad_existe, fecha_reserva=fecha_reserva,fk_usuario=id_usuario_existe)
        print(verificar.count())
        if verificar.count() > 0 :
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
            reserva_user = ReservaModel.objects.filter(fk_usuario__id=request.data["fk_usuario"])
            reserva_user_paciente = ReservaSerializer(reserva_user, many=True)
            # Obtener los datos para el correo.
            reserva_nueva = ReservaModel.objects.get(pk=id_reserva_insertada)
            # Creación del correo.
            subject = "Correo de Verificación de Compras"
            # Crearemos el envío de correos.
            template = render_to_string("pacientes\correo_reserva.html",{
                'nombre_paciente': id_user_pac.first_name + ' ' + id_user_pac.last_name,
                'rut_paciente': id_user_pac.rut,
                'email_paciente': id_user_pac.email,
                'fono_paciente': id_user_pac.fono,
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