from django.db import models

class GalleryCategory(models.Model):
    name = models.CharField(
        max_length=255,
        unique=True,
        null=False,
    )
    
class GalleryImage(models.Model):
    category = models.ForeignKey(
        GalleryCategory,
        on_delete=models.SET_NULL,
        null=True,
    )
    image = models.ImageField(
        upload_to='gallery_images',
        null=False,
    )
    