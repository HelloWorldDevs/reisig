/* controls the banner carousel feature at top of site */
$(document).ready(function () {
	$(".owl-stage").owlCarousel({
		items: 1,
		loop: false,
		margin:0,
		padding:0,
		stagePadding:0,		
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoHeight: false,
		autoplaySpeed: 1000,
		speed: 1000
	});
}(jQuery));