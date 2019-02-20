const apiKey = "fe65315556290762cbdaa0565485574b";
const url = "http://api.openweathermap.org/data/2.5/forecast?zip=";

function setData(data) {
    //document.getElementById("info").innerHTML = 
    var temp = data.list[0].main.temp;
    var description = data.list[0].weather[0].main;
    var icon = data.list[0].weather[0].icon;

    document.getElementById("temp").innerHTML = temp;
    document.getElementById("desc").innerHTML = description;
    document.getElementById("icon").innerHTML = icon;
    alert(temp);
}


function getData(url, zip, apiKey) {
    fetch(url + zip + "&units=imperial" +"&APPID=" + apiKey)
    .then(function(response) { return response.json()})
    .then(function(data) {
        //call formatting function
        setData(data);
    })
    .catch(function() {
        alert("couldnt get weather");
    });
}

const prepareData = function() {
    // Replace loading image
    let zip = $('#zip').val();
    // Make ajax call, callback
    if (zip && zip != ''){
        zip = zip.trim();
        getData(url, zip, apiKey);
    }
    else {
        alert('Please enter zip code');
    }
}
$(document).ready(function(){
    $('.getWeather').click(function() {
        prepareData();
      })
});


