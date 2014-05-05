var DecimalDivisionTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Write answer in Decimal with 5 places"
	this.sep[0] = "/";
    },

    generateProblem: function() {
	var rand_pow ;
	
	for (var i=0;i<this.num_ops;i++) {
	    rand_pow = getRandRange(1,4);
	    this.op[i]  = getRandRange(this.lo,this.hi) * Math.pow(10,rand_pow);	    
	}

	this.correct_ans = truncateFloat( this.op[0]/this.op[1], 5);
    },

    checkAnswer: function() {
	//Remove any spaces in answer
	this.ans = this.ans.replace(/\s+/g,'');

	if ( this.ans == this.correct_ans )
	    return 1;
	else
	    return 0;
    }

});

