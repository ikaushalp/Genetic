from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from Patient.models import Patient
from Employee.models import Employee
from Settings.models import Global

# Create your views here.

def index(request):
    patient = Patient.objects.count()
    employee = Employee.objects.count()
    doctor = Employee.objects.filter(designation='Doctor').count()

    global_list = Global.objects.get(id=1)
    request.session['h_name'] = global_list.hospital
    request.session['v_name'] = global_list.visible
    request.session['link1'] = global_list.link1
    request.session['link2'] = global_list.link2
    request.session['link3'] = global_list.link3

    context = {'patient': patient, 'employee': employee, 'doctor': doctor}
    return render(request, 'Dashboard_template/dashboard.html', context=context)
