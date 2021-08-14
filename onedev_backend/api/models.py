from django.db import models


class Newsletter(models.Model):
  email = models.EmailField(max_length=50)


class CV(models.Model):
  cv = models.FileField(upload_to="api/static/api/cv")
