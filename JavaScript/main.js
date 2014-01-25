//Ejiroghene B. Efevberha
//PlayerSnapp (Talent Scout App)
//JavaScript
//ASDI1401

$(add).on('pageinit', function(){
	//code needed for home page goes here
	
});	

//
$(lastname).on('pageinit', function(){

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
				   $('.results').append('<ul data-role="listview" data-inset="true" data-filter="true" 
		 				 data-filter-placeholder="Enter Search Here">' + displayStr + '</ul>') ;
				} );
			}	
			
};
var pussy = function(){ console.log ("I am married");
};



$(".results").on("click", displayBank);
};


