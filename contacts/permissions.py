from rest_framework import permissions


class AllPostsPermissions(permissions.BasePermission):

    def has_object_permission(self, request, add, obj):
        if request.method == "POST":
            return self.create(request, *args, **kwargs)
