from django.contrib import admin

from .models import Item, List, Customer, Custom_List

class ItemAdmin(admin.ModelAdmin):
	list_display = ['item_id', 'name', 'taken']

class CustAdmin(admin.ModelAdmin):
	list_display = ['name']

class ListAdmin(admin.ModelAdmin):
	list_display = ['listname', 'item']

class Custom_List_Admin(admin.ModelAdmin):
	list_display = ['cname', 'lname']

admin.site.register(Item, ItemAdmin)
admin.site.register(List, ListAdmin)
admin.site.register(Customer, CustAdmin)
admin.site.register(Custom_List, Custom_List_Admin)


