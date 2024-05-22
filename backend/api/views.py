from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from .models import GalleryImage, GalleryCategory

def get_images(request):
    if request.method == 'GET':
        category = request.GET['category']
        images_objects = GalleryImage.objects.filter(category__name=category)
        images = [image.image.url for image in images_objects]
        return JsonResponse({'images': images}, status=200)
    
def get_categories(request):
    if request.method == 'GET':
        category_objects = GalleryCategory.objects.all()
        categories = [category.name for category in category_objects]
        return JsonResponse({'categories': categories}, status=200)


def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    user = authenticate(username=username, password=password)
    if not user:
        return JsonResponse({'message': "Wrong credentials"}, status=400)
    
    login(request, user)
    return JsonResponse({'message': 'Logged in succesfully'}, status=200)


@login_required
def check_session_view(request):
    return JsonResponse({'message': 'Session is active'}, status=200)


def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Successfully logged out'}, status=200)
    return JsonResponse({'error': 'Invalid request method'}, status=405)