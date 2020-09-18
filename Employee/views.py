from django.shortcuts import render

# Create your views here.

def add_Employee(request):
    return render(request, 'Employee_template/add_employee.html')

def employee_List(request):
    return render(request, 'Employee_template/employee_list.html')