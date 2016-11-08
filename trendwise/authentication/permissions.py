from rest_framework import permissions


# To check if the user is associated with the current request.
class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, account):
        if request.user:
            return account == request.user
        return False
