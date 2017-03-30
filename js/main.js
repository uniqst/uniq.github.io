$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
}); //document.ready
//animate scroll	
	
    $('.project-animation').each(function(){
      var blockPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (blockPos < topOfWindow+100) {
        $(this).addClass(' fadeInUp');
      }
    });
  

 
function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: jQuery("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = jQuery.parseJSON(response);
             $('#result_form').fadeIn(1500);
        	document.getElementById(result_form).innerHTML = "Спасибо за вашу заявку, вскоре свами свяжутся";
             $('#ajax_form').fadeOut(1500);
            
    	},
    	error: function(response) { // Данные не отправлены
    		document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
    	}
 	});
}


$("#phone").mask("+380 (99) 999-9999");


// News Post Carousel
$("#testimonail-carousel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	items : 3,
	stopOnHover : true,
	navigation : false, // Show next and prev buttons
	pagination : true
});







	