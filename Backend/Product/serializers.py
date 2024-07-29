from rest_framework import serializers
from .models import Product
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'publisher', 'publish_at']
        extra_kwargs = {'publisher': {'read_only': True}}