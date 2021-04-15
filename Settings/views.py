from django.http import JsonResponse
from django.shortcuts import render
from Settings.models import Global


# Create your views here.


def global_settings(request):
    if request.method == 'POST':
        hospital = request.POST['hospital_name']
        visible = request.POST['visible']
        contact = request.POST['contact']
        email = request.POST['email']
        address = request.POST['address']
        link1 = request.POST['link1']
        link2 = request.POST['link2']
        link3 = request.POST['link3']

        Global.objects.filter(pk=1).update(hospital=hospital, visible=visible, contact=contact, email=email,
                                        address=address, link1=link1, link2=link2, link3=link3)
        request.session['h_name'] = hospital
        request.session['v_name'] = visible
        request.session['link1'] = link1
        request.session['link2'] = link2
        request.session['link3'] = link3
        return JsonResponse({'update': 1})
    else:
        global_list = Global.objects.get(id=1)
        context = {'main_list': global_list}
        return render(request, 'Settings_template/global_settings.html', context=context)


def profile(request):
    return render(request, 'Settings_template/profile.html')
