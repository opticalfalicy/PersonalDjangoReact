from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    link = models.URLField()
    created_on = models.CharField(max_length=100)
    preview = models.ImageField()

