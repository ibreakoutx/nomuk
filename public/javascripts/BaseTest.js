var  BaseTest = Class.extend( {

    lo: 2,      //min value of operands
    hi: 100,    //max value of operands
    num_ops: 2, //number of operands
    cir: 5,           //Correct in a row
    problems: 20,     //number of problems
    problems_max: 30, //max number of problems
    ans:0,            //candidate's answer
    correct_ans:0,      //correct answer
    list:[],//list of operands and operators,
    //intermediate step to build up problem string

    instructions:'just do it',

    count:0, //running count of problems
    cir_count:0,//correct in a row count
    correct_count:0,//total correct count
    msg:'',
    done:0,
    score:0,
    points:0,

    //Operands
    op:  [1,2,3],

    //Separator between operands
    sep: ["," , ","] , 

    //constructor
    init: function( _name ) {
	this.name = _name;
    },

    getTotal: function() {
	return this.count;
    },

    getPoints: function() {
	return this.points;
    },

    getCorrect: function() {
	return this.correct_count ;
    },

    generateProblem: function() {
    },

    getScore: function() {
	this.score = parseInt((this.correct_count/this.count)*100.0);
	return this.score ;
    },

    printScore: function() {
	this.getScore();
	$('#score').text('Score = ' + this.score + '%');
    },

    notDone: function() {

	this.getAnswer();

	if ( this.checkAnswer() ) {
	    this.correct_count++;
	    this.cir_count++;
	    this.points++;
	    this.msg = '<span class="correct">Correct</span>' ;
	}
	else {
	    this.cir_count = 0;
	    this.msg = '<span class="wrong">Wrong, Correct ans = '
		+ this.correct_ans + '</span>';
	}
	
	if (this.cir_count >= this.cir) {
	    this.cir_count = 0;
	    this.problems -= this.cir_count ;
	    //print message saying you got 5 correct in a row, bonus
	    $('#cir').text("You got " + this.cir + " correct in a row, BONUS of " + this.cir + " points");
	    this.points += this.cir;
	}
	else {
	    //Erase message above
	    $('#cir').text('');
	}
	
	if (this.count >= this.problems_max ||
	    this.problems < 0) {
	    this.done = 1;
	    return 0;
	}

	return 1;
    },

    getAnswer: function() {
	this.ans = $('#problem input[name=answer]').val();
    },

    checkAnswer: function() {
	return this.ans == this.correct_ans ;
    },

    printName: function() {
	$( '#problem #name' ).text(this.name);
	this.list.push(this.name);
	console.log(this.name);
    },

    printInstructions: function() {
	$( '#problem #instructions' ).text(this.instructions);
	//this.list.push(this.name);
    },

    printOp: function(idx) {
	var selector = "#problem #op" + idx ;
	$( selector ).text(this.op[idx]);
	this.list.push(this.op[idx]);
    },

    printSep: function(idx) {
	var selector = "#problem #sep" + idx ;
	$( selector ).text(this.sep[idx]);
	this.list.push(this.sep[idx]);
    },

    printProblem: function() {
	this.count++;

	this.list=[];
	this.printInstructions();
	this.printOp(0);
	this.printSep(0);
	this.printOp(1);
	if (this.num_ops > 2) {
	    this.printSep(1);
	    this.printOp(2);
	}
	$('#answer').val('');
    } ,

    convProblem2String: function() {
	return this.list.join(' ') + ' = ' + this.ans;
    } ,

});


var GCFTest = BaseTest.extend( {
    init: function(_name) {
	this._super(_name);
    },

    generateProblem: function() {
	for (var i=0;i<this.num_ops;i++)
	    this.op[i] = getRandRange(this.lo,this.hi);

	this.correct_ans = getGCF(this.op[0],this.op[1]);
	if ( this.num_ops > 2 )
	    this.correct_ans = getGCF(this.correct_ans,this.op[2]);
    }
});

