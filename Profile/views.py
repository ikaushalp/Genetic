from django.http import request
from django.shortcuts import render

# Create your views here.

def personal_info(request):
    return render(request, "Profile_template/personal_information.html")
    
def acc_info(request):
    return render(request, "Profile_template/account_information.html")
    
def change_password(request):
    return render(request, "Profile_template/change_password.html")
