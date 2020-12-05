from django.contrib import admin
from accounts.models import UserAccount
from django.contrib.auth.admin import UserAdmin
from django.db import models


class UserAdminConfig(UserAdmin):
    search_fields = ('email', 'name',)
    list_filter = ('email', 'name', 'is_active', 'is_staff')
    ordering = ()
    list_display = ('email', 'name','is_active', 'is_staff')

admin.site.register(UserAccount, UserAdminConfig)
