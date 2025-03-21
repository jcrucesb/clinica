from django.urls import path
from . import views

urlpatterns = [
    path('paciente/listar_paciente', views.listar_paciente, name='listar_paciente'),
    path('paciente/crear_paciente', views.crear_paciente, name='crear_paciente'),
    path('paciente/update_paciente/<int:id>/', views.update_paciente, name='update_paciente'),
    path('paciente/delete_paciente/<int:id>/', views.delete_paciente, name='delete_paciente'),
]