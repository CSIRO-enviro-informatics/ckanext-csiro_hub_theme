from ckan import __version__ as ckan__version__
import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from util import version

ckan_version = version.parse(ckan__version__)

class Csiro_Hub_ThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)

    # IConfigurer

    def update_config(self, config_):
        # first defined templates are higher priority
        if ckan_version < version.parse("2.8.0"):
            # override some parts with bootstrap2 templates if needed
            toolkit.add_template_directory(config_, 'bs2-templates')
        # fallback to Bootstrap3 templates.
        toolkit.add_template_directory(config_, 'templates')

        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'csiro_hub_theme')
