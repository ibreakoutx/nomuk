var DecimalMultTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Multiply these 2 numbers";
	this.sep[0] = "*";
    },

    generateProblem: function() {
	var rand_pow;

	for (var i=0;i<this.num_ops;i++) {
	    rand_pow = getRandRange(1,4) ;
	    this.op[i] = getRandRange(this.lo,this.hi);
	    this.op[i] = this.op[i] * Math.pow(10,rand_pow) ;
	}

	this.correct_ans = this.op[0] * this.op[1];
    }
});

