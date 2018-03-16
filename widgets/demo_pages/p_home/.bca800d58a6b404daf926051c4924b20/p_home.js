/**
 *  Page Javascript - always gets included in this page.
 */

var thisPage = (function() {
  // variables
  var abc = 123;

  // object
  return {
    init: function() {
        $(document).ready(function(){
            $('.carousel-partners').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
            $('.carousel-offerings').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                nav: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            $('.carousel-winners').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                nav: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });


            //- ellipsis
            $(".details-wrap .ell").dotdotdot();
        });
    },

    //--------
    nocomma: null
  };
}());

// Init after the page has loaded
jQuery(thisPage.init);
