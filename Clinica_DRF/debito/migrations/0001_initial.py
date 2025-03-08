# Generated by Django 5.1.6 on 2025-03-03 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DebitoModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('debito', models.IntegerField(null=True)),
                ('monto', models.IntegerField(null=True)),
                ('debito_uuid', models.TextField(max_length=250, null=True)),
                ('fecha_pago', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
