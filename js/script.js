$(document).ready(function(){
	// Slide Nav
	$("div[data-nav='open']").click(function(){
		$(".navSlider").addClass("navSlider--open");
		$(".navFadeOut").addClass("navFadeOut--active");
	});
	$("div[data-nav='close']").click(function(){
		$(".navSlider").removeClass("navSlider--open");
		$(".navFadeOut").removeClass("navFadeOut--active");
	});

	// Nested Navigation
	$("li[data-nest='true']").click(function(){
		$(this)
			.toggleClass("navSliderList__listItem--openNest")
			.find(".navSliderNestedList")
				.toggleClass("navSliderNestedList--open")
				.end()
			.find(".navSliderList__anchorText")
				.toggleClass("navSliderList__anchorText--withClosedCaret")
				.end()
			.find(".navSliderList__anchorText")
				.toggleClass("navSliderList__anchorText--withOpenCaret");
	});
});
