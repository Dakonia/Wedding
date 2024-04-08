# Wedding/urls.py
from django.urls import path
from .views import GuestListCreate

urlpatterns = [
    path('guests/', GuestListCreate.as_view(), name='guest-list-create'),
]
