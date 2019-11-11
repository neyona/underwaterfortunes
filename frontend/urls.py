from django.urls import path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    re_path(r'^robots\.txt$', TemplateView.as_view(
        template_name="frontend/robots.txt", content_type='text/plain')),
    re_path(r'^manifest\.json$', TemplateView.as_view(
        template_name="frontend/manifest.json", content_type='application/json')),
    re_path(r'^.*', TemplateView.as_view(
        template_name='frontend/index.html',
        content_type='text/html')),
]

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.index ),
# ]
