const apiKey = "fe65315556290762cbdaa0565485574b";
const url = "http://api.openweathermap.org/data/2.5/forecast?zip=";

function hourlyWeather(data) {
    var time = "";
    var weather = "";
    var icon;
    var section = "";

    for(var i = 0; i < 13; i ++)
    {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        var date = new Date(data.list[i].dt_txt)
        var day = date.getDate();
        var hours = date.getHours();
        var month = date.getMonth();
        var suffix = hours >= 12 ? " PM":" AM";
        hours = ((hours + 11) % 12 + 1) + suffix;
        // JALEN: if you want to add more html tags do so by:
          // "<tag name> + variables provided + </tag name>"
        time = "<p>" + monthNames[month] + " " + day + " " + hours + "</p>";
        weather =  "<p>Temperature: " + data.list[i].main.temp + "</p>";
        icon = '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png">';
        section += '<div class="weatherSection">' + time + weather + icon + "</div>";
    }
    document.getElementById("hourlyWeather").innerHTML = section;
    //document.getElementById("tempWeather").innerHTML = weather;
}

function weather(data) {
    //document.getElementById("info").innerHTML = 
    var temp = data.list[0].main.temp;
    var description = data.list[0].weather[0].main;
    var icon = data.list[0].weather[0].icon;
    var cityName = data.city.name;

    document.getElementById("cityName").innerHTML = cityName;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("desc").innerHTML = description;
    document.getElementById("icon").innerHTML = '<img src="http://openweathermap.org/img/w/' + icon + '.png">';
}

function getData(url, zip, apiKey) {
    fetch(url + zip + "&units=imperial" +"&APPID=" + apiKey)
    .then(function(response) { return response.json()})
    .then(function(data) {
        //alert(url + zip + "&units=imperial" +"&APPID=" + apiKey);
        weather(data);
        hourlyWeather(data);
    })
    .catch(function() {
        if(Cookies.get('zip') == null)
            alert("couldnt get weather");
    });
}
const prepareData = function() {
    let zip = Cookies.get('zip');
    getData(url, zip, apiKey);
}

$(document).ready(function(){
    prepareData();
});






