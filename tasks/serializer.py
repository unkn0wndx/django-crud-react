from rest_framework import serializers
from .models import Task, Category


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id','title', 'description', 'done')
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        # fields = ('id','title', 'description', 'done')
        fields = '__all__'