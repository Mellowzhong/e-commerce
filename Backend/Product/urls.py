from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductListCreate.as_view(), name='product_list'),
    path('delete/<int:pk>/', views.ProductDelete.as_view(), name='product_delete'),
    path('update/<int:pk>/', views.ProductUpdate.as_view(), name='product_update'),
]