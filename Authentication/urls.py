from django.urls import path
from Authentication import views
from django.contrib.auth import views as auth_view

app_name = 'Authentication'

urlpatterns = [
    path('', views.loginpage, name='loginpage'),
    path('login', views.handlelogin, name='login'),
    path('logout', views.handlelogout, name='logout'),
    path('password_reset', views.password_reset, name='password_reset'),
    path('reset/<uidb64>/<token>',
         auth_view.PasswordResetConfirmView.as_view(template_name='Authentication_template/password_reset.html'),
         name='password_reset_confirm'),
]
