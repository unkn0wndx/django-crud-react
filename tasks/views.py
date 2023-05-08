from rest_framework import viewsets
from .serializer import TaskSerializer, CategorySerializer
from .models import Task, Category
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()