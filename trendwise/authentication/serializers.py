from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers

from authentication.models import Account


class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Account
        fields = ('id', 'email', 'fave_hero',
                  'password', 'confirm_password')
        read_only_files = ('created_at', 'updated_at')

        def create(self, validated_data):
            """
            Create and return a new `Account` instance, given the validated data.
            """
            return Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            """
            Create and return an existing `Account` instance, given the validated data.
            """
            instance.fave_hero = validated_data.get('fave_hero', instance.fave_hero)
            instance.save()

            password = validated_data.get('password', None)
            confirm_password = validated_data.get('confirm_password', None)

            if password and confirm_password and password == confirm_password:
                instance.set_password(password)
                instance.save()

            # Reauthenticate the user after they have changed their password
            update_session_auth_hash(self.get.context.get('request'), instance)

            return instance
