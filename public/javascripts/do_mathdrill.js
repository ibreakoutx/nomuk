var do_mathdrill = function( testobj ) {

    console.log( JSON.stringify(testobj) );

    var logstring ;
    var points = 100;

    //GCF Test
    //var Test = new GCFTest("GCF");
    var Test = new MultTest("Mult");
    //var Test = new FracAddTest("FracAdd");
    Test.lo = 2;
    Test.hi = 10;
    console.log(Test.lo);
    console.log(Test.hi);
    
    Test.generateProblem();
    Test.printProblem();
    Test.points = points ;

    $(document).on('keypress','#answer', function(key) {
	
	//Return key pressed
	if ( key.keyCode == 13 ) {

	    if (Test.done) window.location='/';

	    if ( Test.notDone() ) {
		
		//Points is the total points accumulated
		$('#my_points').text("My Banini $s = " + Test.points);

		logstring = "<li>" + 
		    Test.convProblem2String() + "::" 
		    + Test.msg + "</li>" ;
	    
		$('ol').append(logstring);

		Test.printScore();
		
		Test.generateProblem();
		Test.printProblem();
	    }
	    else {
		$("#problem").hide();
		$('#main_msg').text("Test complete, Final Score = " + Test.getScore() + "%");
	    } 

	}//key code
	
    });
    
};
