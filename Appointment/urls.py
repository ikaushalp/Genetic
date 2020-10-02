from django.urls import path
from Appointment import views

app_name = 'Appointment'

urlpatterns = [
    path('', views.appointment, name='appointment'),
]