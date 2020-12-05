# Generated by Django 3.1.3 on 2020-12-05 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('logreg', '0009_remove_user_user_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rating',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='family_status',
            field=models.CharField(blank=True, choices=[('single', 'Single'), ('in relationship', 'In relationship'), ('married', 'Married')], max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='pets',
            field=models.CharField(blank=True, max_length=128),
        ),
        migrations.AlterField(
            model_name='user',
            name='sex',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female')], max_length=20, null=True),
        ),
    ]
