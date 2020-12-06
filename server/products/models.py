from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Categories(models.TextChoices):
        # Categories
        TSHIRTS = 't-shirts'
        SHOES = 'shoes'
        ACCESSORIES = 'accessories'
        JEANS = 'jeans'


class Product(models.Model):
    # Model fields create products.
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.TSHIRTS)
    image_source = models.CharField(max_length=150, blank=False)
    descrption = models.CharField(max_length=150, blank=False)
    # Price_id create on stripe dashboard
    price_id = models.CharField(max_length=40)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        # Func creates unique id in case same title.
        original_slug = slugify(self.title)
        queryset = Product.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Product.objects.all().filter(slug__iexact=slug).count()
        
        self.slug = slug
            
        if self.featured:
            try:
                temp = Product.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except Product.DoesNotExist:
                pass
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
