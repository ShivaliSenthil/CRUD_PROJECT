from django.urls import path
from . import views
from .views import LogoutView,update_note

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('logout/', LogoutView.as_view(), name='logout'),
    path("notes/update/<int:id>/", update_note, name="update-note"),  # Add this line

]