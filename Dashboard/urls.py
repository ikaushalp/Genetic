from django.urls import path
from Dashboard import views

app_name = 'Dashboard'

urlpatterns = [
    path('/<uidb64>/<token>', views.index, name='dashboard'),
]
