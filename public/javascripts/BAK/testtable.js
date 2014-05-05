      $( function() {
      $.ajaxSetup({ cache: false});
      $.ajax( {
               url:"getTableData",
               async:false,
               dataType: "json",
 
               success: function(json) {
                      $('test_table').dataTable(json);
                      $('button[name=rowselect]').click( function() {
                          var testid = $.param({'testid': this.val()});
                          window.location="/mathdrill?"+ testid;
                      });
               },
 
               error: function(xhr,status) {
                   alert("getTableData call failed");
               }
            });
      });
