from django.shortcuts import render
from Employee.models import Employee
from Authentication.models import CustomUser
from django.http import JsonResponse

# Create your views here.

def add_Employee(request):
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

        check = CustomUser.objects.get(username=username)
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


def employee_List(request):
    return render(request, 'Employee_template/employee_list.html')
