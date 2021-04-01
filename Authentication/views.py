from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect, reverse
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def loginpage(request):
    if request.user.is_authenticated:
        return redirect(reverse('Dashboard:dashboard'))
    return render(request, 'Authentication_template/login.html')


def handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': 1})
        else:
            return JsonResponse({'NotExist': 1})
    else:
        return render(request, 'Authentication_template/login.html')


def handlelogout(request):
    logout(request)
    return redirect(reverse('Authentication:loginpage'))
