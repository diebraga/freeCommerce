from django.db import models
from datetime import datetime


class Contact(models.Model):
    # Model creation contact us.
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)
    message = models.TextField(max_length=300)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email