from django.urls import path
from . import views

urlpatterns = [
    path('secretaria/listar_secretaria', views.listar_secretaria, name='listar_secretaria'),
    path('secretaria/crear_secretaria', views.crear_secretaria, name='crear_secretaria'),
    path('secretaria/update_secretaria/<int:id>/', views.update_secretaria, name='update_secretaria'),
    path('secretaria/delete_secretaria/<int:id>/', views.delete_secretaria, name='delete_secretaria')
]