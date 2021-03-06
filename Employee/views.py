from django.shortcuts import render
from Employee.models import Employee
from django.http import JsonResponse
# Create your views here.

def add_Employee(request):
    if request.method == "POST" and request.is_ajax():
        add = Employee(
        ename= request.POST.get('name'),
        gender = request.POST.get('gender'),
        blood_group = request.POST.get('blood_group'),
        mobile = request.POST.get('phone'),
        email = request.POST.get('email'),
        marital_status= request.POST.get('marital_status'),
        address = request.POST.get('address'),
        role = request.POST.get('role'),
        designation = request.POST.get('designation'),
        department = request.POST.get('department'),
        joining_date = request.POST.get('joining_date'),
        qualification = request.POST.get('qualification')
        )
        add.save()
        return JsonResponse({'saved': 1})
    else:
        return render(request, 'Employee_template/add_employee.html')

def employee_List(request):
    return render(request, 'Employee_template/employee_list.html')