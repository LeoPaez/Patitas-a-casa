# Generated by Django 4.1.6 on 2023-02-05 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('kind', models.CharField(max_length=30)),
                ('gender', models.CharField(max_length=6)),
                ('size', models.CharField(max_length=6)),
                ('contact', models.CharField(max_length=126)),
                ('description', models.TextField()),
                ('img', models.ImageField(upload_to='pets')),
                ('found', models.BooleanField(default=False)),
            ],
        ),
    ]