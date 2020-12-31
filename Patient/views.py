from django.shortcuts import render
from Patient.models import Category
# Create your views here.

# Patient #
def add_Patient(request):
    return render(request, 'Patient_template/add_patient.html')

def patient_list(request):
    return render(request, 'Patient_template/patient_list.html')

def category(request):
    return render(request, 'Patient_template/category.html')

def add_category(request):
    if request.method == 'POST':
        add = Category()
        add.category_name = request.POST['category']
        add.save()
        return render('/')
    return render(request, 'Patient_template/category.html')



