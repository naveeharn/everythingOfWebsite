from rest_framework import serializers
from rest_framework import response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

from .serializers import PostSerializers, ScheduleSerializers, UserSerializers
from .models import Post, Schedule, User
import jwt
import datetime
# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        # print('year' in request.data)
        serializer = UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()
        # print(User.objects.filter(email=email).first().id)
        if user is None:
            raise AuthenticationFailed('User not found!')
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow(),
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'message':'successfully logged in',
            'jwt': token
        }
        return response

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        # token = request.headers.get('authorization', None).split()[1]
        # print(token)
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.filter(id=payload['id']).first()
        # user = User.objects.all()
        serializer = UserSerializers(user)
        # print(user.id)
        # print(User.objects.all().values('id','name'))
        users = User.objects.all()
        users_serializers = UserSerializers(users, many=True)
        users_serializers = users_serializers.data
        for user in users_serializers:
            del user['email']
            
        print(users_serializers)
        return Response(serializer.data)

    # def put(self, request):
    #     token = request.COOKIES.get('jwt')
    #     if not token:
    #         raise AuthenticationFailed('Unauthenticated!')
    #     try:
    #         payload = jwt.decode(token, 'secret', algorithms=['HS256'])
    #     except jwt.ExpiredSignatureError:
    #         raise AuthenticationFailed('Unauthenticated!')
    #     user = User.objects.get(id=payload['id'])
    #     print(request.data)
    #     request.data['password'] = user.password
    #     serializer = UserSerializers(instance=user, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     print(serializer.data)
    #     return Response(serializer.data)

