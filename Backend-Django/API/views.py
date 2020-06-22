from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DataTableSerializer
from .models import DataTable
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
class DataTableViewSet(viewsets.ModelViewSet):
    queryset = DataTable.objects.all().order_by('Name')
    serializer_class = DataTableSerializer
