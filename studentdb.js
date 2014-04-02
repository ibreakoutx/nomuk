var mongojs = require('mongojs');
var _ = require('underscore');

studentdb = function( dbname , collection ) {
    this.db = mongojs( dbname );
    this.collection = this.db.collection( collection );
};

studentdb.prototype.getByName = function( name, callback ) {

    this.collection.find( {'name':name} , {} , function(error, docs) {
	if (error) callback(error,null);
	else {
	    if ( docs.length == 0 )
		callback(new Error("getByName("+name+") not found"), null);
	    else
		callback(null,docs[0]);
	}
    });
};

studentdb.prototype.updateByName = function( name, updobj, callback ) {

    this.collection.update( {'name':name} , updobj , function(error, docs) {
	if (error) callback(error,null);
	else {
	    if ( docs.length == 0 )
		callback(new Error("updateByName("+name+") not found"), null);
	    else
		callback(null,docs[0]);
	}
    });
};

studentdb.prototype.getTableData = function( callback ) {
    var result = {} ;

    result['aaData'] = [];
    result['aoColumns'] = [] ;
    result['bAutoWidth'] = false;

    var columns = ['status','desc','num'];
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
		var button = "<button type='button' name='rowselect' value=" + objid_str + ">id</button>";
		row.push(button);
		row.push( docs[i]['name'] ) ;
		row.push( docs[i]['points'] ) ;
		row.push( docs[i]['score'] ) ;
		result['aaData'].push(row);
	    }
	    callback( null, result );
	}//else (!error)
    });
};

