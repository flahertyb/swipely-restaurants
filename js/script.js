
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
	var switchContent = function(label){
		var name = $(label).text();
		var bgPos;
		switch (name) {
			case "Analytics":
				bgPos = "0"
				break;
			case "Loyalty":
				bgPos = "-497px"
				break;
			case "Marketing":
				bgPos = "-994px"
				break;
			default:
				break;
		}
		$('div.feature-screenshots').animate({
		  'background-position-x': bgPos
		}, 500, 'linear');
	}
	// calls previous functions on click event
	$('.feature-labels li').click(function(){ 
			labelHighlight(this); 
			switchContent(this);
		});

}

$(document).ready(function(){
	features();
});


