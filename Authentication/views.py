from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import BadHeaderError, EmailMultiAlternatives
from django.http import JsonResponse
from django.shortcuts import render, redirect, reverse
from django.template.loader import get_template
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from Authentication.models import CustomUser
from Employee.models import Employee
from Patient.models import Patient
from Settings.models import Global


# Create your views here.

def loginpage(request):
    if request.user.is_authenticated:
        return redirect(reverse('Dashboard:dashboard'))
    else:
        data = Global.objects.get(pk=1)
        context = {'data': data}
        return render(request, 'Authentication_template/login.html', context=context)


def handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)

            if request.user.role == 1 or request.user.role == 2 or request.user.role == 3:
                data = Employee.objects.get(pk=request.user.aid, role=request.user.role)
                request.session['name'] = data.ename
                if request.user.role == 1:
                    request.session['role'] = 'Admin'
                if request.user.role == 2:
                    request.session['role'] = 'Doctor'
                if request.user.role == 3:
                    request.session['role'] = 'Receptionist'
            else:
                data = Patient.objects.get(pk=request.user.aid)
                request.session['name'] = data.name
                request.session['role'] = 'Patient'

            return JsonResponse({'success': 1})

        else:
            return JsonResponse({'NotExist': 1})
    else:
        data = Global.objects.get(pk=1)
        context = {'data': data}
        return render(request, 'Authentication_template/login.html', context=context)


def handlelogout(request):
    logout(request)
    return redirect(reverse('Authentication:loginpage'))


def password_reset(request):
    if request.method == "POST":
        email = request.POST['email']

        email = CustomUser.objects.filter(email=email)

        if email.exists():
            for user in email:
                subject = "Password Reset Requested"
                plaintext = get_template("Authentication_template/password_reset_email.txt")
                htmltemp = get_template("Authentication_template/password_email_template.html")
                site = Global.objects.get(pk=1)
                c = {
                    "email": user.email,
                    'domain': '127.0.0.1:8000',
                    'site_name': site.visible,
                    'site_full_name': site.hospital,
                    'site_email': "admin@genetic.com",
                    'user_name': user,
                    'site_address': site.address,
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "user": user,
                    'token': default_token_generator.make_token(user),
                    'protocol': 'http',
                }
                text_content = plaintext.render(c)
                html_content = htmltemp.render(c)
                try:
                    msg = EmailMultiAlternatives(subject, text_content, 'Website <a@a.com>', [user.email],
                                                 headers={'Reply-To': 'admin@example.com'})
                    msg.attach_alternative(html_content, "text/html")
                    msg.send()
                    return JsonResponse({'sent': 1})
                except BadHeaderError:
                    return JsonResponse({'failed': 1})
        else:
            return JsonResponse({'notexist': 1})
    else:
        return render(request, 'Authentication_template/login.html')
