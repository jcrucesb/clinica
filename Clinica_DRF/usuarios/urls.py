from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('usuario/usuario_grupo', views.usuario_grupo, name='usuario_grupo'),
    path('usuario/listar_doctor', views.listar_doctor, name='listar_doctor'),
    path('usuario/crear_doctor', views.crear_doctor, name='crear_doctor'),
]