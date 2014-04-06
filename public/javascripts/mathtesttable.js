$( function() {
    $.ajaxSetup({ cache: false});
    $.ajax( {
        url:"getTableData",
        async:false,
        dataType: "json",
	
        success: function(json) {
	    console.log(JSON.stringify(json));
            $('#test_table').dataTable(json['testtable']);
	    var student = json['student'];
	    var name = student['name'];
	    var points = parseInt(student['points']);

	    $('#name').text( name );
	    $('#tpoints').text( points );

	    var score = 0;
	    var testid ;
	    if ( student['total'] ) 
		score = parseInt( parseInt(student['correct'])/parseInt(student['total']) * 100 );

	    $('#tscore').text( score+'%' );

            $('#problem').hide();
            $('#end_test').hide();

	    $('button[name=rowselect]').click( function() {
		testid = $(this).val();
                var qstring = $.param({'testid': testid});
                var getTestUrl="/getTest?"+ qstring ;
		console.log(getTestUrl);

		$('#test_table_div').hide();
		
		$.ajax( {
		    url: getTestUrl,
		    async: false ,
		    dataType: "json",
		    success: function(json) {
			console.log("ajax get test url passed");
			console.log(JSON.stringify(json));
			dotest( json, function(total, correct ,points) {
			    var updParam = $.param( {'name':name, 'points':points,
						     'total':total, 'correct':correct,
						     'testid': testid } );
			    var updUrl ='/updateTestResult?' + updParam ;
			    $.ajax( {			    
				url:updUrl ,
				async:false,
				dataType:"json",
				success: function(json) {
				    console.log(json);
				    window.location = '/' ; 
				},
				error: function(xhr,status) {
				}
			    });

			});
		    },
		    error: function(xhr,status) {
			alert("getTest call failed");
		    }
		});
		

            });
        },
	
        error: function(xhr,status) {
            alert("getTableData call failed");
        }
    });

});

