# Documentation notes on customising the authentication model.
# https://docs.djangoproject.com/en/1.10/topics/auth/customizing/#a-full-example

from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.db import models


class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        """
        Creates and saves a User with the given email, favourite
        hero and password.
        """
        if not email:
            raise ValueError('Users must have a valid email address.')

        if not kwargs.get('fave_hero'):
            raise ValueError('Users must have a favourite hero.')

        account = self.model(
            email=self.normalize_email(email),
            fave_hero=kwargs.get('fave_hero')
        )
        account.set_password(password)
        account.save(using=self._db)
        return account

    def create_superuser(self, email, password, **kwargs):
        """
        Creates and saves a superuser with the given email, favourite
        hero (optional) and password.
        """
        account = self.create_user(
            email,
            password=password,
            **kwargs
        )
        account.is_admin = True
        account.save(using=self._db)
        return account


# Extend the Abstract Base User Class
# and create the Account Model
class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    fave_hero = models.CharField(max_length=150, blank=True)

    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['fave_hero']

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def get_fave_hero(self):
        return self.fave_hero

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
