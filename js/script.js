/* FEATURE BUTTONS (Analytics, Marketing, Loyalty) */
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

/* TESTIMONIALS QUOTE/CONTENT BUTTONS */
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

/* FORM VALIDATION AND SUBMISSION - based on Sam Dunn's example at buildinternet.com */
var webToLead = function() {

	$("#send-form-data").click(function(e){

	    // if user hits submit, existing error spans disappear
	    $(".error").hide(); 

	    // no errors to start
	    var error = false;
	    var validemail = /^([\w-\.]+@[\w-]+\.[\w]{2,4})?$/;
	    var emailValue = $("#lead-email").val();
	    var businessValue = $("#lead-business").val();



	    // if the fields are blank
	    if ((emailValue == "") || (emailValue == null)){
		$("#lead-email").after('<p class="error">You forgot to write your email!</p>');
		error = true;
	    }
	    if ((businessValue == "") || (businessValue == null) || ($.trim(businessValue) == 'What is your restaurant called?')){
		$("#lead-business").after('<p class="error">You forgot to write the name of your organization!"</p>');
		}

	    // if the email field is invalid (fails regexp test)
	    if (!validemail.test(emailValue)) {
		$("#lead-email").after('<p class="error">Your email doesn\'t seem valid, are you sure there are no typos?</p>');
		error = true;
	    }

	    // if there are no errors 
	    if (!error) {
	    	console.log('hi');
			$.ajax({
		    	type : "POST",
		    	url : "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
		    	data : $("#lead-capture").serialize(),
		    	success : function (data) {
		    			$("#lead-capture").slideUp(500);
		    	}
	    	});
		}
	    return false;
    });
}
	
/* STYLE THE FORM */

var formStyling  = function(){

	$('input[type="text"], textarea').addClass("idleField");
	$('input[type="text"], textarea').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
		if (this.value === this.defaultValue){
		    this.value = '';
		}
		if(this.value !== this.defaultValue){
		    this.select();
		}
	    });
	$('input[type="text"], textarea').blur(function() {
		$(this).removeClass("focusField").addClass("idleField");
		if ($.trim(this.value) === ''){
		    this.value = this.defaultValue;
		}
	});
}






$(document).ready(function(){
	features();
	testimonials();
	webToLead();
	formStyling();
});


