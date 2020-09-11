from django.urls import path
from  Settings import views

app_name = 'Settings'

urlpatterns = [
    path('', views.global_Settings, name='global'),
    path('profile', views.profile, name='profile'),
]