from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static  
from .views import *
urlpatterns = [
    path('',index,name="index"),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/', UserInfoView.as_view(), name='user'),
    path('add_new_add/', DishCreateView.as_view(), name='add_new_add'),
    path('dishes/', Dishes.as_view(), name='dishes'),
    path('dish-details/<str:id>', DishesDetails.as_view(), name='dish-details'),
    # path('dish-edit/<str:id>', DishEdit.as_view(), name='dish-edit'),

    # path('edit-dish/<str:id>', EditDishView.as_view(), name='edit-dish'),
    path('dishes/<str:category>', CategoryDishesView.as_view(), name='category_dishes'),
    path('new_dishes/', NewDishes.as_view(), name='new_dishes'),

    #  path('dish/<int:id>/edit/', DishUpdateView.as_view(), name='dish-edit'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
