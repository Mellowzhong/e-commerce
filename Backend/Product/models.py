from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    url_image = models.URLField()
    price = models.FloatField()
    stock = models.IntegerField()
    publish_at = models.DateTimeField(auto_now_add = True)
    publisher = models.ForeignKey(User, on_delete = models.CASCADE, related_name='products')

    def __str__(self):
        return self.name
