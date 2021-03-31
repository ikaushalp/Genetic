from django.shortcuts import render
from Patient.models import Patient
from Authentication.models import CustomUser
# Create your views here.


def index(request):
    patient = Patient.objects.count()
    user = CustomUser.objects.count()
    context = {'patient': patient, 'user': user}
    return render(request, 'Dashboard_template/dashboard.html', context=context)

def user_panel(request):
    patient = Patient.objects.count()
    context = {'patient': patient}
    return render(request, 'user_panel.html', context=context)
