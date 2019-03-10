
jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

const openMenu = () =>{
    document.getElementById("menu").style.width = "30%";
    document.getElementById("menu").style.height = "40%";
}
const closeMenu = () =>{
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.height = "0";
}

// carousel materialize
$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
