from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
import json

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
    

class DishCreateView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract and parse JSON data
        data = request.data.get('data')
        img = request.FILES.get('image')

        # Parse `data` if it's a JSON string
        try:
            if isinstance(data, str):
                data = json.loads(data)  # Parse JSON string to dictionary
            
            # Add image to the parsed data
            data['image'] = img

            # Debugging logs
            print(request.FILES.get('dishImage'), "img")
        except json.JSONDecodeError as e:
            return Response({'error': f'Invalid JSON format: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

        # Validate and save using serializer
        serializer = ItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({ "message": "User registered successfully!",}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors,"serializer.errors")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Dishes(APIView):
    def get(self, request):
        # Get all items
        items = Item.objects.filter(available=True)
        
        # Group items by category
        grouped_data = {}
        for category in items.values_list('category', flat=True).distinct():
            if category:  # Ignore null categories
                grouped_data[category] = {
                    "items": ItemSerializer(items.filter(category=category), many=True).data,
                    "count": items.filter(category=category).count()
                }
        
        # Total category count
        category_count = len(grouped_data.keys())
        return Response({
            "categories": grouped_data,
            "category_count": category_count
        },status=status.HTTP_200_OK)


from rest_framework.exceptions import NotFound
class DishesDetails(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request,id):
        item = Item.objects.get(id=id)
        serializers = ItemSerializer(item)
        
        return Response(serializers.data,status=status.HTTP_200_OK)
    

    def put(self, request, id):
        
        try:
            print('hii')
            item = Item.objects.get(id=id)
        except Item.DoesNotExist:
            raise NotFound(detail="Dish not found")

         # Extract and parse JSON data
        data = request.data.get('data')
        img = request.FILES.get('image')

        print(img,"img")
        # Parse `data` if it's a JSON string
        try:
            if isinstance(data, str):
                data = json.loads(data)  # Parse JSON string to dictionary
            
            # Add image to the parsed data
            data['image'] = img

            # Debugging logs
            print(request.FILES.get('dishImage'), "img")
        except json.JSONDecodeError as e:
            return Response({'error': f'Invalid JSON format: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

        # Validate and save using serializer
        serializer = ItemSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({ "message": "User registered successfully!",}, status=status.HTTP_200_OK)
        else:
            print(serializer.errors,"serializer.errors")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class NewDishes(APIView):
    def get(self,request):
        items = Item.objects.all().order_by('-id')[:5]
        serializer = ItemSerializer(items,many =True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    
class CategoryDishesView(APIView):
    def get(self,request,category):
        items = Item.objects.filter(category=category)
        serializer = ItemSerializer(items,many =True)

        return Response(serializer.data,status=status.HTTP_200_OK)
