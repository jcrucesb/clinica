from django.urls import path
from . import views

urlpatterns = [
    path('paciente/listar_paciente', views.listar_paciente, name='listar_paciente'),
    path('paciente/crear_paciente', views.crear_paciente, name='crear_paciente'),
    path('paciente/update_paciente/<int:id>/', views.update_paciente, name='update_paciente'),
    path('paciente/delete_paciente/<int:id>/', views.delete_paciente, name='delete_paciente'),
    path('paciente/reserva_paciente', views.reserva_paciente, name='reserva_paciente'),
    path('paciente/historial_user_paciente/<int:id_usuario>/', views.historial_user_paciente, name='historial_user_paciente'),
    path('paciente/reserva_paciente_registrado', views.reserva_paciente_registrado, name='reserva_paciente_registrado'),
    path('paciente/crear_reserva_pac_registrado', views.crear_reserva_pac_registrado, name='crear_reserva_pac_registrado'),
    path('paciente/historial_clinico', views.historial_clinico, name='historial_clinico'),
    path('paciente/update_paciente_panel_secretaria/<int:id>/', views.update_paciente_panel_secretaria, name='update_paciente_panel_secretaria'),
]