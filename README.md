Gist Filter
========
<!--
The first paragraph of this file should be kept short as it will be used as the
project summary on BackdropCMS.org. Aim for about 240 characters (three lines at
80 characters each).

All lines in this file should be no more than 80 characters long for legibility,
unless including a URL or example that requires the line to not wrap.
|<- - - - - - - This line is exactly 80 characters for reference - - - - - - ->|

Detail in READMEs should be limited to the minimum required for installation and
getting started. More detailed documentation should be moved to a GitHub wiki
page; for example: https://github.com/backdrop-contrib/setup/wiki/Documentation.
-->

Gist Filter allows gists from Github to be embedded anywhere in the text using
a token format to embed as either a link, a 'code' block or embedded using one
of a range of themes.

Installation
------------
<!--
List the steps needed to install and configure the module. Add/remove steps as
necessary.
-->

- Install this module using the official Backdrop CMS instructions at
  https://docs.backdropcms.org/documentation/extend-with-modules.
- Enable the Gist Filter in each text format where you want to use it.
- In the order of filters (weight) within each text format you use it, Gist
Filter must come BEFORE
[Token Filter](https://backdropcms.org/project/token_filter) and AFTER 'Limit
allowed HTML tags'. The module will attempt to set this but double check this
if you run into problems.

Usage
-------------
<!--
Link to the repository's wiki if more documentation can be found there. Remove
this section if not needed (and consider disabling the wiki in the repo settings
if not used).
-->

1. From the text format configuration page, you can configure the default
display method for each text format.
2. Within text using a filtered format where the filter is enabled, use the
following patterns:
- `[gist:123abc456def7890]` - use the default display method.
- `[gistcode:123abc456def7890]` - embed the gist within `<code>` blocks.
- `[gistlink:123abc456def7890]` - embed the gist as a link.
- `[gistembed:123abc456def7890]` - embed the gist using a script.
The gist ID is the string after the gist owner. For the examples above the gist
URL might be `https://gist.github.com/yorkshire-pudding/123abc456def7890`.
3. To add a specific file use `[gist:123abc456def7890:myfile.sh]` or the
equivalent with a `gistcode`, `gistlink` or `gistembed` prefix.
4. Go to `/admin/config/content/gist-filter` where you can select a theme for
the embed display (you will need to clear the page cache to apply a change
here), and also add a GitHub Personal Access token to give your site a higher
limit for retrieving gists.
5. Clearing the 'Page and else' cache may be necessary to see the effects of a
change.

For further information, please visit the [Wiki](https://github.com/backdrop-contrib/gist_filter/).

Issues
------
<!--
Link to the repo's issue queue.
-->

Bugs and Feature Requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/gist_filter/issues.


Current Maintainers
-------------------
<!--
List the current maintainer(s) of the module, and note if this module needs
new/additional maintainers.
-->

- [Martin Price](https://github.com/yorkshire-pudding) - [System Horizons](https://www.systemhorizons.co.uk)
- Collaboration and co-maintainers welcome!

Credits
-------
<!--
Give credit where credit's due.
If this is a Drupal port, state who ported it, and who wrote the original Drupal
module. If this module is based on another project, or uses third-party
libraries, list them here. You can also mention any organisations/companies who
sponsored the module's development.
-->

- Ported to Backdrop CMS by - [Martin Price](https://github.com/yorkshire-pudding) - [System Horizons](https://www.systemhorizons.co.uk).
- Port sponsored by [System Horizons](https://www.systemhorizons.co.uk).
- Originally written for Drupal by [Jake Bell](https://www.drupal.org/u/theunraveler)
- Incorporating several patches by various authors from the Drupal issue queue.
- Gist Embed themes by [Will Boyd](https://github.com/lonekorean)

License
-------
<!--
Mention what license this module is released under, and where people can find
it.
-->

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.