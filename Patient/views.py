from django.shortcuts import render

# Create your views here.

# Patient #
def add_Patient(request):
    # context={"here": "menu-item-here", "open":"menu-item-open", "add" : "menu-item-active"}
    return render(request, 'Patient_template/add_patient.html')

def patient_list(request):

    return render(request, 'Patient_template/view.html')

def category(request):
    
    return render(request, 'Patient_template/category.html')



