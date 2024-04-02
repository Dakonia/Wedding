from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # URL для админ-панели Django
    path('api/', include('Weeding.urls')),  # URL для вашего API
]
