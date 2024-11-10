from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated


from .serializers import *


# Create your views here.
def index(request):
    return Response("Hello World")



class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data, "request.data")
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Generate a token for the registered user
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message": "User registered successfully!",
                "token": token.key,
            }, status=status.HTTP_201_CREATED)
        print(serializer.errors, "serializer.errors")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']

            # Generate or retrieve token for the authenticated user
            token, created = Token.objects.get_or_create(user=user)
            user_groups = user.groups.all()
            groups = None
            if user_groups.filter(name='user').exists():
                groups = "user"
            elif user.is_superuser:
                groups = "admin"
            user_serializer = UserSerializer(user)
            data = user_serializer.data
            data["tokens"] = token.key
            data["groups"] = groups
            print(data, "data")
            return Response(data, status=status.HTTP_200_OK)
        print(serializer.errors, "serializer.errors")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user_serializer = UserSerializer(request.user)
        print(user_serializer.data)
        return Response(user_serializer.data, status=status.HTTP_200_OK)