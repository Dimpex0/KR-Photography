from django.urls import path
from . import views

urlpatterns = [
    path('get-images/', views.get_images),
    path('get-categories/', views.get_categories),
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('check-session/', views.check_session_view),
]