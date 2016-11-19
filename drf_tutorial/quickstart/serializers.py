from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Sets the fields wanted for user output data representation
    """
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    """
    Sets the fields wanted for group output data representation
    """
    class Meta:
        model = Group
        fields = ('url', 'name')
