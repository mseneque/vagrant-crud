from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from authentication.views import AccountViewSet
from trendwise.views import IndexView

# http://www.django-rest-framework.org/api-guide/routers/#api-guide

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/', include(router.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
