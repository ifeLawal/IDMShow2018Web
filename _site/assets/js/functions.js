$( document ).ready(function() {

  //

});

$(function() {
	smoothScroll(300);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


$(document).ready(function(){
  	$('.slickCarousel').slick({
    	dots: true,
  		speed: 500,
  		autoplay: true,
  		arrows: false,
  		mobileFirst: true,
      pauseOnHover: false,
  		autoplaySpeed: 4000
  	});

});
