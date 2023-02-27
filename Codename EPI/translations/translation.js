//Config
//Languages to be displayed
var jezyki=["EN", "PL", "RU", "UA", "DE", "FR", "ES", "IT"];





function zaladujDane() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dane = JSON.parse(xhr.responseText);
            //home
            var daneDiv = document.getElementById("translate_home");
            daneDiv.innerHTML = "<span>"+ dane.home + "</span>";
            //gallery
            daneDiv = document.getElementById("translate_gallery");
            daneDiv.innerHTML = "<span>"+ dane.gallery + "</span>";
            //page title
            daneDiv = document.getElementById("translate_page_title");
            daneDiv.innerHTML = dane.page_title;
            //lang info
             daneDiv = document.getElementById("translate_lang");
             daneDiv.innerHTML = "<span>"+ dane.lang + "</span>";
            //contact info
            daneDiv = document.getElementById("translate_contact");
            daneDiv.innerHTML = "<span>"+ dane.contact + "</span>";

        }
    };
    xhr.open("GET", "../translations/pl.json", true);
    xhr.send();
}

// function zaladujJezyki() {
// var divs = "";
// for (var i = 0; i < jezyki.length; i++) {
//   divs += "<a>" + jezyki[i] + "</a><br>";
// }
// document.getElementById("jezyki").innerHTML = divs;
// }


// window.onload = addEventListener("load", zaladujJezyki);
window.onload = addEventListener("load", zaladujDane);



// daneDiv = document.getElementById("translate_cookies_info");
// daneDiv.innerHTML = "<span>"+ dane.cookies_info + "</span>";

// daneDiv = document.getElementById("translate_cookies_accept");
// daneDiv.innerHTML = "<span>"+ dane.cookies_accept + "</span>";

// daneDiv = document.getElementById("translate_cookies_more");
// daneDiv.innerHTML = "<span>"+ dane.cookies_more + "</span>";

// daneDiv = document.getElementById("translate_cookies_link");
// daneDiv.innerHTML = '<a href="'+dane.cookies_link+'">'+dane.cookies_more+'</a>';

// daneDiv = document.getElementById("translate_home");
// daneDiv.innerHTML = "<span>"+ dane.home + "</span>";

// daneDiv = document.getElementById("translate_more");
// daneDiv.innerHTML = "<span>"+ dane.more + "</span>";

// daneDiv = document.getElementById("translate_contact");
// daneDiv.innerHTML = "<span>"+ dane.contact + "</span>";