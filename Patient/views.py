import json
from django.shortcuts import render
from Patient.models import Patient
from django.http import JsonResponse, HttpResponse

# Patient #
def add_patient(request):
    if request.method == 'POST':
        name = request.POST['name']
        gender = request.POST['gender']
        birthdate = request.POST['birthdate']
        age = request.POST['age']
        marital_status = request.POST['marital_status']
        mobile_no = request.POST['phone']
        email = request.POST['email']
        category = request.POST['category']
        blood_group = request.POST['blood_group']
        blood_pressure = request.POST['blood_pressure']
        height = request.POST['height']
        weight = request.POST['weight']
        address = request.POST['address']
        guardian_name = request.POST['guardian_name']
        relationship = request.POST['relationship']
        guardian_mobile_no = request.POST['guardian_mobile']

        if not birthdate:
            birthdate = None

        if not blood_pressure:
            blood_pressure = None

        if not height:
            height = None

        if not weight:
            weight = None

        if not address:
            address = None

        add = Patient(name=name, gender=gender, birthdate=birthdate, age=age, marital_status=marital_status,
                      mobile_no=mobile_no, email=email, category=category, blood_group=blood_group,
                      blood_pressure=blood_pressure, height=height, weight=weight, address=address,
                      guardian_name=guardian_name, relationship=relationship, guardian_mobile_no=guardian_mobile_no
                      )
        add.save()
        data = {'saved': 1}
        return JsonResponse(data)
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
