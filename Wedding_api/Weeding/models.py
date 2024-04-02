from django.db import models

class Guest(models.Model):
    name = models.CharField(max_length=100)  # Имя гостя
    status = models.CharField(max_length=100, blank=True, null=True)  # Статус гостя
    alcohol = models.CharField(max_length=100, blank=True, null=True)  # Предпочтения по алкоголю
    food = models.CharField(max_length=100, blank=True, null=True)  # Предпочтения по еде

    def __str__(self):
        return self.name
