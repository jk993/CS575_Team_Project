from django.conf.urls import include, url
from django.contrib import admin

from shoppinglist import views

urlpatterns = [
            url(r'^$', views.index, name='index'),
            url(r'^item/get/(?P<id>\d+)/', views.item_detail, name='item_detail'),
            url(r'^list/get/(?P<id>.*)/', views.list_detail, name='list_detail'),
            url(r'^customer/get/(?P<id>.*)/', views.customer_detail, name='customer_detail'),
            url(r'^cust_lst/get/(?P<id>.*)/', views.cust_lst_detail, name='cust_lst_detail'),
            url(r'^lst_item/get/(?P<id>.*)/', views.lst_item_detail, name='lst_item_detail'),
            url(r'^item/add/(?P<id>\d+)/', views.item_add, name='item_add'),
            url(r'^list/add/(?P<id>.*)/', views.list_add, name='list_add'),
            url(r'^customer/add/(?P<id>.*)/', views.customer_add, name='customer_add'),
            url(r'^cust_lst/add/(?P<id>.*)/', views.cust_lst_add, name='cust_lst_add'),
            url(r'^lst_item/add/(?P<id>.*)/', views.lst_item_add, name='lst_item_add'),
            url(r'^item/delete/(?P<id>\d+)/', views.item_del, name='item_del'),
            url(r'^list/delete/(?P<id>.*)/', views.list_del, name='list_del'),
            url(r'^customer/delete/(?P<id>.*)/', views.customer_del, name='customer_del'),
            url(r'^cust_lst/delete/(?P<id>.*)/', views.cust_lst_del, name='cust_lst_del'),
            url(r'^lst_item/delete/(?P<id>.*)/', views.lst_item_del, name='lst_item_del'),
            url(r'^admin/', include(admin.site.urls)),
    	]
