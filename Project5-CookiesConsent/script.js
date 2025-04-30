document.getElementById("acceptCookies").addEventListener("click", acceptCookies);
document.getElementById("closeCookie").addEventListener("click", closeCookie);

document.addEventListener("DOMContentLoaded", checkCookies);

function checkCookies() {
    let username = getCookie("username");
    if (username != "") {
      closeCookie();
    } else {
        return;
    }
}

function acceptCookies() {
    console.log("Cookies accepted");
    setCookie("username", "username", 365);
    document.getElementById("cookiePopUp").style.display = "none";
}

function closeCookie() {
    console.log("Cookie closed");
    document.getElementById("cookiePopUp").style.display = "none";
}

// Cookie functions
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime()) + (exdays*24*60*60*1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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