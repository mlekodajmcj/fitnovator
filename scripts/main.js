$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top-75
		}, 1000);

		$(this).blur();

});

$(window).click(function(e) {

	if($('.navbar-collapse').hasClass('show')){
		$('button.navbar-toggler').click(); 
		e.preventDefault();
	}
});