from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.shortcuts import render, redirect, reverse

from Employee.models import Employee
from Patient.models import Patient


# Create your views here.

def loginpage(request):
    if request.user.is_authenticated:
        return redirect(reverse('Dashboard:dashboard'))
    return render(request, 'Authentication_template/login.html')


def handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)

            if request.user.role == 1 or request.user.role == 2 or request.user.role == 3:
                data = Employee.objects.get(pk=request.user.aid, role=request.user.role)
                request.session['name'] = data.ename
                if request.user.role == 1:
                    request.session['role'] = 'Admin'
                if request.user.role == 2:
                    request.session['role'] = 'Doctor'
                if request.user.role == 3:
                    request.session['role'] = 'Receptionist'
            else:
                data = Patient.objects.get(pk=request.user.aid)
                request.session['name'] = data.name
                request.session['role'] = 'Patient'

            return JsonResponse({'success': 1})

        else:
            return JsonResponse({'NotExist': 1})
    else:
        return render(request, 'Authentication_template/login.html')


def handlelogout(request):
    logout(request)
    return redirect(reverse('Authentication:loginpage'))
