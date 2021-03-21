from django.shortcuts import redirect, render, HttpResponse
from Authentication.models import CustomUser
from django.contrib.auth import authenticate, login


# Create your views here.
def register(request):
    if request.method == 'POST':
        d = CustomUser.objects.create_user(username=request.POST['username'], password=request.POST['password'])
        d.save()

        return redirect('/')


def login_handle(request):
    if request.POST:
        username = request.POST['user']
        password = request.POST['pass']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return render(request, "Dashboard_template/dashboard.html")
        else:
            return HttpResponse("")

    return render(request, 'Authentication_template/login.html')


def handleLogin(request):
    return render(request, 'Authentication_template/login.html')
