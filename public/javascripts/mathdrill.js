var dotest = function( testobj, callback ) {
    var logstring ;

    $('#problem').show();
    $('#onscreen_numpad').show();

    var Test ;
    
    switch(testobj['type']) {
	case 'gcf': Test = new GCFTest("GCF"); break ;
	case 'frac_add_2op': Test = new FracAddTest("FracAdd"); break ;
	case 'mult': Test = new MultTest("Mult"); break ;
	case 'percent_of': Test = new PercentageOfNum("Percent"); break ;
	case 'frac_reduce':Test = new FracReduceTest("FracReduce");break;
	case 'mixed_num':Test = new MixedNumberToFracTest("Mixed");break;
	case 'frac_plus_num':Test = new NumberPlusFracTest("Num+Frac");break;
	case 'frac_to_dec': Test = new FracToDecimalTest("Frac2Dec");break;
	case 'frac_of':Test = new FractionOfNumberTest("FracOfNum");break;
	case 'lcm':Test = new LCMTest("LCM");break;
	default : Test = new MultTest("Mult");
    }
    
    Test.lo = parseInt(testobj.op_lo);
    Test.hi = parseInt(testobj.op_hi);
    Test.cir = parseInt(testobj.cir);
    Test.problems = parseInt(testobj.num);

    console.log(Test.lo);
    console.log(Test.hi);
    
    Test.generateProblem();
    Test.printProblem();
    Test.points = 0 ;
    
    $('#end_test_button').click( function() {
	 callback(Test.getTotal(),
		  Test.getCorrect(),
		  Test.getPoints()
		 );
    });
    
    $(document).on('keypress','#answer', function(key) {
	//Return key pressed
	if ( key.keyCode == 13 ) {
	    exec_single_problem(Test);
	}//key code
    });

    $('#pad_enter').click( function() {
	exec_single_problem(Test);
    });

};

var exec_single_problem = function(Test) {
    
    if ( $('#problem input[name=answer]').val() != '' ) {
	
	if ( Test.notDone() ) {
	    
	    //Points is the total points accumulated
	    $('#my_points').text("My Banini $s = " + Test.points);
	    
	    logstring = "<li>" + 
		Test.convProblem2String() + "::" 
		+ Test.msg + "</li>" ;
	    
	    $('#count').text("Problem count = " + Test.count);
	    
	    $('ul').prepend(logstring);
		    
	    Test.printScore();
	    
	    Test.generateProblem();
	    Test.printProblem();
	}
	else {
	    $("#problem").hide();
	    $("#onscreen_numpad").hide();
	    $("#end_test").show();
	    $('#end_test_msg').text("Test complete, Final Score = " + Test.getScore() + "%");
	} 
    }
};
