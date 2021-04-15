from django.urls import path
from Appointment import views

app_name = 'Appointment'

urlpatterns = [
    path('add', views.add_appointment, name='add'),
    path('view', views.appointment_list, name='view'),
    path('pending', views.pending_appointment_list, name='pending'),
    path('confirm', views.confirm_appointment, name='confirm'),
    path('loadtimeslot', views.loadtimeslot, name='timeslot'),
]
