from django.shortcuts import render
from rest_framework import generics
from .serializer import Registerserializer, Createuser
from django.contrib.auth.models import User
from .models import Registeruser

# Create your views here.
class Formusers(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = Createuser

class Registeruserview(generics.ListCreateAPIView):
    queryset = Registeruser.objects.all()
    serializer_class = Registerserializer

    def perform_create(self, serializer):
        print('User is being created...')
        serializer.save()

class RegisterUserUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Registeruser.objects.all()
    serializer_class = Registerserializer
    lookup_field = 'id'  # Update based on ID


# Delete
class RegisterUserDeleteView(generics.DestroyAPIView):
    queryset = Registeruser.objects.all()
    serializer_class = Registerserializer
    lookup_field = 'id'  # Delete based on ID