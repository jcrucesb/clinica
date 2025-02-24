from django.urls import path
from . import views

urlpatterns = [
    path('especialidad/especialidad_doctor', views.especialidad_doctor, name='especialidad_doctor'),
    path('especialidad/insertar_especialidad', views.insertar_especialidad, name='insertar_especialidad'),
    path('especialidad/edit_especialidad/<int:id>/', views.edit_especialidad, name='edit_especialidad'),
    path('especialidad/eliminar_especialidad/<int:id>/', views.eliminar_especialidad, name='eliminar_especialidad'),
]