// code from https://github.com/mombrea/Javascript-Referral-Tracking

// this is the name of the cookie on the users machine
var affiliateCookieName = "XpiksAffiliate",
    affiliateURLParameterName = "ref",
    cookiePersistDays = 62,
    cookiePath = '',    // use '' for default
    cookieDomain = "."+window.location.hostname, // leading . will allow subdomains to also access cookie
    cookieSecure = true;

// Cookie Functions
function createAffiliateCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    var cookie_string = name + "=" + value + expires;
    cookie_string += "; path=" + (cookiePath.length ? cookiePath : '/');
    cookie_string += "; domain=" + (cookieDomain.length ? cookieDomain : window.location.hostname);

    if (cookieSecure) {
        cookie_string += "; secure";
    }

    document.cookie = cookie_string;
}

function readAffiliateCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
        if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length);}
    }
    return '';
}

function eraseAffiliateCookie(name) {
    createAffiliateCookie(name, "", -1);
}

function getParameterByName(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const affiliate = urlParams.get(name);
    return affiliate;
}

/************************ -------------------------- *******************************/
// Extract the code from the URL based on the defined parameter name
function CaptureAffiliate() {
    var q = getParameterByName(affiliateURLParameterName);
    if (q !== null && q !== "") {
        eraseAffiliateCookie(affiliateCookieName);
        createAffiliateCookie(affiliateCookieName, q, cookiePersistDays);
    }
}

// Save a code from an action, not a URL, using the defined variables
function SaveAffiliate(code) {
    if (code !== null && code !== "") {
        eraseAffiliateCookie(affiliateCookieName);
        createAffiliateCookie(affiliateCookieName, code, cookiePersistDays);
    }
}

//Save a code overriding the default variables
function SaveAffiliateManually(_cookieName, _code, _persistDays) {
    if (_cookieName !== null && _cookieName !== "" && _code !== null && _code !== "") {
        eraseCookie(_cookieName);
        createCookie(_cookieName, _code, _persistDays);
    }
}
//This will return the stored cookie value
function GetAffiliate() {
    return readAffiliateCookie(affiliateCookieName);
}

$(document).ready(function() {
    CaptureAffiliate();
});