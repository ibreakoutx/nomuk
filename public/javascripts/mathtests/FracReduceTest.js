var FracReduceTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Reduce the given fraction";
	this.sep[0] = "/";
    },

    generateProblem: function() {
	var common_factor = getRandRange(1,this.lo);
	this.op[0] = common_factor * getRandRange(1,this.hi);
	this.op[1] = common_factor * getRandRange(1,this.hi);

	this.correct_ans = fracReduce(this.op[0] + '/' + this.op[1]);
    },

    checkAnswer: function() {
	//Remove any spaces in answer
	this.ans = this.ans.replace(/\s+/g,'');
	
	if (this.ans.indexOf('/') == -1)
	    this.ans += '/1';

	if ( this.ans == this.correct_ans )
	    return 1;
	else
	    return 0;
    }

});

