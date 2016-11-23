from rest_framework import permissions


class IsAccountOwner(permissions.BasePermission):
    """
    To check if the user is associated with the current request.
    """
    def has_object_permission(self, request, view, account):
        if request.user:
            return account == request.user
        return False
