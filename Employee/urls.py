from django.urls import path
from  Employee import views

app_name = 'Employee'

urlpatterns = [
    path('add', views.add_Employee, name='add'),
    path('view', views.employee_List, name='view'),
]