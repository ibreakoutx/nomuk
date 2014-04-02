//Library functions

var assert = function (condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
};

//Return integer such that  lo =< value =< hi
var getRandRange = function( lo, hi ) {
    assert(lo <= hi , "getRandRange lo > hi");
    return parseInt(Math.random()*(hi-lo+1)) + lo ;
};

//Return GCF of 2 integers
var getGCF = function(a,b) {
    var t_a, t_b ;
    if ( a < b ) {
	t_a = b ;
	t_b = a ;
    }
    else {
	t_a = a ;
	t_b = b ;
    }

    var t ;

    while( t_b != 0 ) {
	t = t_b ;
	t_b = t_a % t_b ;
	t_a = t ;
    }

    return t_a ;
};

//Return LCM of 2 integers
var getLCM = function(a,b) {
    return  (a*b)/getGCF(a,b);
};

//Truncates (not rounding) a floating point number
//to the specified number of decimal places
var truncateFloat = function( num , places ) {
    var num_str = num.toString();
    //index of decimal point
    var dp_loc = num_str.indexOf('.');
    if ( dp_loc == -1 ) // decimal point not found
	return num;
    else
	return parseFloat( num_str.substring(0,dp_loc + places + 1));
};

var fracReduce = function(a) {
    var frac = a.split("/");
    if ( a.indexOf('/') == -1 ) 
	a = a + '/1' ;
    if ( frac.length == 1 ) frac.push(1);
    var gcf = getGCF(frac[0],frac[1]);
    return frac[0]/gcf + "/" + frac[1]/gcf;
};

var fracAdd = function( a , b ) {
    var ans = [];
    if ( a.indexOf('/') == -1 ) 
	a = a + '/1' ;
    if ( b.indexOf('/') == -1 ) 
	b = b + '/1' ;
    var fracA = a.split("/");
    var fracB = b.split("/");
    
    //denominator
    ans[1] = getLCM(fracA[1],fracB[1]);
    
    //numerator
    ans[0] = (fracA[0] * ans[1]/fracA[1] )
	+ (fracB[0] * ans[1]/fracB[1] )  ;
	
    return ans.join("/");
};




