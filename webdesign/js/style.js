$(function(){

    var distance = $('.name').offset().top;
    block = $(".name")
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            $(".insidename").fadeIn()
            $(".name>p").fadeOut()
        }
        else {
            $(".insidename").fadeOut()
            $(".name>p").delay(1000).fadeIn() 
        }
    });
    console.log($(window).scrollTop() + "px")

}(window));