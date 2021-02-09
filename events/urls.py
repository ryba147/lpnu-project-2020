from django.urls import path
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('events/', views.EventView.as_view()),
    path('events/<int:event_id>/', views.EventView.as_view()),
    path('events/search/', views.search),
    path('events/filterby/', views.filter_events),  # filterby/from?=..&to=..
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
