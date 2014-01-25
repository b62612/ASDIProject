//Ejiroghene B. Efevberha
//PlayerSnapp (Talent Scout App)
//JavaScript
//ASDI1401

$("#add").on("click", function(){



	});

$('index').on('pageinit', function(){
	//code needed for home page goes here
	
});	

//
$(document).on('pageinit', function(){

	
		var myForm = $('#addplayerform');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				var errors = validator.numberOfInvalids();

         		if (errors) {
             	    var message = errors == 1
                    ? 'Please check the highlighted field and enter required information'
                    : 'Please check the ' + errors + ' fields highlighted and enter required information';
                    $(".form-error", form.currentTarget).html(message).css('color', 'red').show();
                } 
			},
			submitHandler: function(form) {
				$(".form-error", form.currentTarget).hide();
				var data = myForm.serializeArray();
				submitData(data);
			}
	});

	//any other code needed for addItem page goes here
  	<!-- datepicker code -->
	
	$(function() {
        $( ".datepicker" ).datepicker();
    });
    
    
    
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var submitData = function(data){
						
					var item = {};
					
					for(var i in data) {
						if(data[i].name != 'playerid') {
							item[data[i].name] = data[i].value;
							if(data[i].name == 'agegrade') {
								item[data[i].name] = (item[data[i].name] == 'noageselect') ? '' : item[data[i].name];
							}
						} else {
						    var id = data[i].value;												
						}						
					}
					if (!id) {
						id = Math.floor(Math.random()*10000000001);
					}
					console.log(id);	
					console.log(item);				
			localStorage.setItem(id, JSON.stringify(item));	
			console.log(item);
			
			alert("Player Saved!");
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};




