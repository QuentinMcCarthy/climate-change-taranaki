$(document).ready(function(){
	// Slide Nav
	$(".navButtonContainer").click(function(){
		$(".navSlider").toggleClass("navSlider--open");
		$(".navFadeOut").toggleClass("navFadeOut--active");
	});

	// Nested Navigation
	$("li[data-nest='true']").click(function(){
		$(this)
			.toggleClass("navSliderList__listItem--openNest")
			.find(".navSliderList__anchor")
				.toggleClass("navSliderList__anchor--withClosedCaret")
				.end()
			.find(".navSliderNestedList")
				.toggleClass("navSliderNestedList--open")
				.end()
	});
});
