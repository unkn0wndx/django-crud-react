from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=200)
    color = models.CharField(max_length=200, blank=True)


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
