from django.shortcuts import render, redirect
from django.http import HttpResponse
from Patient.models import Patient
from Employee.models import Employee
from Authentication.models import CustomUser


# Create your views here.
def personal_info(request):
    if request.user.role == 1 or request.user.role == 2 or request.user.role == 3:
        employee = Employee.objects.get(pk=request.user.aid)
        context = {'personal': employee}
        return render(request, "Profile_template/employee_personal_information.html", context=context)
    else:
        patient = Patient.objects.get(pk=request.user.aid)
        context = {'personal': patient}
        return render(request, "Profile_template/patient_personal_information.html", context=context)


def acc_info(request):
    if request.user.role == 1 or request.user.role == 2 or request.user.role == 3:
        employee = Employee.objects.get(pk=request.user.aid)
        acc_details = CustomUser.objects.get(pk=request.user.id)
        context = {'personal': employee, 'account': acc_details}
        return render(request, "Profile_template/account_information.html", context=context)
    else:
        patient = Patient.objects.get(pk=request.user.aid)
        acc_details = CustomUser.objects.get(pk=request.user.id)
        context = {'personal': patient, 'account': acc_details}
        return render(request, "Profile_template/account_information.html", context=context)


def change_password(request):
    if request.user.role == 1 or request.user.role == 2 or request.user.role == 3:
        employee = Employee.objects.get(pk=request.user.aid)
        acc_details = CustomUser.objects.get(pk=request.user.id)
        context = {'personal': employee, 'account': acc_details}
        return render(request, "Profile_template/change_password.html", context)

    else:
        patient = Patient.objects.get(pk=request.user.aid)
        acc_details = CustomUser.objects.get(pk=request.user.id)
        context = {'personal': patient, 'account': acc_details}
        return render(request, "Profile_template/change_password.html", context)
