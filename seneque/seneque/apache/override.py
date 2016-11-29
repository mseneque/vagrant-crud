"""
The empty __init__.py file tells Python to treat the directory as a package.
The override.py imports all settings and overrides any settings for
production. For instance, databases and debug settings for production might
be different from those of development, and you may want to separate them
from the source code:
"""

from seneque.settings import *

DEBUG = True
ALLOWED_HOSTS = ['seneque']  # Add this in the hosts file
