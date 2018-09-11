from django.shortcuts import render
from projects.models import Project
from projects.serializers import ProjectSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
