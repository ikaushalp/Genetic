from django.contrib.auth.hashers import check_password
from Authentication.models import CustomUser

class CustomUserBackend():
    def authenticate(self, request, username=None, password=None):
        if username and password:
            try:
                user = CustomUser.objects.get(username=username)
                if check_password(password, user.password):
                    if user:
                        return user
            except CustomUser.DoesNotExist:
                return None
        return None

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None