# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoppinglist', '0003_auto_20161121_2047'),
    ]

    operations = [
        migrations.CreateModel(
            name='List_Item',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('item_id', models.ForeignKey(to='shoppinglist.Item')),
            ],
        ),
        migrations.RemoveField(
            model_name='list',
            name='item',
        ),
        migrations.AddField(
            model_name='list_item',
            name='listname',
            field=models.ForeignKey(to='shoppinglist.List'),
        ),
    ]
