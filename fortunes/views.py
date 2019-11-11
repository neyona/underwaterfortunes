from rest_framework import generics

from .models import Fortune
from .permissions import IsAuthorOrReadOnly
from .serializers import FortuneSerializer


class FortuneList(generics.ListAPIView):
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer


class FortuneDetail(generics.ListAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer
