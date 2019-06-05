$(".fa-chevron-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".next").offset().top},
        'slow');
});