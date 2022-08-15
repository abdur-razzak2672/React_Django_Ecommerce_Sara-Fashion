from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getUsers, name = 'user'),
    path('register/',views.userRegister, name = 'user-register'),
    path('profile/',views.getUsersProfile ,name = 'user-profile'),

]