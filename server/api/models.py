from django.db import models
import random
import string
from django.contrib.auth.models import Group, AbstractUser
from django.db import models, connection
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import BaseUserManager

class AlphaNumericFieldfive(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs["max_length"] = 5  # Set fixed max_length for alphanumeric field
        super().__init__(*args, **kwargs)

    @staticmethod
    def generate_alphanumeric():
        alphanumeric = "".join(
            random.choices(string.ascii_letters + string.digits, k=5)
        )
        return alphanumeric.upper()


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    objects = CustomUserManager()

    username = None
    last_name = None

    email = models.EmailField(_("email address"), unique=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    mobile_number = models.CharField(max_length=15,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []


    def __str__(self):
        return f"{self.email} - {self.mobile_number}"


groups = [
    "admin",
    "user", # Default group for all users

]

from django.db.models.signals import post_migrate
from django.dispatch import receiver


@receiver(post_migrate)
def create_groups(sender, **kwargs):
    with connection.cursor() as cursor:
        table_names = connection.introspection.table_names(cursor)
        if "auth_group" in table_names:
            for group_name in groups:
                Group.objects.get_or_create(name=group_name)
        else:
            print("auth_group table does not exist, skipping group creation.")



class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    mrp_price = models.DecimalField(max_digits=10, decimal_places=2,blank=True, null=True)
    selling_price = models.DecimalField(max_digits=10, decimal_places=2,blank=True, null=True)
    offer_percentage = models.PositiveIntegerField(default=0,blank=True, null=True)
    ratings = models.PositiveIntegerField(default=0,blank=True, null=True )
    category = models.CharField(max_length=100,blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    available = models.BooleanField(default=True,blank=True, null=True)
    images = models.ManyToManyField("Images", related_name="item_images",blank=True, null=True)

    @property
    def selling_price(self):
        discount = (self.offer_percentage / 100) * self.mrp_price
        return self.mrp_price - discount

    def __str__(self):
        return f"{self.name} - Selling Price: {self.selling_price}"

class Images(models.Model):
    image1 = models.ImageField(upload_to='images/',blank=True, null=True)
    image2 = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return f"{self.item.name} - {self.image.url}"


class Review(models.Model):
    item = models.ForeignKey(Item, related_name="reviews", on_delete=models.CASCADE)
    name = models.CharField(max_length=100,blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    rating = models.PositiveIntegerField(default=0,blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.email}"




class Order(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Preparing', 'Preparing'),
        ('On the Way', 'On the Way'),
        ('Delivered', 'Delivered'),
        ('Canceled', 'Canceled'),
    ]

    customer = models.ForeignKey(CustomUser, related_name="orders", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def __str__(self):
        return f"Order {self.id} - {self.customer.user.username}"

    def update_total_price(self):
        # Recalculate total price based on OrderItems
        total = sum(item.get_total_price() for item in self.items.all())
        self.total_price = total
        self.save()


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.item.name}"

    def get_total_price(self):
        return self.quantity * self.item.price

