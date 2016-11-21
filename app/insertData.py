from shoppinglist import Item, Customer, List, Custom_List

q = Custom_List(cname="Robert Cheng", lname="Cheng's List")
p = Custom_List(cname="Kim Jaehoon", lname="Jay's List")
r = Custom_List(cname="Yunbo Xie", lname="Yunbo's List")
e = Custom_List(cname="Dongxiao Li", lname="Dongxiao's List")

p.save()
q.save()
r.save()
e.save()

Custom_List.objects.all()

