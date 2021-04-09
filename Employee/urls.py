from django.urls import path
from Employee import views

app_name = 'Employee'

urlpatterns = [
    path('add', views.add_employee, name='add'),
    path('view', views.employee_list, name='view'),
    path('delete', views.delete_employee, name='delete'),
]