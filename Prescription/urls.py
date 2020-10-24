from django.urls import path
from Prescription import views

app_name = 'Prescription'

urlpatterns = [
  path('view', views.prescriptions_list, name='view'),
  path('add', views.add_prescription, name='add')
]