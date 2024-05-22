from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.get_images),
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('check-session/', views.check_session_view),
]