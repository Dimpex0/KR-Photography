# from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from .models import GalleryImage, GalleryCategory

def get_images(request):
    if request.method == 'GET':
        category = request.GET['category']
        images_objects = GalleryImage.objects.filter(category__name=category)
        images = [{'image': image.image.url, 'id': image.pk} for image in images_objects[::-1]]
        return JsonResponse({'images': images}, status=200)
    
def get_categories(request):
    if request.method == 'GET':
        category_objects = GalleryCategory.objects.all()
        categories = [category.name for category in category_objects]
        return JsonResponse({'categories': categories}, status=200)
    
    
@login_required
def post_images_to_category(request):
    if request.method == 'POST':
        try:
            category = request.GET['category']
            category_object = GalleryCategory.objects.get(name=category)
            files = request.FILES.getlist('images')
            for file in files:
                image = GalleryImage(image=file, category=category_object)
                image.save()
                
            return JsonResponse({'message': 'Images uploaded successfully'}, status=203)
        except:
            return JsonResponse({'message': 'Server error, please contact administrator'}, status=500)
    else:
        return JsonResponse({'message': 'Invalid http method'}, status=405)
    
    
@login_required
def delete_image(request):
    if request.method == 'POST':
        image_id = request.GET['id']
        try:
            image = GalleryImage.objects.get(pk=image_id)
            image.image.delete()
            image.delete()
            return JsonResponse({'message': 'Image has been deleted'}, status=200)
        except Exception as e:
            return JsonResponse({'message': 'Server error, please contact administrator'}, status=500)
    else:
        return JsonResponse({'message': 'Invalid http method'}, status=405)

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

@login_required
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Successfully logged out'}, status=200)
    return JsonResponse({'error': 'Invalid request method'}, status=405)