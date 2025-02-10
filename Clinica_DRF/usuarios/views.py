from django.shortcuts import render
from .models import CustomersUsers
from .serializers import CustomUserSerializer

# Create your views here.
def login(request):
    print("Entramos")