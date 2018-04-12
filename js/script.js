$(document).ready(function(){
	// Slide Nav
	$(".navButtonOpenContainer").click(function(){
		$(".navSlider").addClass("navSlider--open");
		$(".navFadeOut").addClass("navFadeOut--active");
	});
	$(".navButtonCloseContainer").click(function(){
		$(".navSlider").removeClass("navSlider--open");
		$(".navFadeOut").removeClass("navFadeOut--active");
	});
});
