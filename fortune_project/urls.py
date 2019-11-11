from django.contrib import admin
from django.conf import settings
from django.urls import include, path, re_path
# from django.views.generic import TemplateView
# from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('fortunes.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('', include('contacts.urls')),
    re_path(r'', include('frontend.urls')),
]
