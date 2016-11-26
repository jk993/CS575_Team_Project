from django.http import HttpResponse
from django.http import Http404
from shoppinglist.models import Item, Customer, List, Custom_List

def index(request):
        return HttpResponse("<p>In Index View</p>")

def item_detail(request, id):
	try:
		item = Item.objects.get(item_id=id) 
	except Item.DoesNotExist:
		raise Http404("This item does not exist") 
	return  HttpResponse({"Item":item})

def customer_detail(request, id):
	try:
		customer = Customer.objects.get(name=id)
	except Customer.DoesNotExist:
		raise Http404("This customer does not exist") 
	return HttpResponse({"Customer": customer})

def list_detail(request, id):
	try:
		list_ = List.objects.get(listname=id)
	except List.DoesNotExist:
		raise Http404("This list does not exist") 
	return HttpResponse({"List": list_})

