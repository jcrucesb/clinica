from django.urls import path
from . import views

urlpatterns = [
    # Esta ruta es de la seleccion del Index.
    path('historial_clinico/listar_historial_clinico_pacien_panel_doctor', views.listar_historial_clinico_pacien_panel_doctor, name='listar_historial_clinico_pacien_panel_doctor'),
    
]