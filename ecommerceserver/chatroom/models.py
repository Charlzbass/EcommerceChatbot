from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.TextField()

    def __str__(self):
        return self.title

class Electronics(models.Model):
    name = models.CharField(max_length=250)
    category = models.ForeignKey(Category, related_name='electronics', on_delete=models.CASCADE)
    priceMax = models.IntegerField()
    priceMin = models.IntegerField()
    priceMerchant = models.CharField(max_length=250)
    brand = models.CharField(max_length=150)
    manufacturer = models.TextField()

