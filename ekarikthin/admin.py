from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.events)
admin.site.register(models.contacts)
admin.site.register(models.registeredUsers)
admin.site.register(models.payment)
