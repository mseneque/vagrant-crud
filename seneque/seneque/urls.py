from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from authentication.views import AccountViewSet
from seneque.views import IndexView

# http://www.django-rest-framework.org/api-guide/routers/#api-guide
# https://getblimp.github.io/django-rest-framework-jwt/

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^.*$', IndexView.as_view(), name='index'),
]
