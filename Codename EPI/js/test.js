$(document).ready(function() {
    if ($(window).scrollTop() >= 350) {
        $('.scroll-top-container').attr('isvisible', 'true');
        $('.scroll-top-container').fadeIn();
    } else {
        $('.scroll-top-container').attr('isvisible', 'false');
        $('.scroll-top-container').hide();
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 350) {
            if ($('.scroll-top-container').attr('isvisible') == 'false') {
                $('.scroll-top-container').attr('isvisible', 'true');
                $('.scroll-top-container').fadeIn();
            }
        } else {
            if ($('.scroll-top-container').attr('isvisible') == 'true') {
                $('.scroll-top-container').attr('isvisible', 'false');
                $('.scroll-top-container').fadeOut();
            }
        }
    });
    $('#scroll-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
function printElement() {
    console.log($('body'));
}