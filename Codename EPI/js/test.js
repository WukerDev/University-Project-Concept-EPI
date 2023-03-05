$(document).ready(function() {
    $('.scroll-top-container').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 350) {
            $('.scroll-top-container').fadeIn();
        } else {
            $('.scroll-top-container').fadeOut();
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