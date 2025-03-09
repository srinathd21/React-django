from django.urls import path
from . import views

urlpatterns = [
    path('formuser/', views.Formusers.as_view(), name='login-signup'),
    path("register/", views.Registeruserview.as_view(), name="note-list"),
    path("update/<int:id>/", views.RegisterUserUpdateView.as_view(), name="update-note"),
    path("delete/<int:id>/", views.RegisterUserDeleteView.as_view(), name="delete-note"),
]