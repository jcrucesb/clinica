# Generated by Django 5.1.6 on 2025-03-17 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DireccionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.TextField(max_length=250, null=True)),
                ('comuna', models.TextField(max_length=250, null=True)),
                ('vivienda', models.TextField(max_length=250, null=True)),
                ('num_vivienda', models.TextField(max_length=250, null=True)),
            ],
        ),
    ]
