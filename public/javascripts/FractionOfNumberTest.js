var FractionOfNumberTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Fraction of number to 2 decimal places";
	this.sep[0] = " of ";
    },

    generateProblem: function() {
	var numerator;
	var denominator;

	numerator   = getRandRange(this.lo,this.hi);	    
	denominator = getRandRange(numerator,this.hi);
	this.op[0] = numerator + "/" + denominator ;
	this.op[1] = getRandRange(this.lo,this.hi);

	var tmp = numerator/denominator * this.op[1];
	this.correct_ans = truncateFloat(tmp,2);
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

