scrollPrevious = 0;
$(window).scroll(function() {    
    var scrollActual = $(window).scrollTop();    
    if (scrollActual >= 50) {
        $(".menu").addClass("menu-clone");
    }
    else{
    	$(".menu").removeClass("menu-clone");
    }

    // menu fade

    if (){
        
    }

});

// Swiper ///////////////

$(document).ready(function(){

	var mySwiper = new Swiper('.swiper-container', {

		// If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        
        // Navigation arrows
        nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    });
})


