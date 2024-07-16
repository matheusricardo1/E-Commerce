from django.urls import path
from .views import TestView

app_name = 'api'

urlpatterns = [
    path('', TestView.as_view()),
]
