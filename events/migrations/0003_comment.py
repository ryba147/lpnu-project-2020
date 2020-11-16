# Generated by Django 3.1.3 on 2020-11-16 23:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('logreg', '0005_auto_20201116_2346'),
        ('events', '0002_auto_20201114_2127'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.CharField(max_length=200, null=True)),
                ('pub_date', models.DateTimeField()),
                ('author', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, to='logreg.user')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
    ]
