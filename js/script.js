
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
		console.log(name);
		switch (name) {
			case "Analytics":
				$('div.feature-screenshots').css("backgroundImage", "url('http://www.placekitten.com/400/254')");
				break;
			case "Loyalty":
				$('div.feature-screenshots').css("backgroundImage", "url('http://www.placekitten.com/400/256')");
				break;
			case "Marketing":
				$('div.feature-screenshots').css("backgroundImage", "url('http://www.placekitten.com/400/253')");		
				break;
			default:
				break;
		}
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


