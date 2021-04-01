from django.urls import path
from Authentication import views

app_name = 'Authentication'

urlpatterns = [
    path('', views.loginpage, name='loginpage'),
    path('login', views.handlelogin, name='login'),
    path('logout', views.handlelogout, name='logout'),
]