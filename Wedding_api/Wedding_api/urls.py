# Wedding_api/urls.py
from django.urls import path, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),  # URL для админ-панели Django
    path('api/', include('Weeding.urls')),  # URL для вашего API
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
