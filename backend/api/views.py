from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from .models import GalleryImage

def get_images(request):
    if request.method == 'GET':
        category = request.GET['category']
        images_objects = GalleryImage.objects.filter(category__name=category)
        images = [image.image.url for image in images_objects]
        return JsonResponse({'images': images})


@csrf_exempt
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    user = authenticate(username=username, password=password)
    if not user:
        return JsonResponse({'message': "Wrong credentials"}, status=400)
    
    login(request, user)
    return JsonResponse({'message': 'Logged in succesfully'}, status=200)