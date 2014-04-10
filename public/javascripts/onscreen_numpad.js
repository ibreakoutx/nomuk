$( function() {

    $('#pad_1').click( function() {
	number_write($('#pad_1').text());
    });

    $('#pad_2').click( function() {
	number_write($('#pad_2').text());
    });

    $('#pad_3').click( function() {
	number_write($('#pad_3').text());
    });

    $('#pad_4').click( function() {
	number_write($('#pad_4').text());
    });

    $('#pad_5').click( function() {
	number_write($('#pad_5').text());
    });

    $('#pad_6').click( function() {
	number_write($('#pad_6').text());
    });

    $('#pad_7').click( function() {
	number_write($('#pad_7').text());
    });

    $('#pad_8').click( function() {
	number_write($('#pad_8').text());
    });

    $('#pad_9').click( function() {
	number_write($('#pad_9').text());
    });

    $('#pad_0').click( function() {
	number_write($('#pad_0').text());
    });

    $('#pad_dp').click( function() {
	number_write($('#pad_dp').text());
    });

    $('#pad_slash').click( function() {
	number_write($('#pad_slash').text());
    });

    $('#pad_clear').click( function() {
	number_clear();
    });

    $('#pad_c').click( function() {
	number_c();
    });

    function number_write(x)
    {
	//var text_box = document.getElementById("number");
	//text_box.value += x ;
	var text = $('#problem input[name=answer]').val();
	text += x;
	$('#problem input[name=answer]').val(text);
    }

    function number_clear()
    {
	//document.getElementById("number").value = "";
	$('#problem input[name=answer]').val("");
    }
    
    function number_c()
    {
	//var text_box = document.getElementById("number");
	var text = $('#problem input[name=answer]').val();
	var len = text_box.length ;
	console.log(len);
	console.log(text);
	console.log(text.substring(0,len-1));
	$('#problem input[name=answer]').val(text.substring(0,len-1));
    }
});
