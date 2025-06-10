from django.urls import path
from . import views

urlpatterns = [
    # Esta ruta es de la seleccion del Index.
    path('especialidad/listar_esp_index', views.listar_esp_index, name='listar_esp_index'),
    # Esta ruta es de la seleccion del Index.
    path('especialidad/listar_doc_index/<int:id_especialidad>/', views.listar_doc_index, name='listar_doc_index'),
    # Eliminar una reserva del paciente registrado panel ADMIN.
    path('reserva/delete_pac_reserva/<int:fk_usuario>/', views.delete_pac_reserva, name='delete_pac_reserva'),
    # Obtener todas las citas registradas..
    path('reserva/historial_reserva', views.historial_reserva, name='historial_reserva'),
    # Obtener todos los pacientes correspondientes al doctor.
    path('reserva/listar_paciente_doctor', views.listar_paciente_doctor, name='listar_paciente_doctor'),
    # Obtener todos los pacientes correspondientes al doctor.
    path('reserva/listar_paciente_historial_doctor/<int:id>/', views.listar_paciente_historial_doctor, name='listar_paciente_historial_doctor'),
    # Listar laas clínicas del doctor para que vea sus reservas o citas, Panel
    path('reserva/listar_clinica_paciente_doctor', views.listar_clinica_paciente_doctor, name='listar_clinica_paciente_doctor'),
    # Obtener todos los pacientes correspondientes al doctor con citas.
    path('reserva/listar_paciente_doctor_cita', views.listar_paciente_doctor_cita, name='listar_paciente_doctor_cita'),
]