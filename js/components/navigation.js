(function(){
	var primaryNav = $("#primary-navigation");
	primaryNav.on("click", "a", null, function () {
		primaryNav.collapse("hide");
	});
}());