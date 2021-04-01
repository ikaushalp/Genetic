from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from Patient.models import Patient
from Employee.models import Employee


# Create your views here.

def index(request):
    patient = Patient.objects.count()
    employee = Employee.objects.count()
    context = {'patient': patient, 'employee': employee}
    return render(request, 'Dashboard_template/dashboard.html', context=context)


def user_panel(request):
    patient = Patient.objects.count()
    context = {'patient': patient}
    return render(request, 'user_panel.html', context=context)
