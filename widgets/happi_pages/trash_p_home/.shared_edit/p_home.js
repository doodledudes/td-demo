/**
 *  Page Javascript - always gets included in this page.
 */

var thisPage = (function() {
  // variables
  var abc = 123;

  // object
  return {
    init: function() {
        $("#galleryProducts").unitegallery({
            tile_enable_textpanel:true,
            tile_textpanel_title_text_align: "center",
            tile_enable_icons:false,
            tile_enable_overlay:false,
            tile_enable_icons:false,
            tiles_nested_optimal_tile_width:300,
            tile_as_link:true,
            tiles_type: "nested"
        });
        $("#galleryEvents").unitegallery({
            tile_enable_textpanel:true,
            tile_textpanel_title_text_align: "center",
            tile_enable_icons:false,
            tile_enable_overlay:false,
            tile_enable_icons:false,
            tiles_nested_optimal_tile_width: 400,
            tile_as_link:true,
            tiles_type: "nested"
        });
    },

    //--------
    nocomma: null
  };
}());

// Init after the page has loaded
jQuery(thisPage.init);
