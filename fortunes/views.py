# fortunes/views.py
from rest_framework import generics

from .models import Fortune
from .serializers import FortuneSerializer


class FortuneList(generics.ListAPIView):
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer


class FortuneDetail(generics.ListAPIView):
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer
