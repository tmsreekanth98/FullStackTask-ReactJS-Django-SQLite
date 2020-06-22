from . import views
from django.urls import path,include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'API', views.DataTableViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('API/',include('rest_framework.urls',namespace='rest_framework'))
]