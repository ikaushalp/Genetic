from django.urls import path
from Appointment import views

app_name = 'Appointment'

urlpatterns = [
    path('add', views.add_appointment, name='add'),
]