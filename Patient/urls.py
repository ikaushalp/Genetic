from django.urls import path
from  Patient import views

app_name = 'Patient'

urlpatterns = [
    path('add', views.add_Patient, name='add'),
    path('category', views.category, name='category'),
    path('appointment', views.appointment, name='appointment'),
]