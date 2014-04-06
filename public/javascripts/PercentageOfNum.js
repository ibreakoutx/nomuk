var PercentageOfNum = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Find the % of the number to 2 decimal places";
	this.sep[0] = "% of";
    },

    generateProblem: function() {
	var percent;
	var num;

	percent   = getRandRange(0,100);	    
	num = getRandRange(0,100);
	
	this.op[0] = percent ;
	this.op[1] = num ;

	this.correct_ans = truncateFloat((percent*num)/100,2) ;
	console.log(this.correct_ans);
    },

    checkAnswer: function() {
	//Remove any spaces in answer
	this.ans = this.ans.replace(/\s+/g,'');

	if ( truncateFloat(this.ans,2) == this.correct_ans )
	    return 1;
	else
	    return 0;
    }

});

