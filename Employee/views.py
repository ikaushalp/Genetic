from django.shortcuts import render
from Employee.models import Employee
from django.http import JsonResponse
# Create your views here.

def add_Employee(request):
    if request.method == "POST" and request.is_ajax():
        add = Employee(
            ename=request.POST.get('name'),
            gender = request.POST.get('gender'),
            birthdate = request.POST.get('birthdate'),
            marital_status = request.POST.get('marital_status'),
            mobile = request.POST.get('phone'),
            email = request.POST.get('email'),
            address = request.POST.get('address'),
        )
        add.save()
        return JsonResponse({'saved':1})
    else:
        return render(request, 'Employee_template/add_employee.html')

def employee_List(request):
    return render(request, 'Employee_template/employee_list.html')