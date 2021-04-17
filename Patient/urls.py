from django.urls import path
from Patient import views

app_name = 'Patient'

urlpatterns = [
    path('add', views.add_patient, name='add'),
    path('view', views.patient_list, name='view'),
    path('delete', views.delete_patient, name='delete'),
    path('update', views.update_patient, name='update'),
    path('get_patient', views.get_patient_list, name='get_patient'),
    path('category', views.category, name='category'),
    path('delete_category', views.delete_category, name='delete_category'),
    path('update_category', views.update_category, name='update_category'),
]
