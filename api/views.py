from django.shortcuts import render
from django.http import JsonResponse

def total_views(request):
    # Sample data - in a real application, this would come from your database
    data = [
        {"Area Title": "Nairobi", "Published Date": "2024-07-01", "Views Count": 12345},
        {"Area Title": "Kisumu", "Published Date": "2024-06-30", "Views Count": 67890},
        {"Area Title": "Mombasa", "Published Date": "2024-06-29", "Views Count": 23456},
        {"Area Title": "Nakuru", "Published Date": "2024-07-31", "Views Count": 23456},
    ]
    return JsonResponse(data, safe=False)
