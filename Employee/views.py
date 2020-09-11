from django.shortcuts import render

# Create your views here.

def add_Department(request):
    return render(request, 'Employee_template/add_department')

def add_Designation(request):
    return render(request, 'Employee_template/add_designation')

def add_Employee(request):
    return render(request, 'Employee_template/add_employee')

def employee_List(request):
    return render(request, 'Employee_template/employee_list')