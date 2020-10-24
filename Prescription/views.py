from django.shortcuts import render

# Create your views here.
def add_prescription(request):
    return render(request, 'Prescription_template/add_prescription.html')

def prescriptions_list(request):
    return render(request, 'Prescription_template/prescription_list.html')