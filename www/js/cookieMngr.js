const setCookies = function() {
    // Replace loading image
    let zip = $('#zip').val();
    if (zip && zip != ''){
        zip = zip.trim();
        Cookies.set('zip', zip);
        //alert(zip);
    }
    else {
        if(Cookies.get('zip') == null)
            alert('Please enter zip code');
    }

let bussiness = $('#business').is(':checked');
   let entmnt = $('#entertainment').is(':checked');
   let gen = $('#general').is(':checked');
   let health = $('#health').is(':checked');
   let science = $('#science').is(':checked');
   let sports = $('#sports').is(':checked');
   let tech = $('#technology').is(':checked');

    if( (Cookies.get('business')  != null) || (Cookies.get('entmnt')  != null) || (Cookies.get('gen')  != null) || (Cookies.get('health')  != null) || (Cookies.get('science') != null) || (Cookies.get('sports')  != null) || (Cookies.get('tech')  != null)) {
        //check which ones are set
        //delete them
        //set new ones
        if(Cookies.get('business')  != null) {
            Cookies.remove('business');
        }
        if(Cookies.get('entmnt')  != null)  {
            Cookies.remove('entmnt');
        }
        if(Cookies.get('gen')  != null) {
            Cookies.remove('gen');
        }
        if(Cookies.get('health')  != null) {
            Cookies.remove('health');
        }
        if(Cookies.get('science')  != null) {
            Cookies.remove('science');
        }
        if(Cookies.get('sports')  != null) {
            Cookies.remove('sports');
        }
        if(Cookies.get('tech')  != null) {
            Cookies.remove('tech');
        }

    }

   if((bussiness) || (entmnt) || (gen) || (health) || (science) || (sports) || (tech))
   {
        if(bussiness) {
            Cookies.set('business', "business");
        }
        if(entmnt) {
            Cookies.set('entmnt', "entertainment");
        }
        if(gen) {
            Cookies.set('gen', "general");
        }
        if(health) {
            Cookies.set('health', "health");
        }
        if(science) {
            Cookies.set('science', "science");
        }
        if(sports) {
            Cookies.set('sports', "sports");
        }
        if(tech) {
            Cookies.set('tech', "technology");
        }
        //window.location.href = "index.html";

   }
   else {
        Cookies.set('gen', "general");
   }
   getCoordinates();
}

function getZipCookie() {
    var cookie = Cookies.get('zip');
    if(cookie == null) {
        window.location.replace("index.html");
    }
    return cookie;
}
function getCoordinates() {
    let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?zip="
                        + Cookies.get('zip') + "&units=imperial&APPID=" + 
                        "f238418c493f5c5092cb3ec63739a6bb";
    
    fetch(weatherAPI)
    .then(function(response) { return response.json()})
    .then(function(data) {
        Cookies.set('lat', data.city.coord.lat);
        Cookies.set('lon', data.city.coord.lon);
        //alert(Cookies.get("lat") + " - " + Cookies.get("lon"));
        window.location.replace("home.html");
    })
    .catch(function() {
        return false;
    });
}
$(document).ready(function(){

    $('input[type="checkbox"]').click(function(event) {
        if (this.checked && $('input:checked').length > 3) {
            event.preventDefault();
            alert('Select your top 3 news categories. Top news from all categories will be shown in the news page');
        }
    });

    $('.setSettings').click(function() {
        setCookies();
      })
      //window.location.href = "index.html";
      
});