# fortunes/urls.py
from django.urls import path

from .views import FortuneList, FortuneDetail

urlpatterns = [
    path('<int:pk>/', FortuneDetail.as_view()),
    path('', FortuneList.as_view()),
]
