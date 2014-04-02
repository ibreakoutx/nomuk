//Multiplication test

var getOps = function(callback) {
    left_op = parseInt(Math.random() * 10 + 1);
    right_op = parseInt(Math.random() * 10 + 1);
    callback(left_op,right_op);
};

var printOps = function(left_op,right_op) {
    $('#left_operand').html(left_op);
    $('#right_operand').html(right_op);
    $('#operation').html('*') ;
};

var getCorrectAnswer = function(left_op,right_op) {
    return left_op * right_op ;
};

var checkAnswer = function( ) {

};
