from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, UpdateUserView, RePasswordUserView, PostView, GetAllPostView, RequestedPostView, GetPostOfUserView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('user/update', UpdateUserView.as_view()),
    path('user/repassword', RePasswordUserView.as_view()),
    path('post/<int:id>', PostView.as_view()),
    path('get-all-post-by-user/<int:id>', GetPostOfUserView.as_view()),
    path('post/create', PostView.as_view()),
    path('post/update/<int:id>', PostView.as_view()),
    path('post/all', GetAllPostView.as_view()),
    path('requested/<int:id>', RequestedPostView.as_view()),
    path('logout', LogoutView.as_view()),
]