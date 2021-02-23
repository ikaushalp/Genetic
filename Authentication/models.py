from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, AbstractUser
)
# Create your models here.

# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if username:
            user = self.model(
                username=username
            )
        user.set_password(password)
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    id = models.IntegerFieldField()
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['']

    objects = CustomUserManager()

    def __str__(self):
        return self.username

    @property
    def is_authenticated(self):
        return True

    class Meta():
        db_table = 'login'
        verbose_name = 'User'
        verbose_name_plural = 'Users'