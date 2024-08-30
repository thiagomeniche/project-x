// main.js
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('navbar-scrolled');
    } else {
        $('.navbar').removeClass('navbar-scrolled');
    }
});


