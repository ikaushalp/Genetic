from django.urls import path
from  Employee import views

app_name = 'Employee'

urlpatterns = [
    path('department', views.add_Department, name='department'),
    path('designation', views.add_Designation, name='designation'),
    path('add', views.add_Employee, name='add'),
    path('view', views.employee_List, name='view'),
]