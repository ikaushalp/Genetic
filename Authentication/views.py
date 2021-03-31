from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


# Create your views here.

def loginpage(request):
    if request.user.is_authenticated:
        return render(request, 'Dashboard_template/dashboard.html')
    return render(request, 'Authentication_template/login.html')


def handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponse("got it")
        else:
            return JsonResponse({'NotExist': 1})
    else:
        return render(request, 'Authentication_template/login.html')
