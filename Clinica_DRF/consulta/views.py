from django.shortcuts import render
from rest_framework.response import Response
# Importamos el status.
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
# Importamos la clase serializers que hemos creado anteriormente.
#  En el modelo también agregamos la clase serializers, es una buena práctica.
from .models import Consulta
from .serializers import ConsultaSerializers

# Create your views here.
@api_view(['POST'])
# Para este formulario NO se necesita token; @permission_classes([AllowAny])
@permission_classes([AllowAny])
def consulta(request):
    try:
        #print(request.data)
        dato_serializado = ConsultaSerializers(data=request.data)
        if dato_serializado.is_valid():
            dato_serializado.save()
            return Response({'bien': 1}, status=status.HTTP_200_OK)
        else:
            # Si la validación falla, devolvemos los errores
            return Response({'error': 2}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return Response({'error': 3}, status=400)