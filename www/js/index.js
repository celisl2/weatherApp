/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

const apiKey = "fe65315556290762cbdaa0565485574b";
const url = "http://api.openweathermap.org/data/2.5/forecast?zip=";

function setData(data) {
    //document.getElementById("info").innerHTML = 
    var temp = data.list[0].main.temp;
    var description = data.list[0].weather[0].main;
    var icon = data.list[0].weather[0].icon;

    document.getElementById("temp").innerHTML = "Temperature: " + temp + "F";
    document.getElementById("desc").innerHTML = description;
    document.getElementById("icon").innerHTML = '<img src="http://openweathermap.org/img/w/' + icon + '.png">';
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



