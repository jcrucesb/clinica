from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('usuario/usuario_grupo', views.usuario_grupo, name='usuario_grupo'),
    path('usuario/listar_doctor', views.listar_doctor, name='listar_doctor'),
    path('usuario/crear_doctor', views.crear_doctor, name='crear_doctor'),
    path('usuario/esp_doc_list/<int:id>/', views.esp_doc_list, name='esp_doc_list'),
    path('usuario/nueva_esp_doctor_admin/<int:id>/', views.nueva_esp_doctor_admin, name='nueva_esp_doctor_admin'),
    path('usuario/borrar_esp_doctor/<int:id>/', views.borrar_esp_doctor, name='borrar_esp_doctor'),
    path('usuario/borrar_doctor/<int:id>/', views.borrar_doctor, name='borrar_doctor'),
]