from django.shortcuts import render

# Create your views here.

# Patient #
def add_Patient(request):
    return render(request, 'Patient_template/add_patient.html')

def category(request):
    return render(request, 'Patient_template/category.html')

# Appoinment #
def appointment(request):
    return render(request, 'Patient_template/appointment.html')