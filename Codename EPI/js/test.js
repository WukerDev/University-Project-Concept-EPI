$(document).ready(function() {
    $('#scroll-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('#scroll-top').fadeIn("slow");
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});