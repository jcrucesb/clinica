from django.urls import path
from . import views

urlpatterns = [
    path('especialidad/listar_esp_index', views.listar_esp_index, name='listar_esp_index'),
    path('especialidad/listar_doc_index/<int:id_especialidad>/', views.listar_doc_index, name='listar_doc_index'),
]