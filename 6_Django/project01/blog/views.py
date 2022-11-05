from django.http.response import HttpResponse
from django.shortcuts import render,redirect
from .models import Post
from django.contrib.auth.models import User,auth
from django.contrib import messages
# from django.http import HttpResponse
# Create your views here.


def hello(request):
    return HttpResponse('<h1>Hello World</h1>')

def data_dict(request):
    # tags = ['waterfall','nature','rain','fog']
    #Query data from model
    posts = Post.objects.all()
    return render(request, 'index.html', {
        'name': 'the best of article',
        'auther': 'YedHee',
        'tags' : ['waterfall','nature','rain','fog'],
        'rating' : 3,
        'posts' : posts
    })

def sign_in(request):
    return render(request,'sign_in.html')

def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = auth.authenticate(username=username, password=password)
    if user:
        auth.login(request, user)
        return redirect('/')
    else:
        messages.info(request, 'Username not correct')
        return redirect('/sign_in')

def logout(request):
    auth.logout(request)
    return redirect('/')

def sign_up(request):
    return render(request, 'sign_up.html')

def add_user(request):
    username = request.POST['username']
    # firstname = request.POST['firstname']
    # lastname = request.POST['lastname']
    email = request.POST['email']
    password = request.POST['password']
    repassword = request.POST['repassword']
    if password == repassword:
        if User.objects.filter(username=username).exists():
            print(username,'has used userame by someone.')
            messages.info(request,'Username have used by someone')
        elif User.objects.filter(email=email).exists():
            print(email,'has used email by someone.')
            messages.info(request,'Email have used by someone')
        else:
            print('username approved')
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password'],
                email=request.POST['email'],
                first_name=request.POST['firstname'],
                last_name=request.POST['lastname'],
            )
            user.save()
            return redirect('/')
    else:
        print('password is not similar')
        messages.info(request,'the password is not same the repassword')
        
    return redirect('/sign_up')


def page_1(request):
    return render(request, 'page_1.html')

def create_form(request):
    return render(request, 'form.html')

def add_blog(request):
    name = request.POST['article_name']
    description = request.POST['description']
    return render(request, 'result.html', {'article_name' : name,'description':description})
