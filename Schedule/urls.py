from django.urls import path
from Schedule import views

app_name = 'Schedule'

urlpatterns = [
    path('add', views.add_schedule, name='add'),
    path('view', views.schedule_list, name='view'),
]