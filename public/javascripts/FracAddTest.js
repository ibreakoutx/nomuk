var FracAddTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Add the 2 fractions, answer should be the reduced fraction";
	this.sep[0] = "+";
    },

    generateProblem: function() {
	var numerator;
	var denominator;

	this.sep = [ "+" , "+" ];

	for (var i=0;i<this.num_ops;i++) {
	    numerator   = getRandRange(this.lo,this.hi);	    
	    denominator = getRandRange(numerator,this.hi);
	    this.op[i] = numerator + "/" + denominator ;
	}

	this.correct_ans = fracAdd(this.op[0],this.op[1]);

	if ( this.num_ops > 2 )
	    this.correct_ans = fracAdd(this.correct_ans,this.op[2]);
	this.correct_ans = fracReduce( this.correct_ans ) ;
    },

    checkAnswer: function() {
	//Remove any spaces in answer
	this.ans = this.ans.replace(/\s+/g,'');

	//if ( fracReduce(this.ans) == this.correct_ans )
	if ( this.ans == this.correct_ans )
	    return 1;
    }

});

