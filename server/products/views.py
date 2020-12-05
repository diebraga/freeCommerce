from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from products.models import Product
from products.serializers import ProductSerializer


class ProductListView(ListAPIView):
    # Retrieve all products 
    queryset = Product.objects.order_by('-date_created')
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class ProductFeaturedView(ListAPIView):
    # Retrieve featured product
    queryset = Product.objects.all().filter(featured=True)
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class ProductCategoryView(APIView):
    # Retrieve product by category.
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny, )

    def product(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = Product.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = ProductSerializer(queryset, many=True)

        return Response(serializer.data)
