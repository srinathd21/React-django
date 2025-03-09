from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Registeruser

class Createuser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        #print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class Registerserializer(serializers.ModelSerializer):
    class Meta:
        model = Registeruser
        fields = '__all__'