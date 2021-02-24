from django.urls import path
from Patient import views
app_name = 'Patient'

urlpatterns = [
    path('add', views.index, name='add'),
    path('add_data', views.add_Patient, name='add_data'),
    path('category', views.category, name='category'),
    path('view', views.patient_list, name='view'),
    path('delete', views.delete_patient, name='delete'),
]