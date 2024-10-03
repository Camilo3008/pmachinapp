from django.contrib import admin

# Register your models here.

from apps.variables.models import Variable

admin.site.register(Variable)