from django.shortcuts import render
from Patient.models import Patient
from Schedule.models import Schedule


# Create your views here.
def add_appointment(request):
    if request.method == 'POST':
        pass
    else:
        patient_list = Patient.objects.all()
        schedule_list = Schedule.objects.all()
        context = {'patient_list': patient_list, 'schedule_list': schedule_list}
        return render(request, 'Appointment_template/add_appointment.html', context=context)


def appointment_list(request):
    return render(request, 'Appointment_template/appointment_list.html')
