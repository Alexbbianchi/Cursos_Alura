from django.db import models

# Create your models here.

class Teacher(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False),
    hour_value = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    photo = models.URLField(max_length=255, null=False, blank=False)