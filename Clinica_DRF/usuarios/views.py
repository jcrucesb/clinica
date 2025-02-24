from django.shortcuts import render
from .models import CustomersUsers
from .serializers import CustomUserSerializer
from django.shortcuts import render, redirect, get_object_or_404
from django.core import serializers
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
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
from rest_framework.decorators import authentication_classes, permission_classes
# La clase IsAuthenticated es un permiso en DRF que verifica si el usuario que realiza la solicitud está autenticado.
# Cuando se establece IsAuthenticated como permiso para una vista, solo los usuarios autenticados podrán acceder a esa vista. Los usuarios no autenticados no tendrán permiso para realizar la solicitud
from rest_framework.permissions import IsAuthenticated, AllowAny
# Proceso de Autenticación
# Obtención del Token: Cuando un usuario se autentica, intercambia su nombre de usuario y 
# contraseña por un token único. Este token se genera y almacena en la base de datos asociado al usuario.
# Uso del Token: En solicitudes subsiguientes, el cliente debe incluir este token en el encabezado 
# Authorization de la solicitud HTTP. El formato típico es Authorization: Token <token_value>
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
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
@api_view(['POST'])
def login(request):
    try:
        # print(request.data['username'])
        # print(request.data['password'])
        # Esta es forma rápida de validarsi el usuario existe.
        user = get_object_or_404(CustomersUsers, username=request.data['username'])
        print(user)
        # check_password; permite comparar un staring con los datos que ya estaban encriptados.
        if not user.check_password(request.data['password']):
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        # Verificamos si el usuario logueado es super usuario o administrador.
        is_superuser = user.is_superuser
        if is_superuser:
            tipo_user = 1
        else:
            tipo_user = 0
        # Creamos una tupla. 
        # ** Recordar que el método get_or_create, es una tupla, por ende, 
        # pasamos todos esos datos a una tupola de igual manera; token, created **
        token, created = Token.objects.get_or_create(user=user)
        # Llamamos al la clase UserSerializers para utilizar los campos del modelo User. 
        # Covertimos al usaurios en un JSON.
        dato_serializado = CustomUserSerializer(instance=user)
        return Response({'token':token.key,
                        'user': dato_serializado.data,
                        'tipo_user':tipo_user},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
def usuario_grupo(request):
    try:
        
        return Response({'grupo':1},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

#
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_doctor(request):
    try:
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
        return Response({'error': 1}, status=400)

#
@api_view(['POST'])
@permission_classes([AllowAny])
def crear_doctor(request):
    try:
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
        #
        if not username or not password or not password or not first_name or not last_name or not email or not edad or not rut or not fono or not sexo:
            return Response({'error': 0}, status=status.HTTP_400_BAD_REQUEST)
        #
        if CustomersUsers.objects.filter(rut=rut).exists():
            return Response({'error': 4}, status=status.HTTP_400_BAD_REQUEST)
        dato_serializado = CustomUserSerializer(data=request.data)
        try:
            if dato_serializado.is_valid():
                # Guardamos el objeto y obtenemos la instancia
                usuario = dato_serializado.save(password=hashed_password)
                # Obtenemos el ID del usuario recién creado
                nuevo_usuario_id = usuario.id
                group = Group.objects.get(name='Doctor')
                usuario.groups.add(group)
                return Response({'bien': 1}, status=status.HTTP_200_OK)
            else:
                #print(dato_serializado.errors)
                print("Errores de validación:", dato_serializado.errors)
                return Response({'error': 2, 'details': dato_serializado.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as err:
            print(f"Unexpected {err=}, {type(err)=}")
            return Response({'error': 1}, status=400)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)