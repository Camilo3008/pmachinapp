from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from apps.user.models import User



class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {"fields": ('username','password'),}),
        ('personal info', {'fields': ('first_name', 'last_name','email')}),
        ('permission', {'fields':('is_active','is_staff','is_superuser','groups','user_permissions')}),
        ('Important dates',{'fields':('last_login','date_joined')}),
    )
    
    list_display = [
        'username', 'last_name', 'tipo_documento', 'email'
    ]
    
admin.site.register(User, UserAdmin)