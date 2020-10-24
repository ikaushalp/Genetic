from django.shortcuts import render

# Create your views here.

# Patient #
def add_Patient(request):
    return render(request, 'Patient_template/add_patient.html')

def patient_list(request):
    return render(request, 'Patient_template/patient_list.html')

def category(request):
    return render(request, 'Patient_template/category.html')



