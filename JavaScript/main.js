


$('#datareturn').on('pageinit', function(){

    var displayBank = function(){
        var dataBank;
        if (localStorage['app_players'].length > 0) {
            dataBank = localStorage['app_players'];
        } else {

            $.getJSON( "JSONdata.json", function(data) {
                console.log('data', data);

                dataBank = localStorage['app_players'] = data;

                var displayStr = '';
                for(var i in data) {
                    displayStr += '<li>';
                    displayStr += '<h3>' + data[i].lastname + ' ' + data[i].firstname + '</h3>';
                    displayStr += '<p style="font-weight:bold">' + "Current Club:" + '</p>';
                    displayStr += '<p>' + data[i].club + '</p>';
                    displayStr += '<p>' + data[i].date + '</p>';
                    displayStr += '</li>';
                }
                $('#results').html('<section data-role="content">
                	<ul data-role="listview" data-inset="true" data-filter="true"
                	 data-filter-placeholder="Enter Search Here">' + displayStr + '</ul></section>') ;

                var resultContent = $('#results').html
                ('<section data-role="content"><ul data-role="listview" 
                	data-inset="true" data-filter="true" data-filter-placeholder="Enter Search Here">' 
                	+ displayStr + '</ul></section>');
                $('#resultshead').after(resultContent);
            } );

        }
        displayBank;
    };

});







