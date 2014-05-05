var MixedNumberToFracTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Convert this mixed number to a reduced fraction";
	this.sep[0] = '';
    },

    generateProblem: function() {
	var num = getRandRange(1,this.lo);
	var numerator   = getRandRange(this.lo,this.hi);	    
	var denominator = getRandRange(numerator,this.hi);

	console.log(num);
	console.log(numerator);
	console.log(denominator);

	this.op[1] = numerator + "/" + denominator ;
	this.op[0] = num ;

	this.correct_ans = fracReduce(fracAdd(num+'/1',this.op[1]));
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

