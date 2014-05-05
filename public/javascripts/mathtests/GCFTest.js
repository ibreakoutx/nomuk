var GCFTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Find the Greatest Common Factor (GCF) of the two numbers\n"; 
	this.instructions += "The GCF is the largest number that can divide both numbers";
    },

    generateProblem: function() {
	for (var i=0;i<this.num_ops;i++)
	    this.op[i] = getRandRange(this.lo,this.hi);

	this.correct_ans = getGCF(this.op[0],this.op[1]);
	if ( this.num_ops > 2 )
	    this.correct_ans = getGCF(this.correct_ans,this.op[2]);
    }
});

