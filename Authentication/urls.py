from django.urls import path
from Authentication import views

app_name = 'Authentication'

urlpatterns = [
    path('', views.handleLogin, name='login'),
    path('validate_user', views.validate_user, name='validate_user')
]