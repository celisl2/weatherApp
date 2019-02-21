function getZipCookie() {
    var cookie = Cookies.get('zip');
    if(cookie == null) {
        window.location.href = "index.html";
    }
    //document.getElementById("cookieZip").innerHTML = Cookies.get('zip');
    return cookie;
}
/*
    will have to get the zipCookie
    call the weatherAPI to get coordinates from zip
*/
function getCoordinates() {

}