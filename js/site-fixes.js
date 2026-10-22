// Fix for the oLog template: main.js starts the zoom plugin on every page,
// but only product-details.html has a zoom gallery.
// This makes the plugin do nothing when the gallery isn't on the page.
(function ($) {
  var originalExzoom = $.fn.exzoom;

  $.fn.exzoom = function () {
    if (this.length === 0) {
      return this; // no gallery on this page: skip quietly
    }
    return originalExzoom.apply(this, arguments);
  };
})(jQuery);