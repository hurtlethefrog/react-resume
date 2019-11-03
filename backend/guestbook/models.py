from django.db import models

class Signatures(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=100, blank=True)
    comments = models.CharField(max_length=250)