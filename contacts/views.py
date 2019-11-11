from rest_framework import generics
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Contact
from .permissions import AllPostsPermissions
from .serializers import ContactSerializer


class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    parser_classes = [JSONParser]
    permission_classes = (AllPostsPermissions,)

    @ensure_csrf_cookie
    def contact_list(request):
        return Response({"message": "Got some data!", "data": request.data})
