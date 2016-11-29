"""
WSGI config for seneque project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os, sys
# Calculate the path based on the location of the WSGI script.
apache_configuration = os.path.dirname(os.path.abspath((__file__)))
project = os.path.dirname(apache_configuration)
workspace = os.path.dirname(project)
sys.path.append(workspace)
sys.path.append(project)

# Add the path to 3rd party django application and to django itself.
sys.path.append('/vagrant')
os.environ['DJANGO_SETTINGS_MODULE'] = 'seneque.apache.override'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()




# from django.core.wsgi import get_wsgi_application

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "seneque.settings")

# application = get_wsgi_application()

"""
If you are runnig Django on Apache using mod_wsgi you have to add
WSGIPassAuthorization On
in your httpd.conf. Otherwise authorization header will be stripped
out by mod_wsgi.
"""
