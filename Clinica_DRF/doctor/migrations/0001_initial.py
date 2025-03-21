# Generated by Django 5.1.6 on 2025-03-17 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comuna_clinica', '0001_initial'),
        ('especialidad', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoctorModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor_uuid', models.CharField(max_length=250, null=True)),
                ('doctor_clinica', models.ManyToManyField(to='comuna_clinica.comunaclinicamodel')),
                ('especialidades', models.ManyToManyField(to='especialidad.especialidad')),
            ],
        ),
    ]
