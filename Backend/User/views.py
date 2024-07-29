from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, _, **kwargs):
        user = get_object_or_404(User, pk=kwargs['pk'])
        serializer = self.get_serializer(user)
        return Response(serializer.data)