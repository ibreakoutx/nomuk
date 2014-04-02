$(document).ready(  function() {

//Ajax call to get test parameters

    var num=10;
    var count = 0;

    $('#welcome_msg').text("Welcome to Math torture " + "get " + num + 
			   " correct in a row");

    var msg = "You are wrong";
    var logstring = "";

    console.log("hello world");

    getOps( printOps ) ;

    $(document).on('keypress','#answer',function(key) {
	if ( key.keyCode == 13 ) {

	    if ( count >= num ) {
		window.location.href="/";
	    }

	    //check answer
	    var answer = parseInt($('#answer').val());
		
	    var correct_answer = left_op * right_op;
		
	    if ( answer === correct_answer ) {
		count++ ;
		msg = "You are correct: count=" + count ;
	    }
	    else {
		//$('#correct_answer').text(correct_answer);
		msg = "You are wrong: Correct answer = " + correct_answer ;
	    }
		
	    $('#msg').text(msg);
	    
	    logstring = "<li>" + left_op + " * " + right_op + " = " +			      
		answer + "::" + msg + "</li>" ;
	    
	    $('ol').append(logstring);
	   
	    if (count >= num) {
		$("#problem").hide();
		$('#welcome_msg').text("Congratulations you got " + count + 
				       " correct in a row, Hit enter to continue");
		$.get("/");
	    } else {
		getOps(printOps);
		$('#answer').val('');
	    }

	}
	
    });

});
	    
    
