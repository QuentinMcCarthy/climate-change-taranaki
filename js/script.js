$(document).ready(function(){
	// Slide Nav
	//$(".navButtonOpenContainer").click(function(){
		$(".navSlider").addClass("navSlider--open");
		$(".navFadeOut").addClass("navFadeOut--active");
	//});
	$(".navButtonCloseContainer").click(function(){
		$(".navSlider").removeClass("navSlider--open");
		$(".navFadeOut").removeClass("navFadeOut--active");
	});

	// Nested Navigation
	$(".navSliderList__listItem--withNest").click(function(){
		$(this).toggleClass("navSliderList__listItem--openNest");
		$(this).find(".navSliderNestedList").toggleClass("navSliderNestedList--open");
		$(this).find(".navSliderList__caret").toggleClass("navSliderList__caret--active");
	});
});
