function zaladujDane() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dane = JSON.parse(xhr.responseText);
            var daneDiv = document.getElementById("translate_lang");
            daneDiv.innerHTML = "<span>"+ dane.home + "</span>";
            daneDiv = document.getElementById("translate_gallery");
            daneDiv.innerHTML = "<span>"+ dane.gallery + "</span>";
            
        }
    };
    xhr.open("GET", "../translations/en.json", true);
    xhr.send();
}
window.onload = addEventListener("load", zaladujDane);

// daneDiv = document.getElementById("translate_page_title");
// daneDiv.innerHTML = "<span>"+ dane.page_title + "</span>";

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