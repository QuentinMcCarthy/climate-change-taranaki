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

$(window).resize(function() {
	if($(window).width() >= 992){
		if($(".navSlider").hasClass("navSlider--open")){
			$(".navSlider").removeClass("navSlider--open");
		}

		if($(".navFadeOut").hasClass("navFadeOut--active")){
			$(".navFadeOut").removeClass("navFadeOut--active");
		}
	}
})
