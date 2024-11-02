from django.contrib.auth.models import Group
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('mobile_number', 'email', 'password')  # Include 'email' if it's a unique identifier

    def validate_email(self, value):
        # Check if the email already exists
        if CustomUser.objects.filter(email=value).exists():
            raise ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user_group, created = Group.objects.get_or_create(name='user')
        user.groups.add(user_group)
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    mobile_number = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        mobile_number = data.get("mobile_number")
        password = data.get("password")

        if mobile_number and password:
            try:
                # Find user by mobile number
                user = CustomUser.objects.get(mobile_number=mobile_number)
                # Check if password matches
                if not user.check_password(password):
                    raise serializers.ValidationError("Invalid mobile number or password.")
            except CustomUser.DoesNotExist:
                raise serializers.ValidationError("Invalid mobile number or password.")
        else:
            raise serializers.ValidationError("Both mobile number and password are required.")

        data['user'] = user
        return data


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ("mobile_number", "name", "email", "address", "city","groups")