$(document).ready(function() {
    if ($(window).width() > 900) {
        $('prawo-p').show();
        $('borgier-mobile').hide();
    } else {
        $('prawo-p').hide();
        $('borgier-mobile').show().css('display', 'flex');
    }
    $(window).resize(function() {
        if ($(window).width() > 900) {
            $('prawo-p').show();
            $('borgier-mobile').hide();
        } else {
            $('prawo-p').hide();
            $('borgier-mobile').show().css('display', 'flex');
        }
    });
    $('borgier-mobile').click(function() {
        $('.mobile-navbar').toggle().css('display', 'inline-flex');
    });
    $('.mobile-navbar-overlay').click(function() {
        $('.mobile-navbar').toggle().css('display', 'none');
    });
});