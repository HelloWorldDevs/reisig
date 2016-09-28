(function(){
	$('#office-carousel-items').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: [
			"<span class='fa-stack fa-lg'><i class='fa fa-circle fa-green fa-stack-2x'></i><i class='fa fa-arrow-left fa-inverse fa-stack-1x'></i></span>", 
			"<span class='fa-stack fa-lg'><i class='fa fa-circle fa-green fa-stack-2x'></i><i class='fa fa-arrow-right fa-inverse fa-stack-1x'></i></span>"],		
		responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:1
			}
		}
	});
}());