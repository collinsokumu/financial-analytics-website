from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm, LoginForm

def home_view(request):
    return render(request, 'base.html')

def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/dashboard')  # Redirect to login after successful sign-up
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)
            return redirect('/dashboard')  # Redirect to a home or dashboard view after successful login
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})
