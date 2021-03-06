# Generated by Django 3.0.7 on 2020-12-05 19:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('t-shirts', 'Tshirts'), ('shoes', 'Shoes'), ('accessories', 'Accessories'), ('jeans', 'Jeans')], default='t-shirts', max_length=50)),
                ('image_source', models.CharField(max_length=150)),
                ('descrption', models.CharField(max_length=150)),
                ('price_id', models.CharField(max_length=40)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
