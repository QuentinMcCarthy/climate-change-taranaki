$(document).ready(function(){
	// Slide Nav
	$(".header__navControl, .navFadeOut").click(function(){
		$(".navSlider").toggleClass("navSlider--open");
		$(".navFadeOut").toggleClass("navFadeOut--active");
	});

	// Nested Navigation
	$(".navSlider__nav--nested").click(function(){
		$(this)
			.toggleClass("navSlider__nav--nestedOpen")
			.find("ul")
				.toggleClass("navSlider__nestedNav--open")
	});
});
