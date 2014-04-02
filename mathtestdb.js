/* Test db structure
name: test name
desc: test description
type: test type, oneof( a list ) 
op_lo: low limit of operands
op_hi: high limit of operands
num: number of problems to get right
num_max: upper limit on number of problems in test
         num_max > num , if not specified num_max = 2*num
cir: correct in a row, number of problems that you should
     get correct in a row to get credit towards decreasing
     the number of remaining problems.
*/

var mongojs=require('mongojs');

mathtestdb = function( db , collection ) {
    this.db = mongojs( db );
    this.collection = this.db.collection(collection);
};

//save math test to db, test is in json object
mathtestdb.prototype.save = function( tjson, callback ) {
    //callback is optional for writes to db
    this.collection.save( tjson , function()) ;
};

//list all tests in the db
mathtestdb.prototype.listname = function( callback ) {
    this.collection.find( {} , {_id:0} , function(err,docs) {
	if (err) throw err ;
	else callback(docs);
    });
};

//update math test in db, test is in json object
mathtestdb.prototype.update = function( tjson, callback ) {

};

//given a testname, retrieve from db
mathtestdb.prototype.get = function( name , callback ) {

};

//delete test in db
mathtestdb.prototype.delete = function( name , callback ) {

};
