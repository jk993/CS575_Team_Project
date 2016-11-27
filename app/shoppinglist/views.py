import json
from django import forms
from django.http import HttpResponse
from django.http import Http404
from shoppinglist.models import Item, Customer, List, Custom_List, List_Item

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

def cust_lst_detail(request, id):
	try:
		body_unicode = request.body.decode('utf-8')
		cust_lst_data = json.loads(body_unicode)
		cname = cust_lst_data["cname"]
		lname = cust_lst_data["lname"]
		cust_lst = Custom_List.objects.get(cname=cname, lname=lname)
	except Custom_List.DoesNotExist:
		raise Http404("This cust_lst does not exist") 
	return HttpResponse({"Custom_List": cust_lst_data})

def lst_item_detail(request):
	try:
		body_unicode = request.body.decode('utf-8')
		list_item_data = json.loads(body_unicode)
		listname = list_item_data["listname"]
		item_id = list_item_data["item_id"]
		list_item = List_Item.objects.get(listname=listname, item_id=item_id)
	except List_Item.DoesNotExist:
		raise Http404("This lst_item does not exist") 
	return HttpResponse({"List_Item": list_item_data})

def item_del(request, id):
	try:
		item = Item.objects.get(item_id=id)
		Item.objects.filter(item_id=id).delete()
	except Item.DoesNotExist:
		return HttpResponse(content="item to delete doesn't exist", status=302)

def customer_del(request, id):
	try:
		customer = Customer.objects.get(name=id)
		Customer.objects.filter(name=id).delete()
	except Customer.DoesNotExist:
		return HttpResponse(content="customer to delete doesn't exist", status=302)

def list_del(request, id):
	try:
		list_ = List.objects.get(listname=id)
		List.objects.filter(listname=id).delete()
	except List.DoesNotExist:
		return HttpResponse(content="list to delete doesn't exist", status=302)

def cust_lst_del(request):
	try:
		body_unicode = request.body.decode('utf-8')
		cust_lst_data = json.loads(body_unicode)
		cname = cust_lst_data["cname"]
		lname = cust_lst_data["lname"]
		Custom_List.objects.filter(cname=cname, lname=lname).delete()
	except Custom_List.DoesNotExist:
		raise HttpResponse(content="cust_lst to delete doesn't exist", status=302)

def lst_item_del(request):
	try:
		body_unicode = request.body.decode('utf-8')
		list_item_data = json.loads(body_unicode)
		listname = list_item_data["listname"]
		item_id = list_item_data["item_id"]
		List_Item.objects.filter(listname=listname, item_id=item_id).delete()
	except List_Item.DoesNotExist:
		raise HttpResponse(content="lst_item to delete doesn't exist", status=302)
	

def item_add(request):
	try:
		body_unicode = request.body.decode('utf-8')
		item_data = json.loads(body_unicode)
		item_id = item_data["item_id"]
		name = item_data["name"]
		taken = item_data["taken"]
		item = Item(item_id=item_id, name=name, taken=taken)
		item.save()
	except:
		return HttpResponse(content="adding item failed", status=302)

def customer_add(request):
	try:
		body_unicode = request.body.decode('utf-8')
		cust_data = json.loads(body_unicode)
		name = cust_data["name"]
		cust = Customer(name=name)
		cust.save()
	except:
		return HttpResponse(content="adding customer failed", status=302)

def list_add(request):
	try:
		body_unicode = request.body.decode('utf-8')
		list_data = json.loads(body_unicode)
		listname = list_data["listname"]
		lst  = List(listname=listname)
		lst.save()
	except:
		return HttpResponse(content="adding list failed", status=302)

def cust_lst_add(request):
	try:
		body_unicode = request.body.decode('utf-8')
		cust_list_data = json.loads(body_unicode)
		cname = cust_list_data["cname"]
		lname = cust_list_data["lname"]
		cust_lst = Custom_List(cname=cname, lname=lname)
		cust_lst.save()
	except:
		return HttpResponse(content="adding cust_lst failed", status=302)

def lst_item_add(request):
	try:
		body_unicode = request.body.decode('utf-8')
		lst_item_data = json.loads(body_unicode)
		listname = lst_item_data["listname"]
		item_id  = lst_item_data["item_id"]
		lst_item = List_Item(listname=listname, item_id=item_id)
		lst_item.save()
	except:
		return HttpResponse(content="adding lst_item failed", status=302)

