import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from ckan.common import config


def appversion():
    '''Returns the appversion config value.'''

    value = config.get('ckan.appversion', 'unknown')
    return value


class Csiro_Hub_ThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'csiro_hub_theme')

    def get_helpers(self):
        '''Register the most_popular_groups() function above as a template
        helper function.

        '''
        # Template helper function names should begin with the name of the
        # extension they belong to, to avoid clashing with functions from
        # other extensions.
        return {'appversion': appversion}
