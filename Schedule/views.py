from django.shortcuts import render

# Create your views here.
def add_schedule(request):
    return render(request, 'Schedule_template/add_schedule.html')

def schedule_list(request):
    return render(request, 'Schedule_template/schedule_list.html')


