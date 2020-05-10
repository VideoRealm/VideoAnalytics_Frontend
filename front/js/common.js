$( function() {
	var camsAccordion = $( ".cams" ).accordion({
		classes: {
			"ui-accordion-header": "cams__item",
			"ui-accordion-header-active": "cams__item_active",
			"ui-accordion-content": "cams__item-content"
		},
		collapsible: true,
		heightStyle: "content",
		active: false,
		animate: 200
	});
} );