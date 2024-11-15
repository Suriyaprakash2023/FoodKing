from django.contrib import admin
from django.urls import path,include
from .views import *
urlpatterns = [
    path('',index,name="index"),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('user/', UserInfoView.as_view(), name='user'),
    path('add_new_add/', DishCreateView.as_view(), name='add_new_add'),
]
