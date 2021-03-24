from django.shortcuts import render
from Employee.models import Employee
from Authentication.models import CustomUser
from django.http import JsonResponse


# Create your views here.

def add_Employee(request):
    if request.method == 'POST':
        ename = request.POST['name'],
        gender = request.POST['gender'],
        blood_group = request.POST['blood_group'],
        mobile = request.POST['mobile_no'],
        email = request.POST['email'],
        marital_status = request.POST['marital_status'],
        address = request.POST['address'],
        role = request.POST['role'],
        designation = request.POST['designation'],
        joining_date = request.POST['joining_date'],
        qualification = request.POST['qualification']
        username = request.POST['username']
        password = request.POST['retype_password']

        add = Employee(ename=ename, gender=gender, blood_group=blood_group, mobile=mobile, email=email,
                       marital_status=marital_status, address=address, role=role, designation=designation,
                       joining_date=joining_date, qualification=qualification)
        add.save()

        aid = add.id
        user = CustomUser.objects.create_user(username=username, password=password, role=role, aid=aid)
        user.save()
        return JsonResponse({'saved': 1})
    else:
        return render(request, 'Employee_template/add_employee.html')


def employee_List(request):
    return render(request, 'Employee_template/employee_list.html')
