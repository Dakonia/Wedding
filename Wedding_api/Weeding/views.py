# Wedding/views.py
from rest_framework import status, generics
from rest_framework.response import Response
from .serializers import GuestSerializer
from .models import Guest


class GuestListCreate(generics.ListCreateAPIView):
    queryset = Guest.objects.all().order_by('-id')
    serializer_class = GuestSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
