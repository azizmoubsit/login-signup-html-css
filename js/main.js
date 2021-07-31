$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 1
    });
    $('#login').click(function () {
        $('#loginDiv').toggleClass('hidden');
        $('#signupDiv').toggleClass('hidden');
    })
    $('#signup').click(function () {
        $('#loginDiv').toggleClass('hidden');
        $('#signupDiv').toggleClass('hidden');
    })
    
});