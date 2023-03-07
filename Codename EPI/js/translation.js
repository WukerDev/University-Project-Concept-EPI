//Config
//Dostepne jezyki
var jezyki=["EN", "PL", "RU", "UA", "DE", "FR", "ES", "IT", "PT", "JP", "KO", "CN", "IN"];
var currentJezyk = "PL";
var cookieJezyk = getCookie("jezyk");

//Funkcja do otwierania linku po kliknieciu
function openLink(link) {
    window.open(link, '_blank');
}

//Funkcja do odczytywania ciasteczka
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

$(document).ready(function() {

    //Sprawdz czy ciasteczko "jezyk" istnieje
    if (!getCookie("jezyk")) {
        document.cookie = "jezyk="+currentJezyk+"; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    }

    //Uzupelnij dropdown o jezyki z listy
    var theDiv = $(".dropdown-menu");
    $.each(jezyki, function(index, value) {
        if (value != cookieJezyk) {
            var flagImg = $("<img width=20 height=20 >").attr("src", "../assets/flags/" + value + ".png");
            var listItem = $("<a style=\"display:flex;\" onClick='changeLang(\""+value+"\")'>").append(flagImg).append("<span>"+value+"</span>");
            theDiv.append(listItem);
        }
    });
    $(".dropdown").append(theDiv);
});

//Funkcja zmieniajaca jezyk strony (zmiana wartosci ciasteczka 'jezyk')
function changeLang(language){
    if (jezyki.includes(language)) {
        document.cookie = "jezyk="+language+"; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    }
    else{
        document.cookie = "jezyk=PL; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    }
        location.reload();
}

//Funkcja ladujaca dane z pliku json
function zaladujDane() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dane = JSON.parse(xhr.responseText);
            //glowna
            $(".translate_home").html('<span><b>' + dane.home + "</b></span>").click(function() {
                window.location.href = "home.html";
            });
            document.title = dane.page_title;
            //galeria
            $(".translate_gallery").html("<span><b>"+ dane.gallery + "</b></span>").click(function() {
                window.location.href = "gallery.html";
            });
            
            //tytul strony
            $(".translate_page_title").html(dane.page_title);

            //jezyk
            $(".translate_lang").html("<span style=\"align-items:center;\"><img style=\"height:auto;margin:0px 2px;\" width=20 height=22 src=\"../assets/flags/"+dane.lang+".png\"><b>"+ dane.lang + "</b></span>");

            //kontakt
            $(".translate_contact").html("<span><b>"+ dane.contact + "</b></span>").click(function() {
                window.location.href = "contact.html";
            });

            //custom click functions
            $('.login-card').click(function() {
                window.location.href = "login.html";
            });
            $('.logo-ukw').click(function() {
                window.location.href = "home.html";
            });

            //copyright
            $(".translate_copyright").html("<span><b>"+ dane.copyright + "</b></span>");

            //darkmode
            $(".translate_darkmode").html("<span><b>"+ dane.darkmode + "</b></span>");

            //login title
            $(".translate_loginhead").html("<span><b><p>"+ dane.LoginHead + "</p></b></span>");

            //login
            $(".translate_login").html('<input type="text" style="width: 100%;" placeholder="' + dane.login + '" required>');

            //password
            $(".translate_password").html('<input type="password" style="width: 100%" placeholder="' + dane.password + '" required>');
            
            //noacc
            $(".translate_noaccount").html("<span>" + dane.noaccount + "</span>");

            //register
            $(".translate_register").html("<p><b>" + dane.registerhead + "</b></p>");
            //register2
            $(".translate_register2").html("<b>" + dane.register + "</b>");
            //loginin
            $(".translate_log_in").html("<span><b>" + dane.log_in + "</b></span>");

            //email 
            $(".translate_email").html('<input type="text" style="width: 100%;" placeholder="' + dane.email + '" required>');

            //forgot password
            $(".translate_forgotpass").html("<span>" + dane.forgot_password + "</span>");
            
        }
    };
    //Otwarcie pliku json na podstawie jezyka przechowywanego w ciasteczku
    xhr.open("GET", "../translations/"+cookieJezyk+".json", true);
    xhr.send();
}
window.onload = addEventListener("load", zaladujDane);