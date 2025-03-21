# Generated by Django 5.1.6 on 2025-03-17 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ComunaClinicaModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_clinica', models.TextField(blank=True, max_length=250, null=True)),
                ('comuna_clinica', models.TextField(blank=True, max_length=250, null=True)),
                ('direccion_clinica', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
