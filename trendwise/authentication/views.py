from rest_framework import permissions
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response

from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer  # Inherits from rest_framework.serializers


class AccountViewSet(viewsets.ModelViewSet):
    """
    The actions provided by the ModelViewSet class are;
    .list(), .retrieve(), .create(), .update(), .partial_update(), and .destroy()
    for objects from the Account model
    """
    lookup_field = 'email'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    # permission_classes = [IsAccountAdminOrReadOnly]

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        """
        Not using the serializers '.save' method because it will store the password in plain text.
        Instead the
        """
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            # create_user method from
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad Request',
            'message': 'Account could not be created with the data recieved.'
        }, status=status.HTTP_400_BAD_REQUEST)
