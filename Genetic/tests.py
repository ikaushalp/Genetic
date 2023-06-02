import unittest
import datetime
from Settings.models import Global
from Employee.models import Employee
from Authentication.models import CustomUser
from Patient.models import Patient, Category
from dotenv import load_dotenv
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(os.path.join(BASE_DIR, '.env'))


# Create your tests here.
# Execute Test.py file in windows : manage.py test Genetic.tests.MainTestCase.MainCase
# Execute Test.py file in linux   : ./manage.py test Genetic.tests.MainTestCase.MainCase

class MainTestCase(unittest.TestCase):
    def MainCase(self):
        current_date = datetime.date.today()
        print('Creating Admin Account....')

        Employee.objects.create(name='John Doe', gender='Male', blood_group='A+', birthdate='2002-05-02',
                                mobile_no="+918160521030", email=str(os.getenv('EMAIL')), marital_status='Single',
                                address='Golden Height,Andheri(West)', role=1, designation='Admin',
                                joining_date=current_date)

        add = CustomUser.objects.create_user(username=str(os.getenv('PROJECT_USERNAME')), password=str(os.getenv('PASSWORD')), email=str(os.getenv('EMAIL')), role=1,
                                             aid=1)
        add.save()

        Global.objects.create(hospital="Genetic Hospital", visible="Genetic", contact="+919534587463",
                              email="contact@genetic.com",
                              address="Enter your address..", facebook="https://facebook.com",
                              link1="https://aboutus.com",
                              link2="https://teams.com", link3="https://contactus.com")
