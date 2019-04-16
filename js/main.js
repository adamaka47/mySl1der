$(document).ready(function() {
	var contSlide = 1;
	var countSlide = $('.slider_wrapper').children().length;
	var timess = 4000;
	var 
		btn1 = $('.btn-one'),
		btn2 = $('.btn-two');

	$(btn1).click(before);

	$(btn2).click(after);

	setInterval(after, timess); // автозапуск

	// function keyboard

	$(this).keydown(function(event) {
		if (event.which === 37) {
			before();
		} else if (event.which === 39) {
			after();
		}
	});

	// 37
	// 39





	function after() {
		if (contSlide === countSlide || contSlide > countSlide || contSlide <= 0) {
			$('.slider_wrapper').css('transform', 'translate(0, 0)');
			contSlide = 1;
		} else {
			var widthen = -$('.wrapper').width() * (contSlide);
			$('.slider_wrapper').css('transform', 'translate('+widthen+'px, 0)');
			contSlide++;
		}
	}
	function before() {
		if (contSlide === 1 || contSlide > countSlide || contSlide <= 0) {
			var widthen = -$('.wrapper').width() * (countSlide - 1);
			$('.slider_wrapper').css('transform', 'translate('+widthen+'px, 0)');
			contSlide = countSlide;
		} else {
			var widthen = -$('.wrapper').width() * (contSlide - 2);
			$('.slider_wrapper').css('transform', 'translate('+widthen+'px, 0)');
			contSlide--;
		}
	}
});