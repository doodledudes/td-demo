var Main = (function () {
	// variables
	var ctr = 0;

	// object
	return {
		init: function () {

			$(window).on("scroll", function(e) {
				if ( $(this).scrollTop() > 0 ) {
					$(".navbar-default").addClass("fixed");
				} else {
					$(".navbar-default").removeClass("fixed");
				}
			});

			Main.scroll(".navbar-default .navbar-nav > li:not(.dropdown) > a");
            
            $("body").attr({
                "data-spy": "scroll",
                "data-target": "#menuNavbar",
                "data-offset": "95"
            });

		},

		scroll : function (obj) {

			var body = $("html, body");

			$(obj).on("click", function(e) {
				e.preventDefault();
				var selector = $(this).attr("href");
				var objOffset = $(selector).offset().top - ($(window).width() > 767 ? 95 : 50);

				body.stop().animate({scrollTop: objOffset}, '200', 'swing');
			});

		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);