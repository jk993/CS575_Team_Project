from django.http import HttpResponse
from django.shortcuts import render

def index(request):
        return HttpResponse("<p>In Index View</p>")

def item_detail(request, id):
	return HttpResponse('<p>In item_detail view with id {0}</p>'.format(id))

def customer_detail(request, id):
	return HttpResponse('<p>In customer_detail view with id {0}</p>'.format(id))

def list_detail(request, id):
	return HttpResponse('<p>In list_detail view with id {0}</p>'.format(id))