class UpdateUserView(APIView):
    def put(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        request.data['password'] = user.password
        serializer = UserSerializers(instance=user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class RePasswordUserView(APIView):
    def put(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        if not user.check_password(request.data['password']):
            raise AuthenticationFailed('Incorrect Password!')
        if request.data['repassword'] == '':
            raise AuthenticationFailed('Empty Password!')
        user.set_password(request.data['repassword'])
        user.save()
        return Response({
            'message':'successfully reset password'
        })

class PostView(APIView):
    def get(self, request, id):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        post = Post.objects.get(id=id)
        print(post)
        # post.schedule = Schedule.objects.get(id=post.schedule)
        # schedule_serializer = ScheduleSerializers(Schedule.objects.get(id=post.sc))
        # print(post.schedules.id)
        user_serialzer = UserSerializers(User.objects.get(id=post.author.id))
        # schedule_serializer = ScheduleSerializers(Schedule.objects.get(id=post.schedules.id))
        serializer = PostSerializers(post)
        serializer = serializer.data
        serializer['author']=user_serialzer.data
        # serializer['schedule']=schedule_serializer.data
        # print(serializer['requested'])
        for i in range(len(serializer['schedules'])):
            schedule_serialzer = ScheduleSerializers(Schedule.objects.get(id=serializer['schedules'][i]))
            serializer['schedules'][i] = schedule_serialzer.data

        for i in range(len(serializer['requested'])):
            user_serialzer = UserSerializers(User.objects.get(id=serializer['requested'][i]))
            serializer['requested'][i] = user_serialzer.data
        
        return Response(serializer)
    
    def post(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])

        # if user.role != 'teacher':
        #     return Response({
        #         'message': 'This Account have not eligible to Post'
        #     })
        # schedule_serializer = ScheduleSerializers(data=request.data['schedule'])
        # schedule_serializer = ScheduleSerializers(request.data)

        # new_schedule = Schedule.objects.create(
        #     section=request.data['schedule']['section'],
        #     day=request.data['schedule']['day'],
        #     time=request.data['schedule']['time'],
        # )
        # new_schedule.save()
        # new_post = Post.objects.create(
        #     author=user,
        #     description=request.data['description'],
        #     schedule=new_schedule
        # )
        # new_post.save()
        # serializer = PostSerializers(new_post)

        print(request.data['schedules'])
        new_post = Post.objects.create(
            author=User.objects.get(id=payload['id']),
            description=request.data['description'],
        )
        for schedule in request.data['schedules']:
            # print(schedule)
            new_schedule = Schedule.objects.create(
                section=schedule['section'],
                day=schedule['day'],
                time=schedule['time'],
            )
            new_schedule.save()
            new_post.schedules.add(new_schedule)
        
        new_post.save()
        serializer = PostSerializers(new_post)
        return Response(serializer.data)

    def put(self, request, id):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        post = Post.objects.get(id=id)
        # print(payload['id'],post.author.id)
        # print(user,post.author)
        if user != post.author:
            return Response({
                'message':'user and author post is not match'
            })
        post.description = request.data['description']

        # schedule = Schedule.objects.get(id=post.schedule.id)
        # schedule.section = request.data['schedule']['section']
        # schedule.day = request.data['schedule']['day']
        # schedule.time = request.data['schedule']['time']
        # schedule.save()
        # print(post.schedules[0])
        post_serializer = PostSerializers(post)
        # print(post_serializer['schedules'])
        for i in post_serializer.data['schedules']:
            schedule = Schedule.objects.get(id=i)
            schedule.delete()
        
        # for schedule in post.schedules:
        #     schedule.delete()
        # post.schedules.clear()
        for schedule in request.data['schedules']:
            new_schedule = Schedule.objects.create(
                section=schedule['section'],
                day=schedule['day'],
                time=schedule['time'],
            )
            new_schedule.save()
            post.schedules.add(new_schedule)
        
        post.save()

        # user_serialzer = UserSerializers(User.objects.get(id=payload['id']))
        # schedule_serializer = ScheduleSerializers(Schedule.objects.get(id=post.schedule.id))
        # serializer = PostSerializers(post)
        # serializer = serializer.data
        # serializer['author']=user_serialzer.data
        # serializer['schedule']=schedule_serializer.data

        # for i in range(len(serializer['requested'])):
        #     user_serialzer = UserSerializers(User.objects.get(id=serializer['requested'][i]))
        #     serializer['requested'][i] = user_serialzer.data
        
        return Response({
            'message':'successfully updated post'
        })

class GetPostOfUserView(APIView):
    def get(self, request, id):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        posts = Post.objects.filter(author=id)
        serializers = PostSerializers(posts, many=True)
        post_serializer = serializers.data

        for post in post_serializer:
            user_serialzer = UserSerializers(User.objects.get(id=post['author']))
            # schedule_serializer = ScheduleSerializers(Schedule.objects.get(id=post['schedule']))
            post['author'] = user_serialzer.data
            # post['schedule'] = schedule_serializer.data
            for i in range(len(post['schedules'])):
                schedule_serialzer = ScheduleSerializers(Schedule.objects.get(id=post['schedules'][i]))
                post['schedules'][i] = schedule_serialzer.data
            for i in range(len(post['requested'])):
                user_serialzer = UserSerializers(User.objects.get(id=post['requested'][i]))
                post['requested'][i] = user_serialzer.data

        return Response(post_serializer)

class RequestedPostView(APIView):
    def put(self, request, id):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        post = Post.objects.get(id=id)
        user = User.objects.get(id=payload['id'])
        # post.requested.add(user)
        # post.save()
        post_serializer = PostSerializers(Post.objects.get(id=id))
        # post_request = post_serializer.data['requested']
        # print(Post.objects.all().values('requested'))
        # print(post_serializer.data['requested'])
        if user.id not in post_serializer.data['requested']:
            post.requested.add(user)
            post.save()
            return Response({
                'message': 'successfully requested post'
            })
        else:
            post.requested.remove(user)
            post.save()
            return Response({
                'message': 'successfully unrequested post'
            })
        # print(UserSerializers(user).data)
        # print(post_serializer.data['requested'])


class GetAllPostView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        post = Post.objects.all()

        # print(User.objects.all().values('name'))
        # users = []
        # for i in User.objects.all():
        #     users.append(i)
        # print(users)
        # for _ in range(len(User.objects.all())-1):
        #     for j in range(len(User.objects.all())-1):
        #         if users[j].name > users[j+1].name:
        #             users[j], users[j+1] = users[j+1], users[j]
        # print(users)
        # users = UserSerializers(users, many=True)
        # print(users.data)
        # print('a'<'aa')

        post_serializer = PostSerializers(post, many=True)
        post_serializer = post_serializer.data

        for post in post_serializer:
            user_serialzer = UserSerializers(User.objects.get(id=post['author']))
            # schedule_serializer = ScheduleSerializers(Schedule.objects.get(id=post['schedules']))
            post['author'] = user_serialzer.data
            # post['schedules'] = schedule_serializer.data
            for i in range(len(post['schedules'])):
                schedule_serialzer = ScheduleSerializers(Schedule.objects.get(id=post['schedules'][i]))
                post['schedules'][i] = schedule_serialzer.data
            for i in range(len(post['requested'])):
                user_serialzer = UserSerializers(User.objects.get(id=post['requested'][i]))
                post['requested'][i] = user_serialzer.data
        # print(post_serializer)
        return Response(post_serializer)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'successfully logged out',
        }
        return response