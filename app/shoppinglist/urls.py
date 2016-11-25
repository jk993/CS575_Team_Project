from django.conf.urls import include, url
from django.contrib import admin

from shoppinglist import views

urlpatterns = [
            url(r'^$', views.index, name='index'),
            url(r'^item/(?P<id>\d+)/', views.item_detail, name='item_detail'),
            url(r'^list/(?P<id>\d+)/', views.list_detail, name='list_detail'),
            url(r'^customer/(?P<id>\d+)/', views.customer_detail, name='customer_detail'),
            url(r'^admin/', include(admin.site.urls)),
    	]
