from rest_framework.routers import DefaultRouter

from apps.areas.api.view import AreaviewSet

router_areas = DefaultRouter()
router_areas.register(prefix="areas", basename="areas", viewset=AreaviewSet)