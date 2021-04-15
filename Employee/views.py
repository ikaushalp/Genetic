from django.shortcuts import render, redirect
from Employee.models import Employee
from Authentication.models import CustomUser
from django.http import JsonResponse


# Create your views here.

def add_employee(request):
    if request.method == 'POST':
        ename = request.POST['name']
        gender = request.POST['gender']
        birthdate = request.POST['birthdate']
        blood_group = request.POST['blood_group']
        marital_status = request.POST['marital_status']
        mobile = request.POST['mobile_no']
        email = request.POST['email']
        address = request.POST['address']
        username = request.POST['username']
        password = request.POST['retype_password']
        role = request.POST['role']
        designation = request.POST['designation']
        joining_date = request.POST['joining_date']
        qualification = request.POST['qualification']

        if not birthdate:
            birthdate = None

        if role == 'Admin':
            role = 1

        if role == 'Doctor':
            role = 2

        if role == 'Receptionist':
            role = 3

        check = CustomUser.objects.filter(username=username)
        if check:
            return JsonResponse({'exist': 1})

        add = Employee(ename=ename, gender=gender, birthdate=birthdate, blood_group=blood_group, mobile=mobile,
                       email=email,
                       marital_status=marital_status, address=address, role=role, designation=designation,
                       joining_date=joining_date, qualification=qualification)
        add.save()

        aid = add.id
        user = CustomUser.objects.create_user(username=username, password=password, role=role, aid=aid)
        user.save()
        return JsonResponse({'insert': 1})
    else:
        return render(request, 'Employee_template/add_employee.html')


def employee_list(request):
    admin = Employee.objects.filter(designation='Admin')
    doctor = Employee.objects.filter(designation='Doctor')
    receptionist = Employee.objects.filter(designation='Receptionist')
    context = {'admin': admin, 'doctor': doctor, 'receptionist': receptionist}
    return render(request, 'Employee_template/employee_list.html', context=context)


def delete_employee(request):
    if request.method == 'POST':
        employee_id = request.POST['employee_id']
        employee_role = request.POST['role']
        employee_role = int(employee_role)

        rem = Employee.objects.get(pk=employee_id)
        rem2 = CustomUser.objects.get(aid=employee_id, role=employee_role)
        rem.delete()
        rem2.delete()
        return JsonResponse({'delete': 1})
    else:
        return redirect('/dashboard')
