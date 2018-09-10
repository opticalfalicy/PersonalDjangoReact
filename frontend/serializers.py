from rest_framework import serializers
from frontend.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', "name", "description", "link", "created_on", "preview")