var MultTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Multiply these 2 numbers";
	this.sep[0] = "*";
    },

    generateProblem: function() {
	for (var i=0;i<this.num_ops;i++)
	    this.op[i] = getRandRange(this.lo,this.hi);

	this.correct_ans = this.op[0] * this.op[1];
	if ( this.num_ops > 2 )
	    this.correct_ans = this.correct_ans * this.op[2];
    }
});

