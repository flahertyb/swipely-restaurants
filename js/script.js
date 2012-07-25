
var features = function() {

	// takes the feature button (jquery object) that was clicked, 
	// highlights it, and deselects the other two feature buttons
	var labelHighlight = function(label){

		var otherlabels = $('.feature-labels').children().not(label);
		$(otherlabels).css('backgroundPosition', '0 0');
		$(otherlabels).addClass('feature-hover');
		$(label).removeClass('feature-hover');
		$(label).css('backgroundPosition', '0 -66px');
	}
	// displays the corresponding picture in the feature-screenshots div
	var switchFeatureContent = function(label){
		var name = $(label).text();
		var duration = 500;
		var bgPos;
		var id;
		switch (name) {
			case "Analytics":
				bgPos = "0";
				id="analytics-content";
				break;
			case "Loyalty":
				bgPos = "-497px";
				id="loyalty-content";
				break;
			case "Marketing":
				bgPos = "-994px";
				id="marketing-content";
				break;
			default:
				break;
		}
		$('div.feature-screenshots').animate({
		  'background-position-x': bgPos
		}, duration, 'linear');
		
		$('div.feature-content h3').hide();
		$('#' + id).fadeIn(duration);
	}
	// calls previous functions on click event
	$('.feature-labels li').click(function(){ 
			labelHighlight(this); 
			switchFeatureContent(this);
		});
}

var testimonials = function() {

	var duration = 200;

	var businessHighlight = function(label){
		var otherlabels = $('.business-types').children().not(label);
		$(otherlabels).removeClass('show-pointer');
		$(otherlabels).addClass('hide-pointer');
		$(label).removeClass('hide-pointer');
		$(label).addClass('show-pointer');
	}
	var businessContent = function(label){
		var name = $(label).text();
		var id;
		switch (name) {
			case "Fine Dining":
				id = "fine-dining";
				break;
			case "Fast Casual":
				id = "fast-casual";
				break;
			case "Casual Dining":
				id = "casual-dining";
				break;
		}
		var quoteID = '#' + id + '-quote';
		var contentID = '#' + id + '-content';
		$('.swipely-works h3').hide();
		$(contentID).fadeIn(duration);
		$('#fine-dining-quote, #fast-casual-quote, #casual-dining-quote').hide();
		$(quoteID).fadeIn(duration);
	}

	$('.business-types li').click(function(){
		businessHighlight(this);
		businessContent(this);
	});
}

$(document).ready(function(){
	features();
	testimonials();
});


