from django.urls import path
from products.views import ProductListView, ProductFeaturedView, ProductCategoryView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('featured', ProductFeaturedView.as_view()),
    path('category', ProductCategoryView.as_view()),
]
