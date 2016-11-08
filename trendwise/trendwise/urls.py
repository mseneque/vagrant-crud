from django.conf.urls import include, url
from django.contrib import admin

from trendwise.views import IndexView

from rest_framework_nested import routers
from authentication.views import AccountViewSet

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
