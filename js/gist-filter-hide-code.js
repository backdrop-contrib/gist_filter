(function ($) {

  Drupal.behaviors.gistFilterHideCode = {
    attach: function (context, settings) {
			// Just hide the code tags if JS is enabled.
      $('.drupal-gist-file', context).hide();
    }
  };

}(jQuery));
