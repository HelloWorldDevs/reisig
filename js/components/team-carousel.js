(function(){
	$("#team-carousel-items").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: true,
		navText: [
			"<span class='fa-stack fa-lg'><i class='fa fa-circle fa-green fa-stack-2x'></i><i class='fa fa-arrow-left fa-inverse fa-stack-1x'></i></span>", 
			"<span class='fa-stack fa-lg'><i class='fa fa-circle fa-green fa-stack-2x'></i><i class='fa fa-arrow-right fa-inverse fa-stack-1x'></i></span>"],
		dots: false,
		autoplay: false,
		autoHeight: false,
		autoplaySpeed: 8000,
		responsive:{
			0:{
					items:1
			},
			600:{
					items:3
			},
			1000:{
					items:3
			}
		}
	});	
}());
