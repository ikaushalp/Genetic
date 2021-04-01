from django.http import JsonResponse
from django.shortcuts import render
from Schedule.models import Schedule
from Employee.models import Employee


# Create your views here.
def add_schedule(request):
    if request.method == 'POST':
        doctor = request.POST['doctor']
        fees = request.POST['fees']
        week_day = request.POST['weekday']
        start_time = request.POST['start_time']
        end_time = request.POST['end_time']
        doctor = int(doctor)

        check = Schedule.objects.filter(doctor_id=doctor, week_day=week_day)
        if check:
            return JsonResponse({'exist': 1})
        add = Schedule(doctor_id=doctor, fees=fees, start_time=start_time, end_time=end_time, week_day=week_day)
        add.save()

    else:
        doctor_list = Employee.objects.filter(role=2)
        context = {'doctor_list': doctor_list}
        return render(request, 'Schedule_template/add_schedule.html', context=context)


def schedule_list(request):
    schedule_items = Schedule.objects.all()
    context = {'schedules': schedule_items}
    return render(request, 'Schedule_template/schedule_list.html', context=context)
