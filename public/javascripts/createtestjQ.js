$( function() {
    //On load
    //add ajax call to get names of all tests
    //text field on and out focus validation

    $('#testsave').click( function() {
	var tname = $('input[name=testname]').val();
	var tdesc = $('input[name=testdesc]').val();
	var ttype = $('input[name=testtype]:checked').val();
	var op_lo = $('input[name=op_lo]').val();
	var op_hi = $('input[name=op_hi]').val();
	var tnum  = $('input[name=testnum]').val();
	var tcir  = $('input[name=testcir]').val();

	var param = $.param( { name:tname,
			       desc:tdesc,
			       type:ttype,
			       op_lo:op_lo,
			       op_hi:op_hi,
			       num:tnum,
			       cir:tcir,
			       status:'new'
			     } );
	
	var saveUrl = "/saveTest?" + param ;

	$('#msg').text( JSON.stringify(param) ) ;
	
	//Ajax call to save in dB
	//on success go to select test page
	$.ajax( {
	    url:saveUrl,
	    type:"GET",
	    dataType:"json",
	    success: function(json) {
		console.log( 'saveTest :' + json['status'] );
		window.location="/";
	    },
	    error: function(xhr, status) {
		alert(saveUrl + " call failed");
	    }
	});
    });
    
});
