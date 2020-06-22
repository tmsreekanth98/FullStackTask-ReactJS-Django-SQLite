from rest_framework import serializers
from .models import DataTable

class DataTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataTable
        fields = '__all__'