from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer
#from .products import products

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes =[
        
               'api/products/',
               'api/products/id',
               'api/products/create',
               'api/products/delete',
             
             
             ]
    return Response(routes)



@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products , many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request , pk):
    product = Product.objects.get(_id =pk)
    serializer = ProductSerializer(product , many=False)
    return Response(serializer.data)
    