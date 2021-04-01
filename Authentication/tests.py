import unittest
# from django.test import TestCase
from Authentication.models import CustomUser
from Employee.models import Employee
from Patient.models import Category


# Create your tests here.

class UserAddTestCase(unittest.TestCase):
    def UserCreate(self):
        print("Got It!!")
