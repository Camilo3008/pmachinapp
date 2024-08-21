from rest_framework.permissions import BasePermission



class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.user.fk_rol.nombre == 'administrador':    
            return True
        else:
            return request.user.is_staff
        