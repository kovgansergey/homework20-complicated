$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.animate-header-description').each(function() {
			height = $(this).offset().top + $(this).height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$(this).addClass("anim-slideright");
			};
		});
	});

	$(document).on('scroll', function() {
		$('.animate-header-img').each(function() {
			height = $(this).offset().top + $(this).height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$(this).addClass("anim-slideleft");
			};
		});
	});

	$(document).on('scroll', function() {
		$('.animate-portfolio').each(function() {
			height = $(this).offset().top + $(this).height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$(this).addClass("anim-rot");
			};
		});
	});

	$(document).on('scroll', function() {
		$('.animate-price').each(function() {
			height = $(this).offset().top + $(this).height();
			if ($(document).scrollTop() + windowHeight >= height) {
				$(this).addClass("anim-emersion");
			};
		});
	});

});