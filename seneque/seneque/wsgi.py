"""
WSGI config for seneque project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "seneque.settings")

application = get_wsgi_application()

"""
If you are runnig Django on Apache using mod_wsgi you have to add
WSGIPassAuthorization On
in your httpd.conf. Otherwise authorization header will be stripped
out by mod_wsgi.
"""
