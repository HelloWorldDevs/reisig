/* controls the swiper carousel feature at the top of site */
$(document).ready(function () {
	//initialize swiper when document ready  
	var bannerSwiper = new Swiper ('#banner-swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		speed: 1000,
		autoplay: 6000, 
		effect: 'slide',
		loop: true,
		grabCursor: true,
		simulateTouch: true,
		paginationHide: true,
		scrollbarHide: true
	});        
}(jQuery));