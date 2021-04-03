import json
from django.http import HttpResponse
from django.shortcuts import render
from Patient.models import Patient
from Employee.models import Employee
from Schedule.models import Schedule


# Create your views here.
def add_appointment(request):
    if request.method == 'POST':
        pass
    else:
        patient_list = Patient.objects.all()
        doctor_list = Employee.objects.filter(role=2)
        context = {'patient_list': patient_list, 'doctor_list': doctor_list}
        return render(request, 'Appointment_template/add_appointment.html', context=context)


def appointment_list(request):
    return render(request, 'Appointment_template/appointment_list.html')


def loadtimeslot(request):
    if request.method == 'POST':
        doctor_id = request.POST['doctor_id']
        week_day = request.POST['weekday']

        try:
            data = Schedule.objects.get(doctor_id=doctor_id, week_day=week_day)
        except Schedule.DoesNotExist:
            data = None

        timeslot = {}
        if data is not None:
            timeslot = {
                'start_time': data.start_time,
                'end_time': data.end_time,
                'fees': data.fees
            }
        timeslot = json.dumps(timeslot, default=str)
        return HttpResponse(timeslot)
    else:
        return render(request, 'Dashboard_template/dashboard.html')
