$(document).ready(function() {
    const nav = document.querySelector(".primary-navigation");
    const expanded = document.querySelector(".mobile-nav-toggle");
    const langVisibility = document.querySelector("#language-picker");
    $('.mobile-nav-toggle').click(function() {
        const visibility = nav.getAttribute("data-visible");
        
        if (visibility === "false") {
            nav.setAttribute("data-visible", true);
            expanded.setAttribute("aria-expanded", true);
        } else if (visibility === "true") {
            nav.setAttribute("data-visible", false);
            expanded.setAttribute("aria-expanded", false);
        }
    });
    $('#language-pick').click(function() {
        const _langVisibility = langVisibility.getAttribute("data-visible");
        if (_langVisibility === "false") {
            langVisibility.setAttribute("data-visible", true);
        } else if (_langVisibility === "true") {
            langVisibility.setAttribute("data-visible", false);
        }
    });
    $('.background-hider').click(function() {
        langVisibility.setAttribute("data-visible", false);
    });
    function testplz(){
        console.log("test");
    }
    //Uzupelnij dropdown o jezyki z listy
    var theDiv = $(".dropdown-menu");
    $.each(jezyki, function(index, value) {
        if (value != cookieJezyk) {
            var flagImg = $("<img width=20 height=20 >").attr("src", "../assets/flags/" + value + ".png");
            var listItem = $("<a class='languages-picker-element' onClick='changeLang(\""+value+"\")'>").append(flagImg).append("<span>"+value+"</span>");
            theDiv.append(listItem);
        }
    });
    $(".dropdown").append(theDiv);
});