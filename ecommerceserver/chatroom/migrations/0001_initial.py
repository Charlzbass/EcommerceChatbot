# Generated by Django 3.1.7 on 2021-03-12 14:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Electronics',
            fields=[
                ('id', models.CharField(max_length=150, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=250)),
                ('priceMax', models.IntegerField()),
                ('priceMin', models.IntegerField()),
                ('priceMerchant', models.CharField(max_length=250)),
                ('brand', models.CharField(max_length=150)),
                ('manufacturer', models.TextField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='electronics', to='chatroom.category')),
            ],
        ),
    ]