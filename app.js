
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var cons = require('consolidate');
var TestDb = require('./testdb').testdb ;
var StudentDb = require('./studentdb').studentdb ;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

//changing from default jade templating engine
//to get familiar with html
//app.set('view engine', 'jade');
app.engine('html',cons.swig);
app.set('view engine','html');
app.set('view cache', false);

// To disable Swig's cache, do the following:
//cons.swig.setDefaults({ cache: false });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

//app.use(express.cookieParser('73248iujksa%$&@'));
//app.use(express.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var db = process.env.MONGOLAB_URI || 'nomuk' ;

TestDb = new testdb(db,'drills')
StudentDb = new studentdb(db,'students')

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req,res) {
    //res.render('mathtesttable');
    res.render('mathdrill');
});

app.get('/saveTest', function(req,res) {
    var rec = {};
    rec['name'] = req.query.name ;
    rec['type'] = req.query.type ;
    rec['desc'] = req.query.desc ;
    rec['op_lo'] = req.query.op_lo ;
    rec['op_hi'] = req.query.op_hi ;
    rec['num']   = req.query.num ;
    rec['cir']   = req.query.cir ;
    rec['status'] = 'new';
    TestDb.save( rec , function(err) {
	if (err) throw err;
	else  res.json({'status':'ok'});
    });
});

app.get('/onscreen_numpad', function(req,res) {
    res.render('onscreen_numpad');
});

app.get('/updateTestResult', function(req,res) {
    var score = parseInt(parseInt(req.query.correct)/parseInt(req.query.total)*100);
    var testupdobj = { '$set' : 
		       {'score':score,
			'status':'done' }
		     };
    TestDb.updateById( req.query.testid, testupdobj , function(err, rec) {
	if (err) throw err ;
	else {
	    var studentUpdObj =  { 
		'$inc': { 'total': parseInt(req.query.total),
			  'correct':parseInt(req.query.correct),
			  'points':parseInt(req.query.points)
			}
	    } ;
	    StudentDb.updateByName( req.query.name,studentUpdObj,
				      function(err,rec) {
					  if (err) throw err;
					  else {
					      res.json({'ok':true});
					  }
	    });
	}
    });
});

app.get('/getTableData', function(req,res) {
    var result = {} ;
    TestDb.getTableData( function(err,test_rec) {
	if (err) throw err;
	else {
	    result['testtable'] = test_rec ;
	    StudentDb.getByName( 'Nina', function( err, student_rec ) {
		if (err) throw err;
		else {
		    result['student'] = student_rec;
		    console.log(result);
		    res.json(result);
		}
	    });
	}
    });
});

app.get('/createtest', function(req,res) {
    res.render('createtest');
});


app.get('/getTest', function(req,res) {
    console.log( req.query.testid ) ;
    TestDb.getById( req.query.testid, function(err,rec) {
	if (err) throw err;
	else
	    res.json(rec);
    });
});

app.get('/mathdrill', function(req,res) {
    console.log( req.query.testid );
});

app.get('/savetest', function(req,res) {
    //1. Save in dB
    //2. res.json()
});

app.get('/mathdrill', function(req,res) {
    res.render('mathdrill.html');
    //1. Save in dB
    //2. res.json()
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
