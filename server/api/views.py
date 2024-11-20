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
        items = Item.objects.all()
        
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

    def delete(self, request, id, format=None):
        try:
            # Find the dish by ID
            dish = Item.objects.get(id=id)

            dish.delete()

            return Response(
                {"detail": "Dish deleted successfully."},
                status=status.HTTP_204_NO_CONTENT  # 204 No Content means successful deletion
            )

        except Item.DoesNotExist:
            return Response(
                {"detail": "Dish not found."},
                status=status.HTTP_404_NOT_FOUND
            )
        

class ProductDetails(APIView):
    def get(self, request,id):
        item = Item.objects.get(id=id)
        category = item.category
        related_category = Item.objects.filter(category= category).exclude(id=id)
        product_item = ItemSerializer(item)
        related_items = ItemSerializer(related_category,many=True)
        

        return Response({"product_data":product_item.data,"related_items":related_items.data},status=status.HTTP_200_OK)
    


class NewDishes(APIView):
    def get(self,request):
        items = Item.objects.all().order_by('-id')[:8]
        serializer = ItemSerializer(items,many =True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    
class CategoryDishesView(APIView):
    def get(self,request,category):
        items = Item.objects.filter(category=category)
        serializer = ItemSerializer(items,many =True)

        return Response(serializer.data,status=status.HTTP_200_OK)


class ShopView(APIView):
    def get(self,request):
        categories = Item.objects.values_list('category', flat=True).distinct()[:6]
        categories = [category for category in categories if category]  # Remove None or blank categories

        new_items = Item.objects.all().order_by('-id')[:6]
        new_arrival = ItemSerializer(new_items,many =True)

        all_items = Item.objects.all()
        all_dishes = ItemSerializer(all_items,many =True)
        return Response({"categories":categories,"new_arrival":new_arrival.data,"all_dishes":all_dishes.data},status=status.HTTP_200_OK)

from django.core.exceptions import ObjectDoesNotExist    
class CartView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        cart = CartItem.objects.filter(user=request.user.id)
        serializers = CartItemSerializer(cart,many=True)
        return Response(serializers.data,status=status.HTTP_200_OK)
    def post(self, request):
        data = request.data
        dish_id = data.get('dish_id')
        quantity = data.get('quantity', 1)

        try:
            # Try to get the existing cart item
            item = CartItem.objects.get(user=request.user, dish_id=dish_id)
            # If found, update the quantity and total price
            item.quantity = quantity
            item.total_price = item.dish.selling_price * int(quantity)
            item.save()
            serializer = CartItemSerializer(item)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except ObjectDoesNotExist:
            # If the item does not exist, create a new one
            data['user'] = request.user.id  # Add user to the data
            serializer = CartItemSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, cart_item_id):
        print(cart_item_id,"cart_item_id")
        try:
            # Retrieve the cart item belonging to the authenticated user
            cart_item = CartItem.objects.get(id=cart_item_id, user=request.user)
            cart_item.delete()
            return Response(
                {"message": "Cart item deleted successfully."},
                status=status.HTTP_204_NO_CONTENT,
            )
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Cart item not found or does not belong to the user."},
                status=status.HTTP_404_NOT_FOUND,
            )