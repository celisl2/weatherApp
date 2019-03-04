const apiKey = "fe65315556290762cbdaa0565485574b";
const url = "http://api.openweathermap.org/data/2.5/forecast?zip=";

function weatherIcons(iconCode) {

}

function hourlyWeather(data) {
    var time = "";
    var weather = "";
    var icon;
    var section = "";

    for(var i = 0; i < 13; i ++)
    {
        var monthNames = [
            "January,", "February,", "March,",
            "April,", "May,", "June,", "July,",
            "August,", "September,", "October,",
            "November,", "December,"
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
        weather =  "<p> " + data.list[i].main.temp + " &deg;F</p>";
        icon = '<img src="../img/' + data.list[i].weather[0].icon + '.png">';
        section += '<div class="weatherSection">' + time + weather + icon + "</div>";
    }
    document.getElementById("hourlyWeather").innerHTML = section;
    //document.getElementById("tempWeather").innerHTML = weather;
}

function weather(data, divName) {
    //document.getElementById("info").innerHTML = 

    var section = "";
    var temp = '<h4 class="temp">' + data.list[0].main.temp + ' &deg;F</h4>';
    var description = '<h5 class="desc">' + data.list[0].weather[0].main + '</h5>';
    var icon = '<div class="icon"><img src="../img/' + data.list[0].weather[0].icon + '.png"></div>';

    var cityName = '<h2 class="cityName">' + data.city.name + '</h2>';
    section = cityName + description + temp + icon;
    document.getElementById(divName).innerHTML = section;
}

function getData(url, zip, apiKey, divName) {
    fetch(url + zip + "&units=imperial" +"&APPID=" + apiKey)
    .then(function(response) { return response.json()})
    .then(function(data) {
        //alert(url + zip + "&units=imperial" +"&APPID=" + apiKey);
        weather(data, divName);
        hourlyWeather(data);
    })
    .catch(function() {
        if(Cookies.get('zip') == null)
            alert("couldnt get weather");
    });
}
function prepareData(divName) {
    let zip = Cookies.get('zip');
    getData(url, zip, apiKey, divName);
}








