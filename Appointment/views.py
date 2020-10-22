from django.shortcuts import render

# Create your views here.
def add_appointment(request):
    return render(request, 'Appointment_template/add_appointment.html')

