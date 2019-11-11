from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    messageinput = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
