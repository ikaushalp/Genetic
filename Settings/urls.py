from django.urls import path
from  Settings import views

app_name = 'Settings'

urlpatterns = [
    path('', views.global_Settings, name='global'),
    path('apis', views.api_Settings, name='api_Settings'),
    path('profile', views.profile, name='profile'),
]