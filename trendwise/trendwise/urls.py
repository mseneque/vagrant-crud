from django.conf.urls import include, url
from django.contrib import admin

from rest_framework_nested import routers

from authentication.views import AccountViewSet
from trendwise.views import IndexView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = [
    # Examples:
    # url(r'^$', 'trendwise.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/', include(router.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
