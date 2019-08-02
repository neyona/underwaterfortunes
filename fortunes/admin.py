# fortunes/admin.py
from django.contrib import admin

from .models import Fortune

admin.site.register(Fortune)
