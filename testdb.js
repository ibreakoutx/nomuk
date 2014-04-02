var mongojs = require('mongojs');
var _ = require('underscore');

testdb = function( dbname , collection ) {
    this.db = mongojs( dbname );
    this.collection = this.db.collection( collection );
};

testdb.prototype.save = function(rec, callback ) {

    this.collection.save( rec , function(err) {
	if (err) callback(err);
	else 
	    callback(null);
    });
};

testdb.prototype.getById = function( id, callback ) {
    var objid = mongojs.ObjectId(id);
    this.collection.find( {'_id':objid} , {} , function(error, docs) {
	if (error) callback(error,null);
	else {
	    if ( docs.length == 0 )
		callback(new Error("getTestById("+id+") not found"), null);
	    else
		callback(null,docs[0]);
	}
    });
};

testdb.prototype.updateById = function( id, updobj , callback ) {
    var objid = mongojs.ObjectId(id);
    this.collection.update( {'_id':objid} , updobj , function(error, docs) {
	if (error) callback(error,null);
	else {
	    if ( docs.length == 0 )
		callback(new Error("updateById("+id+") not found"), null);
	    else
		callback(null,docs[0]);
	}
    });
};

testdb.prototype.getTableData = function( callback ) {

    var result = {} ;

    result['aaData'] = [];
    result['aoColumns'] = [] ;
    result['bAutoWidth'] = false;

    var columns = ['Status','Description','Number of Problems','Score'];
    var widths = [] ;

    //Set column headings
    for (var i=0; i < columns.length ; i++) 
	result['aoColumns'].push( { 'sTitle': columns[i] } ) ;

    //Create test table
    this.collection.find( {} , {} , function(error, docs) {
	if (error) callback(error,null);
	else {
	    for( var i=0;i<docs.length;i++ ) {
		var row = [];

		var objid_str = docs[i]['_id'].valueOf();
		var button = "<button type='button' name='rowselect' value=" + objid_str;
		if ( docs[i]['status'] != 'new' )
		    button += " class='green'>ReTake Test</button>";
		else
		    button += " class='red'>Take Test</button>";		    
		row.push(button);
		row.push( docs[i]['desc'] ) ;
		row.push( docs[i]['num'] ) ;
		if ( docs[i].hasOwnProperty('score') ) {
		    var score = docs[i]['score'] ;
		    score = score.toFixed(0);
		    score += '%' ;
		}
		else {
		    score = '--';
		}
		row.push( score ) ;
		result['aaData'].push(row);
	    }
	    callback( null, result );
	}//else (!error)
    });
};

