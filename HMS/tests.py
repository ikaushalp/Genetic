import unittest
from Settings.models import Global


# Create your tests here.

class MainTestCase(unittest.TestCase):
    def MainCase(self):
        add = Global(hospital="Genetic Hospital", visible="HMS", contact="+91 9534587463", email="admin@admin.com",
                     address="Enter your address..")
        add.save()
