$(document).ready(function () {
	$("#office-carousel-items").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: true,
		dots: false,
		navText: [
			"<i class='fa fa-arrow-left fa-inverse fa-1x'></i>", 
			"<i class='fa fa-arrow-right fa-inverse fa-1x'></i>"],
		dots: false,
		autoplay: false,
		autoHeight: false,
		autoplaySpeed: 8000,
		margin: 20,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});	
}(jQuery));