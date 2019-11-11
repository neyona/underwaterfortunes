from django.urls import path

from .views import ContactListCreate

urlpatterns = [
    path('api/contact/', ContactListCreate.as_view()),
]
