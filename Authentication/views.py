from django.shortcuts import render

# Create your views here.

def handleLogin(request):
    return render(request, 'Authentication_template/login.html')