from django.urls import path
from Authentication import views
from django.contrib.auth import urls
app_name = 'Authentication'

urlpatterns = [
    path('', views.loginpage, name='loginpage'),
    path('login', views.handlelogin, name='login'),
    path('logout', views.handlelogout, name='logout'),
    path('password_reset', views.password_reset, name='password_reset'),

]