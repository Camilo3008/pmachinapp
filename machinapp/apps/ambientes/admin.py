from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from apps.ambientes.models import Ambientes


admin.site.register(Ambientes)