from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.get_images),
    path('login/', views.login_view)
]