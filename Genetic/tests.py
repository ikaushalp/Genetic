import unittest
import datetime
from Settings.models import Global
from Employee.models import Employee
from Authentication.models import CustomUser


# Create your tests here.
# Execute Test.py file in windows : manage.py test Genetic.tests.MainTestCase.MainCase
# Execute Test.py file in linux   : ./manage.py test Genetic.tests.MainTestCase.MainCase

class MainTestCase(unittest.TestCase):
    def MainCase(self):
        current_date = datetime.date.today()
        adm = Employee(ename="John Doe", gender="Male", role=1, designation="Admin", joining_date=current_date)
        adm.save()

        auth = CustomUser.objects.create_user(username="admin", password="admin123", email="admin@admin.com", role=1,
                                              aid=1)
        auth.save()

        add = Global(hospital="Genetic Hospital", visible="Genetic", contact="+91 9534587463", email="admin@admin.com",
                     facebook="https://facebook.com/", address="Enter your address..")
        add.save()
