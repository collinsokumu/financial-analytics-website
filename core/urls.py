from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('dashboard/', include("dashboard.urls")),
    path('', include("app.urls")),  # Main app URL patterns
    path('accounts/', include('myapp.urls')),  # Ensure this includes your signup and login URLs
]
