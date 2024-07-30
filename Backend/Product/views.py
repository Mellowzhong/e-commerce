from rest_framework import generics
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product

class ProductListCreate(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Product.objects.filter(publisher=self.request.user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(publisher=self.request.user)
        else:
            print(serializer.errors)

class ProductDelete(generics.DestroyAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Product.objects.filter(publisher=self.request.user)

class ProductUpdate(generics.UpdateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Product.objects.filter(publisher=self.request.user)