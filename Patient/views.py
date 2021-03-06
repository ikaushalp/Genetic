import json
from django.shortcuts import render, HttpResponse
from Patient.models import Patient
from django.http import JsonResponse


# Patient #
def add_patient(request):
    if request.method == "POST":

        add = Patient(
            name=request.POST.get('name'),
            gender=request.POST.get('gender'),
            birthdate=request.POST.get('birthdate'),
            age=request.POST.get('age'),
            marital_status=request.POST.get('marital_status'),
            mobile_no=request.POST.get('phone'),
            email=request.POST.get('email'),
            category=request.POST.get('category'),
            blood_group=request.POST.get('blood_group'),
            blood_pressure=request.POST.get('blood_pressure'),
            height=request.POST.get('height'),
            weight=request.POST.get('weight'),
            address=request.POST.get('address'),
            guardian_name=request.POST.get('guardian_name'),
            relationship=request.POST.get('relationship'),
            guardian_mobile_no=request.POST.get('guardian_mobile'),
        )
        add.save()
        return JsonResponse({'saved': 1})
    else:
        return render(request, 'Patient_template/add_patient.html')


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
