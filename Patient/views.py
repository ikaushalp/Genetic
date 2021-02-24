from django.shortcuts import render,HttpResponse
from Patient.models import Patient
from django.http import JsonResponse
from django.views.generic import TemplateView

# Patient #
def index(request):
    return render(request, "Patient_template/add_patient.html")

def add_Patient(request):
    if request.method == 'POST':

        add = Patient(
            name=request.POST['name'],
            gender=request.POST['gender'],
            birthdate=request.POST['birthdate'],
            age=request.POST['age'],
            marital_status=request.POST['marital_status'],
            mobile_no=request.POST['phone'],
            email=request.POST['email'],
            category=request.POST['category'],
            blood_group=request.POST['blood_group'],
            blood_pressure=request.POST['blood_pressure'],
            height=request.POST['height'],
            weight=request.POST['weight'],
            address=request.POST['address'],
            guardian_name=request.POST['guardian_name'],
            relationship=request.POST['relationship'],
            guardian_mobile_no=request.POST['guardian_mobile'],
        )
        add.save()
    return JsonResponse('')



def delete_patient(request):
    if request.method == 'POST':
        id = request.POST['pid']
        rem = Patient.objects.get(id=id)
        rem.delete()
    return JsonResponse({'deleted': 1})


def patient_list(request):
    list = Patient.objects.all()
    context = {'all_patient': list}
    return render(request, 'Patient_template/patient_list.html', context)


def category(request):
    return render(request, 'Patient_template/category.html')
