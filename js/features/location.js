function initMap() {
	var office = {lat: 44.8947459, lng: -123.0562957 - 0.003};

	var map = new google.maps.Map(document.getElementById('desktop-location'), {
		zoom: 14,
		scrollwheel: false,
		center: office
	});

	var marker = new google.maps.Marker({
		position: office,
		map: map
	});
	
	map.panBy(150, 0);
}