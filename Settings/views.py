from django.shortcuts import render

# Create your views here.


def global_Settings(request):
    return render(request, 'Settings_template/global_settings.html')

def profile(request):
    return render(request, 'Settings_template/profile.html')