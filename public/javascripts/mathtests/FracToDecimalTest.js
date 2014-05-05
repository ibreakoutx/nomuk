var FracToDecimalTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Convert Fraction to Decimal with 3 places"
	this.sep[0] = "/";
    },

    generateProblem: function() {

	this.op[0]  = getRandRange(this.lo,this.hi);	    
	this.op[1]  = getRandRange(this.lo,this.hi);

	this.correct_ans = truncateFloat( this.op[0]/this.op[1], 3);
    },

    checkAnswer: function() {
	//Remove any spaces in answer
	this.ans = this.ans.replace(/\s+/g,'');

	//if ( fracReduce(this.ans) == this.correct_ans )
	if ( this.ans == this.correct_ans )
	    return 1;
	else
	    return 0;
    }

});

