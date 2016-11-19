from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up the API using automatic URL routing.
# Have to connect it to login URLs for the browsable API.
urlpatterns = [
    # Examples:
    # url(r'^$', 'drf_tutorial.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include(router.urls)),
    url(r'^api_auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
]
