from django.urls import path
from Authentication import views

app_name = 'Authentication'

urlpatterns = [
    path('', views.loginpage, name='login'),
    path('auth', views.handlelogin, name='auth'),
]