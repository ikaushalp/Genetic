from django.shortcuts import render
from Settings.models import Global


# Create your views here.


def global_settings(request):
    if request.method == 'POST':
        hospital = request.POST['name']
        visible = request.POST['visible']
        contact = request.POST['visible']
        email = request.POST['email']
        address = request.POST['address']
        link1 = request.POST['link1']
        link2 = request.POST['link2']
        link3 = request.POST['link3']

        add = Global(hospital=hospital, visible=visible, contact=contact, email=email, address=address, link1=link1,
                     link2=link2, link3=link3)
        add.save()
    return render(request, 'Settings_template/global_settings.html')


def profile(request):
    return render(request, 'Settings_template/profile.html')
