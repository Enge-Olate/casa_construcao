$(document).ready(function(){
    
    
    $('#sobre_us').click(function(e){
    	
		 e.preventDefault();
		 $('.sobre_nos').show();
		 });
    
    if ($(window).width() <=600){
			$('.sobre_nos').hide()    
    }
});