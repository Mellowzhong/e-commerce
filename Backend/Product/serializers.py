from rest_framework import serializers
from .models import Product
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'url_image', 'price', 'stock', 'publish_at', 'publisher']
        extra_kwargs = {'publisher': {'read_only': True}}