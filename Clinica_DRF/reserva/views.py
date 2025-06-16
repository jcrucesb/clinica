from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import authentication_classes, permission_classes, api_view
from usuarios.models import CustomersUsers
from usuarios.serializers import CustomUserSerializer
from especialidad.models import Especialidad
from especialidad.serializers import EspecialidadSerializers
from comuna_clinica.models import ComunaClinicaModel
from comuna_clinica.serializers import ComunaClinicaSerializer
from doctor.models import DoctorModel
from doctor.serializers import DoctorSerializer
from paciente.models import PacienteModel
from paciente.serializers import PacienteSerializer
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
            paciente = PacienteModel.objects.filter(fk_user=res.fk_usuario.id)
            for pac in paciente:
                nombre_paciente = pac.primer_nombre + ' ' + pac.segundo_nombre
                arr.append({'id_reserva': res.id,'fecha_reserva': res.fecha_reserva, 'especialidad': res.especialidad, 'nombre_doctor': res.nombre_doctor, 'tipo_pago': res.tipo_pago, 'reserva_uuid': res.reserva_uuid, 'comuna_clinica': res.comuna_clinica, 'direccion_clinica': res.direccion_clinica, 'nombre_clinica': res.nombre_clinica, 'hora_inicio':res.hora_inicio, 'hora_termino': res.hora_termino, 'fecha_creacion_reserva': res.fecha_creacion_reserva, 'nombre_paciente': nombre_paciente})
        return Response({'reserva':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

@api_view(['GET'])
@permission_classes([AllowAny])
def listar_clinica_paciente_doctor(request):
    try:
        # Obtenemos todas las clínicas.
        clinicas = ComunaClinicaModel.objects.all()
        cl = []
        for cli in clinicas:
            print("Todas las clínicas")
            print(cli.id)
            print(cli.nombre_clinica)
            cl.append({
                'id': cli.id,
                'nombre_clinica': cli.nombre_clinica
            })
        return Response({'reserva':cl},
                    # Específicamos el status.
                    status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)
#
@api_view(['POST'])
@permission_classes([AllowAny])
def listar_paciente_doctor(request):
    try:
        print("---****----")
        print(request.data)
        print("---****----")
        usuario = CustomersUsers.objects.get(username=request.data["username"])
        doctor = DoctorModel.objects.get(fk_user=usuario.id)
        nombre_doctor = doctor.primer_nombre +' '+ doctor.segundo_nombre +' '+ doctor.ap_paterno +' '+ doctor.ap_materno
        clinica = ComunaClinicaModel.objects.filter(pk=request.data["id_clinica"])
        arr = []
        for cli in clinica:
            print(cli.nombre_clinica)
            usuario = ReservaModel.objects.filter(nombre_doctor=nombre_doctor,nombre_clinica=cli.nombre_clinica)
            for us in usuario:
                print(us.fk_usuario)
                # Obtenemos el nombre del usuario.
                user_paciente = CustomersUsers.objects.filter(pk=us.fk_usuario.id)
                for user_pc in user_paciente:
                    paciente = PacienteModel.objects.filter(fk_user=user_pc.id)
                    for pc in paciente:
                        print(pc.primer_nombre)
                        print(pc.segundo_nombre)
                        dato_pac_completo = pc.primer_nombre +' '+ pc.segundo_nombre +' '+ pc.ap_paterno +' '+ pc.ap_materno
                        print(pc.edad)
                        print(pc.sexo)
                        print(pc.rut)
                    arr.append({
                        'id_reserva': us.id,
                        'id_paciente': pc.id,
                        'fecha_reserva': us.fecha_reserva,
                        'start': us.hora_inicio,
                        'end': us.hora_termino,
                        'title': us.especialidad,
                        'nombre_clinica': us.nombre_clinica,
                        'nombre_doctor': us.nombre_doctor,
                        'nombre_paciente': dato_pac_completo,
                        'edad': pc.edad,
                        'sexo': pc.sexo,
                        'rut': pc.rut,
                        'cod_reserva': us.reserva_uuid,
                        'reserva_cerrada': us.reserva_cerrada, 
                    })
        return Response({'paciente':arr},
                        # Específicamos el status.
                        status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 1}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_paciente_doctor_cita(request):
    try:
        #
        usuario = CustomersUsers.objects.get(pk=request.user.id)
        doctor = DoctorModel.objects.get(fk_user=usuario.id)
        nombre_doctor = doctor.primer_nombre + ' ' + doctor.segundo_nombre + ' ' + doctor.ap_paterno + ' ' + doctor.ap_materno
        #
        arr = []
        res = ReservaModel.objects.filter(nombre_doctor=nombre_doctor)
        for us in res:
            print(us.fk_usuario)
            print(us.hora_termino)
            print(us.id,)
            # Obtenemos el nombre del usuario.
            user_paciente = CustomersUsers.objects.filter(pk=us.fk_usuario.id)
            for user_pc in user_paciente:
                paciente = PacienteModel.objects.get(fk_user=user_pc.id)
                #
                dato_pac_completo = paciente.primer_nombre +' '+ paciente.segundo_nombre +' '+ paciente.ap_paterno +' '+ paciente.ap_materno
                print(dato_pac_completo)
                #
                arr.append({
                    'id_reserva': us.id,
                    'id_paciente': paciente.id,
                    'email': user_pc.email,
                    'fecha_reserva': us.fecha_reserva,
                    'hora_inicio': us.hora_inicio,
                    'hora_termino': us.hora_termino,
                    'especialidad': us.especialidad,
                    'nombre_clinica': us.nombre_clinica,
                    'comuna_clinica': us.comuna_clinica,
                    'direccion_clinica': us.direccion_clinica,
                    'nombre_doctor': us.nombre_doctor,
                    'nombre_paciente': dato_pac_completo,
                    'edad': paciente.edad,
                    'sexo': paciente.sexo,
                    'rut': paciente.rut,
                    'fono': paciente.fono,
                    'reserva_uuid': us.reserva_uuid,
                    'reserva_cerrada': us.reserva_cerrada,
                })
        print(arr)
        return Response({'paciente':arr},
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
    
#
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def historial_cli_pac_panel_secretaria(request, id):
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

#
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_reserva_panel_secretaria(request, id_reserva):
    try:
        print(id_reserva)
        #
        id_usuario = None
        arr = []
        #
        reserva = ReservaModel.objects.get(pk=id_reserva)
        arr = []
        id_usuario = reserva.fk_usuario.id
        reserva.delete()
        print("Prueba 1")
        print(id_usuario)
        print("Prueba 1")
        reserva_usuarios = ReservaModel.objects.filter(fk_usuario=id_usuario)
        print(reserva_usuarios)
        for res in reserva_usuarios:
            arr.append({'id_reserva': res.id,'especialidad': res.especialidad, 'nombre_doctor':res.nombre_doctor,'nombre_clinica': res.nombre_clinica, 'comuna_clinica':res.comuna_clinica, 'direccion_clinica':res.direccion_clinica,'fecha_reserva': res.fecha_reserva,'hora_inicio':res.hora_inicio, 'hora_termino':res.hora_termino, 'fecha_creacion_reserva':res.fecha_creacion_reserva, 'cod_reserva': res.reserva_uuid,'id_usuario': id_usuario})
        print("Array")
        print(arr)
        print("Array")
        return Response({'reserva':arr},
                    # Específicamos el status.
                    status=status.HTTP_200_OK)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}") 
        return Response({'error': 1}, status=400)