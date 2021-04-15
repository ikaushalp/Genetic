from django.http import JsonResponse
from django.shortcuts import render
from Patient.models import Patient
from Employee.models import Employee
from Schedule.models import Schedule
from Appointment.models import Appointment


# Create your views here.
def add_appointment(request):
    if request.method == 'POST':
        patient = request.POST['patient']
        doctor = request.POST['doctor']
        appointment_date = request.POST['appointment_date']
        time_slot = request.POST['time_slot']
        fees = request.POST['fees']

        data = Employee.objects.get(pk=doctor, role=2)
        if data:
            doctor = data.ename
        check = Appointment.objects.filter(patient_id=patient, doctor=doctor, appointment_date=appointment_date)
        if check:
            return JsonResponse({'exist': 1})
        add = Appointment(patient_id=patient, doctor=doctor, appointment_date=appointment_date, time_slot=time_slot,
                          fees=fees, status='Pending')
        add.save()
        return JsonResponse({'insert': 1})
    else:
        patient_list = Patient.objects.all()
        doctor_list = Employee.objects.filter(designation='Doctor')
        context = {'patient_list': patient_list, 'doctor_list': doctor_list}
        return render(request, 'Appointment_template/add_appointment.html', context=context)


def appointment_list(request):
    appointment = Appointment.objects.filter(status='Confirmed' or 'Closed')
    return render(request, 'Appointment_template/appointment_list.html', context={'appointment_list': appointment})


def pending_appointment_list(request):
    appointment = Appointment.objects.filter(status='Pending')
    return render(request, 'Appointment_template/pending_list.html', context={'appointment_list': appointment})


def confirm_appointment(request):
    if request.method == 'POST':
        id = request.POST['appointment_id']

        Appointment.objects.filter(pk=id).update(status='Confirmed')
        return JsonResponse({'update': 1})
    else:
        return render(request, 'Dashboard_template/dashboard.html')


def loadtimeslot(request):
    if request.method == 'POST':
        doctor_id = request.POST['doctor_id']
        week_day = request.POST['weekday']
        doctor_id = int(doctor_id)

        try:
            data = Schedule.objects.get(doctor_id=doctor_id, week_day=week_day)
        except Schedule.DoesNotExist:
            data = None

        timeslot = {}
        if data is not None:
            start_time = data.start_time
            end_time = data.end_time
            fees = data.fees

            timeslot = {
                'start_time': start_time,
                'end_time': end_time,
                'fees': fees
            }
        return JsonResponse(timeslot)
    else:
        return render(request, 'Dashboard_template/dashboard.html')
