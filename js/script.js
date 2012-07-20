$(document).ready(function(){

	$("#submit").click(function(e){


		/*		
		$(".error").hide();
		var error = false;
		var validemail = /^([\w-\.]+@[\w-]+\.[\w]{2,4})?$/;
	    var emailvalue = $("#email").val();
		*/
	    $.ajax({
	    	type : "POST",
	    	url : "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
	    	data : $("#get-lead").serialize(),
	    	success : function (data) {
	    			$("#submit").hide();
	    	}


	    });
	    return false;
	});

});